# Elevation

## Tonal Layering

배경 톤 차이로 시각적 계층을 만든다. 선 대신 면으로 구분한다.

```
페이지 배경 (#FBF9F9)
  └── surface-container-low (#F5F3F3)   ← 카드
        └── surface-container (#EFEDED)  ← 카드 내부 섹션
              └── surface-container-high (#E9E8E7)  ← 강조 셀
```

레이어를 건너뛰지 않는다. `background` 위에 바로 `surface-container-highest`를 올리면 대비가 과하다.

## Shadow 토큰

| 토큰              | 값                                | 사용처                 |
| ----------------- | --------------------------------- | ---------------------- |
| `shadow-card`     | `0 4px 20px rgba(15,23,42,0.06)`  | 카드, 일반 부유 요소   |
| `shadow-floating` | `0 12px 40px rgba(15,23,42,0.12)` | 모달, 드롭다운, 팝오버 |

그림자는 이 두 단계만 사용한다. `shadow-xl`, `shadow-2xl` 등 Tailwind 기본 강한 그림자는 금지.

## Ghost Border

경계선이 꼭 필요한 경우에만 사용한다. `outline-variant` 색상으로 경계를 암시한다.

```tsx
// Ghost Border 패턴
<div className="rounded-xl border border-[var(--outline-variant)]">
  입력 필드
</div>
```

적용 대상: Input, Select, 포커스 링, 구분선(Divider)  
**버튼·카드에는 Ghost Border를 사용하지 않는다.**

## 다크 모드 elevation 매핑

| 라이트                  | 다크                                |
| ----------------------- | ----------------------------------- |
| `surface-container-low` | `dark-surface` (`#171923`)          |
| `surface-elevated`      | `dark-surface-elevated` (`#202433`) |
| `surface-hover`         | `dark-surface-hover` (`#1D2130`)    |
