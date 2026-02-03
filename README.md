<div align="center">

# 🎨 Imweb Design Studio

**초보자부터 고급 사용자까지 모두를 위한 HTML/Tailwind CSS 디자인 스튜디오**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[데모 보기](#-주요-기능) · [시작하기](#-시작하기) · [문서](#-프로젝트-구조) · [기여하기](#-향후-개선-사항)

</div>

---

## 📖 소개

**Imweb Design Studio**는 웹 디자인을 더 쉽고 빠르게 만들어주는 올인원 디자인 도구입니다.

- 🎯 **초보자**: 미리 만들어진 템플릿을 클릭 한 번으로 사용
- 💻 **개발자**: 실시간 코드 에디터로 자유롭게 커스터마이징
- 💾 **모두**: 나만의 템플릿을 저장하고 관리

<div align="center">

### 🌟 핵심 가치

| 초보자 친화적 | 강력한 에디터 | 템플릿 관리 |
|:---:|:---:|:---:|
| 10개의 미리 제작된 템플릿 | VS Code 스타일 에디터 | localStorage 기반 저장 |
| 검색 & 필터링 | 실시간 프리뷰 | Import/Export 지원 |
| 클릭 한 번으로 복사 | Tailwind CSS 지원 | 무제한 저장 |

</div>

---

## ✨ 주요 기능

### 🏠 갤러리 모드
> 초보자를 위한 템플릿 브라우저

- 📦 **10개의 즉시 사용 가능한 템플릿**
  - Hero Sections, Cards, Navigation, Forms, Buttons, Footers
- 🔍 **스마트 검색**: 이름, 설명, 태그로 빠른 검색
- 🎯 **카테고리 필터**: 원하는 타입만 골라보기
- 👁️ **실시간 프리뷰**: 클릭하면 모달로 상세 보기
- 📋 **원클릭 복사**: 코드 복사 또는 에디터로 열기

### ✏️ 에디터 모드
> 고급 사용자를 위한 코드 에디터

- 🎨 **VS Code 스타일**: 익숙한 다크 테마
- ⚡ **실시간 프리뷰**: 코드 변경 즉시 반영
- 📐 **50:50 분할 레이아웃**: 에디터 + 프리뷰
- 🔤 **Fira Code 폰트**: 코딩에 최적화된 폰트
- 🎯 **Tailwind CSS**: `dc-` prefix로 충돌 방지

### 💾 내 템플릿
> 나만의 템플릿 라이브러리

- 💿 **로컬 저장**: localStorage 기반 영구 저장
- 📝 **CRUD 완벽 지원**: 생성, 읽기, 수정, 삭제
- 📤 **Import/Export**: JSON 파일로 백업 및 공유
- 🏷️ **메타데이터**: 생성/수정 시간 자동 추적

---

## 🚀 시작하기

### 📋 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### ⚡ 빠른 시작

```bash
# 1. 저장소 클론
git clone https://github.com/yourusername/imweb-code-studio.git
cd imweb-code-studio

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저에서 열기
# 🌐 http://localhost:3000
```

### 🏗️ 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

---

## 📁 프로젝트 구조

```
imweb-code-studio/
│
├── 📂 app/
│   ├── 📂 components/          # React 컴포넌트
│   │   ├── Editor.tsx          # 코드 에디터
│   │   ├── Preview.tsx         # 실시간 프리뷰
│   │   ├── TemplateManager.tsx # 템플릿 관리
│   │   ├── TabNavigation.tsx   # 탭 네비게이션
│   │   └── TemplateGallery.tsx # 템플릿 갤러리
│   │
│   ├── 📂 data/
│   │   └── prebuilt-templates.ts # 미리 제작된 템플릿
│   │
│   ├── 📂 utils/
│   │   └── storage.ts          # localStorage 유틸리티
│   │
│   ├── globals.css             # 글로벌 스타일
│   ├── layout.tsx              # 루트 레이아웃
│   └── page.tsx                # 메인 페이지
│
├── 📂 docs/
│   ├── PRD.md                  # 제품 요구사항 문서
│   └── TASK.md                 # 작업 체크리스트
│
└── 📂 public/                  # 정적 파일
```

---

## 🛠️ 기술 스택

<div align="center">

| Category | Technology |
|:---:|:---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS (CDN) |
| **Font** | Fira Code (Google Fonts) |
| **State** | React Hooks (useState) |
| **Storage** | localStorage |

</div>

### 🎨 디자인 시스템

```css
/* 컬러 팔레트 */
--bg-dark: #1e1e1e;
--bg-medium: #2d2d2d;
--text-light: #d4d4d4;
--text-medium: #9ca3af;
--text-dark: #6b7280;
--accent-blue: #3b82f6;
--accent-green: #10b981;
--accent-red: #ef4444;
```

---

## 📦 제공 템플릿

<div align="center">

| 카테고리 | 템플릿 | 설명 |
|:---:|:---|:---|
| 🏠 **Hero** | Gradient Hero | 그라디언트 배경의 히어로 섹션 |
| 🏠 **Hero** | Split Hero | 좌우 분할 레이아웃 |
| 🃏 **Card** | Product Card | 제품 소개 카드 |
| 🃏 **Card** | Pricing Card | 가격 플랜 카드 |
| 🧭 **Navigation** | Top Nav | 로고가 있는 상단 네비게이션 |
| 📝 **Form** | Contact Form | 연락처 입력 폼 |
| 📝 **Form** | Login Form | 로그인 폼 |
| 🔘 **Button** | Primary Button | 기본 버튼 |
| 🔘 **Button** | Gradient Button | 그라디언트 버튼 |
| 📄 **Footer** | Simple Footer | 심플한 푸터 |

</div>

---

## 🎓 학습 포인트

이 프로젝트를 통해 배울 수 있는 것들:

<details>
<summary><b>1️⃣ Next.js 14 App Router</b></summary>

- 최신 Next.js 구조 및 파일 기반 라우팅
- Server Components vs Client Components
- Metadata API 활용
</details>

<details>
<summary><b>2️⃣ React Hooks</b></summary>

- useState를 활용한 상태 관리
- 컴포넌트 간 props 전달
- 이벤트 핸들링
</details>

<details>
<summary><b>3️⃣ Tailwind CSS</b></summary>

- 유틸리티 퍼스트 CSS 프레임워크
- CDN 방식 통합
- Prefix를 통한 네임스페이스 관리
</details>

<details>
<summary><b>4️⃣ TypeScript</b></summary>

- 인터페이스 정의
- 타입 안정성
- Props 타입 지정
</details>

<details>
<summary><b>5️⃣ localStorage</b></summary>

- 브라우저 저장소 활용
- JSON 직렬화/역직렬화
- CRUD 패턴 구현
</details>

---

## 📈 개발 로드맵

### ✅ 완료된 단계

- [x] **Phase 1**: 프로젝트 초기화 및 설정
- [x] **Phase 2**: 핵심 UI 구현 (Editor + Preview)
- [x] **Phase 3**: 실시간 동기화 기능
- [x] **Phase 4**: 템플릿 관리 시스템
- [x] **Phase 4.5**: 갤러리 모드 추가

### 🚧 향후 개선 사항

- [ ] **더 많은 템플릿**: 38개 목표 (현재 10개)
- [ ] **Syntax Highlighting**: 코드 하이라이팅 추가
- [ ] **템플릿 썸네일**: 실제 렌더링 이미지
- [ ] **테마 토글**: 다크/라이트 모드
- [ ] **코드 포맷팅**: Prettier 통합
- [ ] **반응형 프리뷰**: 모바일/태블릿/데스크톱 모드
- [ ] **파일 내보내기**: HTML 파일 다운로드
- [ ] **공유 기능**: 템플릿 공유 링크

---

## 🤝 기여하기

기여는 언제나 환영합니다! 🎉

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

---

## 💬 문의 및 지원

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/imweb-code-studio/issues)
- 💡 Discussions: [GitHub Discussions](https://github.com/yourusername/imweb-code-studio/discussions)

---

<div align="center">

### ⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!

**Made with ❤️ using Next.js and Tailwind CSS**

[⬆ 맨 위로 돌아가기](#-imweb-design-studio)

</div>
