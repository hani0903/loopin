# Button

## 스펙

| 속성       | 값                                   |
| ---------- | ------------------------------------ |
| radius     | `rounded-xl`                         |
| shadow     | 없음 (flat)                          |
| font       | `text-button` (16px / 600 / -0.01em) |
| transition | `120ms easing-standard`              |

## Variants

| Variant   | 배경        | 텍스트         | 호버                             |
| --------- | ----------- | -------------- | -------------------------------- |
| `primary` | `--primary` | `--on-primary` | opacity 90%                      |
| `ghost`   | 투명        | `--on-surface` | `--surface-hover`                |
| `outline` | 투명        | `--primary`    | `--surface-hover` + Ghost Border |

## Sizes

| Size | padding       | 설명            |
| ---- | ------------- | --------------- |
| `sm` | `px-3 py-1.5` | 인라인, 칩 내부 |
| `md` | `px-4 py-2`   | 기본            |
| `lg` | `px-6 py-3`   | CTA, 히어로     |

## States

| State         | 처리                                             |
| ------------- | ------------------------------------------------ |
| hover         | `--surface-hover` 또는 opacity 조절              |
| active        | `--surface-active`                               |
| disabled      | `opacity-40 cursor-not-allowed`                  |
| focus-visible | `outline-2 outline-offset-2 outline-[--primary]` |

## ❌ 금지

- `rounded-full` 사용 금지 (아이콘 버튼 전용)
- `border: solid` 사용 금지 → outline variant는 Ghost Border(`border-[var(--outline-variant)]`)만 허용
- 인라인 `style` 속성으로 색상 지정 금지
