# Bokyung Kim — Portfolio

백엔드 중심 풀스택 개발자 김보경의 포트폴리오 웹사이트입니다.

**배포 주소**: [Vercel](https://vercel.com) 을 통해 배포

---

## Tech Stack

| 분류 | 사용 기술 |
|------|-----------|
| Framework | React 18 + Vite |
| Styling | Vanilla CSS (CSS Custom Properties) |
| Font | Pretendard Variable, JetBrains Mono |
| Deploy | Vercel |

## Features

- 반응형 디자인 (모바일 햄버거 메뉴 포함)
- 섹션별 스무스 스크롤 네비게이션
- Hero / About / Skills / Projects / Contact 구성
- 이력서 PDF Google Drive 연동, 자기소개서 PDF 열람, GitHub 링크

## Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   └── coverLetter.pdf
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
└── index.html
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # 프로덕션 빌드 (dist/)
npm run preview   # 빌드 결과 미리보기
```

## Contact

- Email: dev.bokyungkim@gmail.com
- GitHub: [github.com/KimBoKyung07](https://github.com/KimBoKyung07)
