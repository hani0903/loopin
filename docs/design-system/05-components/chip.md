# Chip & Badge

## 스펙

| 속성    | 값                                              |
| ------- | ----------------------------------------------- |
| radius  | `rounded-sm` (4px)                              |
| font    | `text-caption` (12px) 또는 `text-body-3` (14px) |
| padding | `px-2 py-0.5` (소형) / `px-3 py-1` (일반)       |

## Variants

| Variant    | 배경                       | 텍스트                   | 보더                    |
| ---------- | -------------------------- | ------------------------ | ----------------------- |
| `filled`   | `--primary-container`      | `--on-primary-container` | 없음                    |
| `outlined` | 투명                       | `--primary`              | Ghost Border            |
| `neutral`  | `--surface-container-high` | `--on-surface-variant`   | 없음                    |
| `accent`   | `accent-100`               | `accent-700`             | 없음 (보상·진행도 전용) |

## ❌ 금지

- `rounded-full` 사용 금지 (pill 형태는 이 프로젝트 스타일이 아님)
- `accent` variant를 일반 카테고리 태그에 사용 금지 (보상·XP 전용)
- 8px 미만 폰트 크기 금지
