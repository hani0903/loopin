# Input

## 스펙

| 속성       | 값                                                      |
| ---------- | ------------------------------------------------------- |
| radius     | `rounded-xl`                                            |
| border     | Ghost Border (`border border-[var(--outline-variant)]`) |
| background | `--surface-container-low`                               |
| font       | `text-body-2` (16px / 400)                              |
| height     | `h-11` (44px) — 모바일 터치 타겟 기준                   |

## States

| State    | 처리                                                    |
| -------- | ------------------------------------------------------- |
| default  | Ghost Border (`--outline-variant`)                      |
| focus    | `outline-2 outline-[--primary]` + Ghost Border 유지     |
| error    | `border-[var(--error)]`                                 |
| disabled | `opacity-40 cursor-not-allowed bg-[var(--surface-dim)]` |

## ❌ 금지

- `border: 1px solid` 직접 색상 지정 금지 → CSS 변수 경유
- `rounded-md` 이하 반경 금지
- 높이 44px 미만 금지 (모바일 터치 타겟)
