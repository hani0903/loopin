# ✅ Do — 허용 규칙

## Color

- 텍스트: `--on-surface` (기본) / `--on-surface-variant` (보조)
- CTA: `--primary` 단독 사용
- 정보성 액션: `--secondary`
- 보상·XP·스트릭: `--accent-500` / `--accent-700` 전용
- 라이트/다크 CSS 변수 쌍으로 항상 정의

## Typography

- 허용 크기: 60 / 40 / 36 / 28 / 20 / 16 / 14 / 12 px
- 버튼 레이블: 16px / font-weight 600 / tracking -0.01em
- 코드·기술 표기: JetBrains Mono
- 모바일 히어로: 40px / 데스크탑 히어로: 60px
- 타입 계층: title-1 → title-2 → title-3 순서 준수

## Spacing

- gap 스케일: 0.5 / 1 / 1.5 / 2 / 3 / 4 rem
- 모바일 퍼스트 작성 → `md:` 브레이크포인트로 확장
- 본문 텍스트 영역: `max-w-[48rem]` 제한

## Radius

- Button · Input: `rounded-xl`
- Card · Modal · Sheet: `rounded-2xl`
- Avatar · Icon Button: `rounded-full`
- Badge · Tag · Chip: `rounded-sm`

## Shadow

- 일반 카드: `0 4px 20px rgba(15,23,42,0.06)`
- 부유 요소 (모달·드롭다운): `0 12px 40px rgba(15,23,42,0.12)`

## Elevation (No-Line)

- 계층 구분: surface-container 단계 사용 (lowest → low → default → high → highest)
- 경계선 필요 시: `border border-[var(--outline-variant)]` (Ghost Border)만 허용
- 레이어는 인접 단계만 건너뛰지 않고 순서대로 올라간다

## Motion

- 이징: `cubic-bezier(0.2, 0, 0, 1)` 고수
- 호버·포커스: `120ms`
- 일반 전환: `220ms`
- 페이지 진입: `360ms`
- 카드 목록: stagger delay `60ms` 간격
- `prefers-reduced-motion` 대응 필수

## 접근성

- 버튼·링크: `focus-visible` 스타일 명시
- 외부 링크: `target="_blank"` + `rel="noreferrer"`
- 모달 딤: `surface-overlay` (`rgba(17,17,17,0.48)`)
