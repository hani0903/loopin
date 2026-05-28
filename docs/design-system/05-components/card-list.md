# Card & List

## Card 스펙

| 속성       | 값                                           |
| ---------- | -------------------------------------------- |
| radius     | `rounded-2xl`                                |
| background | `--surface-container-low`                    |
| shadow     | `shadow-card`                                |
| padding    | `p-4` (모바일) / `p-6` (데스크탑)            |
| hover      | `--surface-hover` + `translateY(-1px)` 120ms |

## Card 내부 계층

```
card (surface-container-low)
  └── section (surface-container)
        └── highlight (surface-container-high)
```

## List Item 스펙

| 속성    | 값                                              |
| ------- | ----------------------------------------------- |
| padding | `px-4 py-3`                                     |
| 구분    | tonal 배경 차이만 사용 (Divider 선 금지)        |
| hover   | `--surface-hover`                               |
| radius  | `rounded-xl` (독립 아이템) / 없음 (리스트 내부) |

## 외부 링크 카드

외부 URL로 이동하는 카드는 반드시:

- `target="_blank"` + `rel="noreferrer"` 명시
- 우측 상단 외부 링크 아이콘(`↗`) 표시

## ❌ 금지

- `rounded-lg` 이하 반경 사용 금지
- `shadow-xl` 등 강한 그림자 금지
- 리스트 아이템 간 `border-b` 구분선 금지 → tonal 배경으로 구분
