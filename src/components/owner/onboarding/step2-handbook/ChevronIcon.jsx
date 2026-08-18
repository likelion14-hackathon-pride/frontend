// 텍스트 문자 '⌄'는 폰트마다 글리프 중심이 안 맞아서 회전시키면 한쪽으로 치우쳐 보인다.
// 정확히 가운데 맞춰진 SVG 로 대신 그린다.
function ChevronIcon({ className }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 3.75L5 6.5L7.75 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronIcon;
