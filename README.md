# Portfolio — 김보경

React + Vite 기반 포트폴리오.

## 시작

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # 프로덕션 빌드 (dist/)
npm run preview      # 빌드 결과 미리보기
```

## 폴더 구조

```
portfolio/
├── public/
│   └── resume.pdf            ← 본인 이력서 PDF 여기에 넣으세요
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
└── index.html
```

## 수정 포인트

- `src/components/Projects.jsx` — 프로젝트 제목/설명/링크 교체
- `src/components/Contact.jsx` — 이메일, GitHub, Notion, LinkedIn 주소
- `src/components/About.jsx` — 타임라인 연혁
- `public/resume.pdf` — 본인 이력서 파일

## Vercel 배포

1. GitHub에 push
2. https://vercel.com 에서 "Add New > Project"
3. 저장소 선택 → 자동 인식 → Deploy

별도 설정 불필요.
