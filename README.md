# 🎨 Imweb Design Studio

**초보자부터 고급 사용자까지 모두를 위한 HTML/Tailwind CSS 디자인 스튜디오**

실시간 프리뷰, 템플릿 갤러리, 코드 에디터를 제공하는 웹 기반 디자인 도구입니다.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

## ✨ 주요 기능

### 🏠 갤러리 모드 (초보자 친화적)
- 10개의 미리 제작된 템플릿 제공
- 카테고리별 필터링 (Hero, Card, Navigation, Form, Button, Footer)
- 검색 기능으로 빠른 템플릿 찾기
- 클릭 한 번으로 코드 복사 또는 에디터로 열기

### ✏️ 에디터 모드 (고급 사용자용)
- VS Code 스타일의 다크 테마 에디터
- 실시간 HTML/Tailwind CSS 프리뷰
- 좌우 분할 레이아웃 (에디터 50% + 프리뷰 50%)
- Fira Code 폰트 적용

### 💾 내 템플릿 관리
- localStorage 기반 템플릿 저장
- 저장/불러오기/삭제 기능
- 템플릿 목록 관리
- Import/Export 기능 (보너스)

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 열기
# http://localhost:3000
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
imweb-code-studio/
├── app/
│   ├── components/
│   │   ├── Editor.tsx           # 코드 에디터 컴포넌트
│   │   ├── Preview.tsx          # 실시간 프리뷰 컴포넌트
│   │   ├── TemplateManager.tsx  # 템플릿 관리 컴포넌트
│   │   ├── TabNavigation.tsx    # 탭 네비게이션
│   │   └── TemplateGallery.tsx  # 템플릿 갤러리
│   ├── data/
│   │   └── prebuilt-templates.ts # 미리 제작된 템플릿 데이터
│   ├── utils/
│   │   └── storage.ts           # localStorage 유틸리티
│   ├── globals.css              # 글로벌 스타일
│   ├── layout.tsx               # 루트 레이아웃
│   └── page.tsx                 # 메인 페이지
├── docs/
│   ├── PRD.md                   # 제품 요구사항 문서
│   └── TASK.md                  # 작업 체크리스트
└── public/                      # 정적 파일
```

## 🎯 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS (CDN, `dc-` prefix)
- **폰트**: Fira Code (Google Fonts)
- **상태 관리**: React Hooks (useState)
- **저장소**: localStorage

## 🎨 디자인 시스템

### 컬러 팔레트
- **배경**: `#1e1e1e` (다크), `#2d2d2d` (중간)
- **텍스트**: `#d4d4d4` (밝음), `#9ca3af` (중간), `#6b7280` (어두움)
- **액센트**: `#3b82f6` (블루), `#10b981` (그린), `#ef4444` (레드)

### 타이포그래피
- **에디터**: Fira Code, 14px, monospace
- **UI**: Geist Sans, 14px, sans-serif

## 📦 제공 템플릿

### Hero Sections (2개)
- Gradient Hero - 그라디언트 배경
- Split Hero - 좌우 분할 레이아웃

### Cards (2개)
- Product Card - 제품 카드
- Pricing Card - 가격 플랜 카드

### Navigation (1개)
- Top Nav with Logo - 로고가 있는 상단 네비게이션

### Forms (2개)
- Contact Form - 연락처 입력 폼
- Login Form - 로그인 폼

### Buttons (2개)
- Primary Button - 기본 버튼
- Gradient Button - 그라디언트 버튼

### Footers (1개)
- Simple Footer - 심플한 푸터

## 🔧 주요 기능 상세

### Tailwind CSS 통합
- CDN 방식으로 Tailwind CSS 로드
- `dc-` prefix 사용으로 글로벌 스타일 충돌 방지
- Preflight 비활성화로 세밀한 스타일 제어

### 실시간 프리뷰
- `dangerouslySetInnerHTML`로 HTML 렌더링
- 코드 변경 시 즉시 프리뷰 업데이트
- Tailwind CSS 클래스 실시간 적용

### 템플릿 관리
- localStorage 기반 영구 저장
- UUID 기반 고유 ID 생성
- 생성/수정 타임스탬프 추적
- Import/Export 기능 (JSON)

## 📝 개발 히스토리

### Phase 1: 프로젝트 초기화 ✅
- Next.js 14 프로젝트 생성
- Tailwind CSS CDN 설정
- 기본 구조 설정

### Phase 2: 핵심 UI 구현 ✅
- Editor 컴포넌트 (VS Code 스타일)
- Preview 컴포넌트 (실시간 렌더링)
- 좌우 분할 레이아웃

### Phase 3: 실시간 동기화 ✅
- useState로 코드 상태 관리
- 에디터 ↔ 프리뷰 실시간 동기화

### Phase 4: 템플릿 관리 시스템 ✅
- localStorage 유틸리티 구현
- 템플릿 저장/불러오기/삭제 UI
- 모달 기반 인터페이스

### Phase 4.5: 갤러리 모드 ✅
- 탭 네비게이션 시스템
- 10개 미리 제작 템플릿
- 검색 및 카테고리 필터
- 템플릿 상세 모달

## 🎓 학습 포인트

이 프로젝트를 통해 배울 수 있는 것들:

1. **Next.js 14 App Router** - 최신 Next.js 구조
2. **React Hooks** - useState를 활용한 상태 관리
3. **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
4. **TypeScript** - 타입 안정성
5. **localStorage** - 브라우저 저장소 활용
6. **컴포넌트 설계** - 재사용 가능한 컴포넌트 구조

## 🚧 향후 개선 사항

- [ ] 더 많은 템플릿 추가 (목표: 38개)
- [ ] Syntax Highlighting (코드 하이라이팅)
- [ ] 템플릿 썸네일 이미지
- [ ] 다크/라이트 모드 토글
- [ ] 코드 포맷팅 (Prettier)
- [ ] 반응형 프리뷰 모드 (모바일/태블릿/데스크톱)
- [ ] 코드 내보내기 (HTML 파일 다운로드)
- [ ] 협업 기능 (공유 링크)

## 📄 라이선스

MIT License

## 👨‍💻 개발자

**Imweb Design Studio** - 초보자부터 고급 사용자까지 모두를 위한 디자인 도구

---

**Made with ❤️ using Next.js and Tailwind CSS**
