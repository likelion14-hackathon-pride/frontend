import { useState } from 'react'
import { saveGuardKeywords } from '../../../api/guards'

const RECOMMENDED = [
  { keyword: '프로덕션 배포', note: '배포 전 반드시 팀 리뷰를 거쳐주세요.', level: 'irreversible' },
  { keyword: '환불 처리', note: '환불은 되돌릴 수 없으니 금액과 사유를 재확인하세요.', level: 'irreversible' },
  { keyword: '고객 데이터 삭제', note: '삭제 전 백업 여부를 확인하세요.', level: 'irreversible' },
  { keyword: '대량 이메일 발송', note: '수신자 목록을 다시 확인하세요.', level: 'caution' },
  { keyword: '요금제 변경', note: '과금에 영향을 줄 수 있어요.', level: 'caution' },
]

const LEVEL_STYLE = {
  caution: { bg: '#FFF1E1', text: '#C97A22', labelKo: '주의', labelEn: 'Caution' },
  irreversible: { bg: '#FDF0F0', text: '#B4453F', labelKo: '되돌릴 수 없음', labelEn: 'Irreversible' },
}

const StepGuardrails = ({ headingRef, onNext, lang }) => {
  const [keywords, setKeywords] = useState([])
  const [keyword, setKeyword] = useState('')
  const [note, setNote] = useState('')
  const [level, setLevel] = useState('caution')
  const [saving, setSaving] = useState(false)

  const canAdd = keyword.trim() && note.trim()

  const handleAdd = () => {
    if (!canAdd) return
    setKeywords((prev) => [...prev, { id: `k${Date.now()}`, keyword: keyword.trim(), note: note.trim(), level }])
    setKeyword('')
    setNote('')
    setLevel('caution')
  }

  const handleRemove = (id) => setKeywords((prev) => prev.filter((k) => k.id !== id))

  const handlePrefill = (chip) => {
    setKeyword(chip.keyword)
    setNote(chip.note)
    setLevel(chip.level)
  }

  const handleNext = async () => {
    setSaving(true)
    await saveGuardKeywords(keywords.map(({ keyword, note, level }) => ({ keyword, note, level })))
    setSaving(false)
    onNext()
  }

  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-0 py-10">
      <h2 ref={headingRef} tabIndex={-1} className="text-[18px] font-extrabold outline-none">
        {lang === 'ko' ? '되돌릴 수 없는 작업 등록' : 'Register irreversible actions'}
      </h2>
      <p className="text-[12.5px] text-muted mt-2 mb-6">
        {lang === 'ko' ? '경고가 필요한 키워드를 등록하세요. 0개로도 진행할 수 있어요.' : 'Register keywords that need a warning. You can continue with none.'}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {RECOMMENDED.map((chip) => (
          <button key={chip.keyword} type="button" onClick={() => handlePrefill(chip)} className="px-3 py-1.5 rounded-full bg-[#F2F2F4] text-[#6B6B73] text-[11px] font-bold hover:bg-[#EAEAED] transition">
            {chip.keyword}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-card border border-[#EFEFF1] p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder={lang === 'ko' ? '키워드 (예: 환불 처리)' : 'Keyword (e.g. Refund)'}
            className="border border-border rounded-input px-3.5 py-2.5 text-sm bg-field outline-none focus:border-accent"
          />
          <div className="flex gap-1 bg-[#EDEDF0] p-1 rounded-input">
            {['caution', 'irreversible'].map((lv) => (
              <button
                key={lv}
                type="button"
                onClick={() => setLevel(lv)}
                className={`flex-1 py-2 rounded-lg text-[11.5px] font-bold transition ${
                  level === lv ? 'bg-white text-ink shadow-sm' : 'bg-transparent text-muted'
                }`}
              >
                {lang === 'ko' ? LEVEL_STYLE[lv].labelKo : LEVEL_STYLE[lv].labelEn}
              </button>
            ))}
          </div>
        </div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          placeholder={lang === 'ko' ? '안내문 (이 작업을 할 때 보여줄 경고 문구)' : 'Note (warning shown when this action happens)'}
          className="w-full border border-border rounded-input px-3.5 py-2.5 text-sm bg-field outline-none focus:border-accent"
        />
        <button type="button" disabled={!canAdd} onClick={handleAdd} className="bg-ink text-white rounded-cta px-4 py-2 text-[12.5px] font-bold disabled:opacity-40 disabled:cursor-not-allowed">
          {lang === 'ko' ? '추가' : 'Add'}
        </button>
      </div>

      {keywords.length > 0 && (
        <div className="mt-5 space-y-2">
          {keywords.map((k) => {
            const style = LEVEL_STYLE[k.level]
            return (
              <div key={k.id} className="flex items-start gap-3 bg-white rounded-card border border-[#EFEFF1] p-3.5">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-none" style={{ backgroundColor: style.bg, color: style.text }}>
                  {lang === 'ko' ? style.labelKo : style.labelEn}
                </span>
                <div className="flex-1">
                  <div className="text-[13px] font-bold">{k.keyword}</div>
                  <div className="text-[11.5px] text-muted mt-0.5">{k.note}</div>
                </div>
                <button type="button" onClick={() => handleRemove(k.id)} className="text-[11px] font-bold text-muted hover:text-ink flex-none">
                  {lang === 'ko' ? '삭제' : 'Remove'}
                </button>
              </div>
            )
          })}
        </div>
      )}

      <button type="button" disabled={saving} onClick={handleNext} className="mt-8 bg-accent text-white rounded-cta px-4 py-2.5 text-[13px] font-bold disabled:opacity-60">
        {saving ? (lang === 'ko' ? '저장하는 중…' : 'Saving…') : (lang === 'ko' ? '다음 단계로' : 'Next step')}
      </button>
    </div>
  )
}

export default StepGuardrails