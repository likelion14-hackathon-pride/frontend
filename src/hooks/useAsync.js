import { useCallback, useEffect, useRef, useState } from 'react';

import { toApiError } from '../apis/errors';

export function useAsync(fn, deps = [], { enabled = true, initialData = null } = {}) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  const mountedRef = useRef(true);
  const runIdRef = useRef(0);
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const run = useCallback(async () => {
    if (!enabled) {
      setLoading(false);
      return undefined;
    }

    const runId = runIdRef.current + 1;
    runIdRef.current = runId;

    setLoading(true);
    setError(null);
    try {
      const result = await fnRef.current();
      // 늦게 도착한 옛 응답이 새 응답을 덮어쓰지 않게 한다.
      if (mountedRef.current && runIdRef.current === runId) {
        setData(result);
      }
      return result;
    } catch (caught) {
      if (mountedRef.current && runIdRef.current === runId) {
        setError(toApiError(caught));
      }
      return undefined;
    } finally {
      if (mountedRef.current && runIdRef.current === runId) {
        setLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps]);

  useEffect(() => {
    run();
  }, [run]);

  return { data, loading, error, reload: run, setData };
}

export function useMutation(fn) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const mutate = useCallback(
    async (...args) => {
      setPending(true);
      setError(null);
      try {
        const result = await fn(...args);
        return { ok: true, data: result };
      } catch (caught) {
        const apiError = toApiError(caught);
        if (mountedRef.current) setError(apiError);
        return { ok: false, error: apiError };
      } finally {
        if (mountedRef.current) setPending(false);
      }
    },
    [fn]
  );

  return { mutate, pending, error, clearError: () => setError(null) };
}

export default useAsync;
