# Imweb Design Studio - 구현 작업 계획

## 📋 전체 작업 개요

Next.js 14 기반의 실시간 HTML/Tailwind 코드 에디터 & 프리뷰 시스템 구축

---

## ✅ Phase 1: 프로젝트 초기화 및 설정 (완료)

### 1.1 프로젝트 생성
- [x] Next.js 14 프로젝트 초기화 (App Router, TypeScript)
- [x] 기본 폴더 구조 생성 (`app/`, `components/`, `utils/`)
- [x] Git 초기화 및 .gitignore 설정

### 1.2 Tailwind CSS 설정
- [x] `layout.tsx`에 Tailwind CDN 스크립트 주입
- [x] Tailwind config 설정 (`prefix: 'dc-'`, `preflight: false`)
- [x] 기본 스타일 테스트

### 1.3 개발 환경 설정
- [x] ESLint 및 Prettier 설정
- [x] TypeScript 설정 확인
- [x] 개발 서버 실행 테스트

---

## ✅ Phase 2: 핵심 UI 구현 (완료)

### 2.1 레이아웃 구조
- [x] `page.tsx`에 스플릿 레이아웃 구현 (Grid 사용)
- [x] 반응형 레이아웃 설정 (모바일: 상하, 데스크톱: 좌우)
- [x] 툴바 영역 추가 (Phase 5로 이동)

### 2.2 코드 에디터 컴포넌트
- [x] `components/Editor.tsx` 생성
- [x] Textarea 기반 에디터 구현
- [x] 다크 테마 스타일링 적용
  - 배경색: `#1e1e1e`
  - 텍스트: `#d4d4d4`
  - 폰트: Fira Code (Google Fonts)
- [x] 커스텀 스크롤바 스타일
- [ ] 라인 넘버 표시 (선택적, Phase 8)
- [ ] 코드 하이라이팅 (선택적, Phase 8)

### 2.3 프리뷰 컴포넌트
- [x] `components/Preview.tsx` 생성
- [x] 흰색 배경 스타일 적용
- [x] `dangerouslySetInnerHTML`로 HTML 렌더링
- [x] Tailwind `dc-` prefix 동작 확인

---

## ✅ Phase 3: 실시간 동기화 기능 (완료)

### 3.1 상태 관리
- [x] `useState`로 코드 상태 관리
- [x] Editor → Preview 데이터 플로우 구현
- [x] 실시간 업데이트 테스트

### 3.2 성능 최적화 (선택적)
- [ ] Debounce 적용 (과도한 렌더링 방지) - 필요 시 추가
- [ ] useCallback/useMemo 최적화 (필요 시) - 필요 시 추가

---

## ✅ Phase 4: 템플릿 관리 시스템 (완료)

### 4.1 localStorage 유틸리티
- [x] `utils/storage.ts` 생성
- [x] 템플릿 저장 함수 구현
- [x] 템플릿 로드 함수 구현
- [x] 템플릿 삭제 함수 구현
- [x] 템플릿 목록 조회 함수 구현
- [x] 보너스: import/export 기능 추가

### 4.2 템플릿 저장 UI
- [x] `components/TemplateManager.tsx` 생성
- [x] "💾 저장" 버튼 추가
- [x] 저장 모달 구현
  - 템플릿 이름 입력 필드
  - 저장/취소 버튼
- [x] localStorage에 저장 로직 연결

### 4.3 템플릿 로드 UI
- [x] "📂 불러오기" 버튼 추가
- [x] 템플릿 목록 모달 구현
- [x] 템플릿 선택 시 에디터에 로드
- [x] 빈 템플릿 목록 처리 (안내 메시지)

### 4.4 템플릿 삭제 UI
- [x] 템플릿 목록에 삭제 버튼 추가
- [x] 확인 다이얼로그 구현
- [x] 삭제 후 목록 갱신

---

## ✅ Phase 4.5: 갤러리 모드 추가 (완료)

> **목표**: 초보자를 위한 템플릿 갤러리 및 고급 사용자를 위한 에디터 모드 제공

### 4.5.1 탭 네비게이션
- [x] `components/TabNavigation.tsx` 생성
- [x] 3개 탭 구현: 🏠 갤러리 | ✏️ 에디터 | 💾 내 템플릿
- [x] 탭 전환 상태 관리

### 4.5.2 템플릿 갤러리 컴포넌트
- [x] `components/TemplateGallery.tsx` 생성
- [x] 카드 그리드 레이아웃 구현
- [x] 카테고리별 필터링 (Hero, Card, Form, etc.)
- [x] 검색 기능

### 4.5.3 미리 제공할 템플릿 데이터
- [x] `data/prebuilt-templates.ts` 생성
- [x] Hero Sections (2개) - Gradient, Split
- [x] Card Components (2개) - Product, Pricing
- [x] Navigation Bars (1개) - Top Nav
- [x] Footers (1개) - Simple
- [x] Forms (2개) - Contact, Login
- [x] Buttons (2개) - Primary, Gradient
- [x] 총 10개 대표 템플릿 (향후 확장 가능)

### 4.5.4 템플릿 상세 모달
- [x] TemplateGallery 내부에 모달 구현
- [x] 프리뷰 영역
- [x] 코드 표시
- [x] 복사 버튼
- [x] "에디터로 열기" 버튼

### 4.5.5 UI/UX 개선
- [x] 카테고리별 아이콘 표시
- [x] 호버 애니메이션 효과
- [x] 반응형 그리드
- [ ] 썸네일 이미지 (선택사항, 향후 개선)

---

## Phase 5: 툴바 및 부가 기능

### 5.1 툴바 컴포넌트
- [ ] `components/Toolbar.tsx` 생성
- [ ] Save/Load 버튼 배치
- [ ] 버튼 스타일링 (Tailwind Blue 500)

### 5.2 추가 기능 (선택적)
- [ ] 코드 클립보드 복사 버튼
- [ ] 코드 초기화 버튼
- [ ] 자동 저장 기능 (3초마다 임시 저장)

---

## Phase 6: 테스트 및 검증

### 6.1 기능 테스트
- [ ] 실시간 프리뷰 동작 확인
  - 테스트 코드: `<div class="dc-text-red-500">Hello</div>`
  - 예상 결과: 빨간색 텍스트 표시
- [ ] Tailwind prefix 테스트
  - 테스트 코드: `<div class="dc-bg-blue-500 dc-p-4">Box</div>`
  - 예상 결과: 파란 배경 + 패딩 적용
- [ ] 템플릿 저장/로드/삭제 테스트

### 6.2 반응형 테스트
- [ ] 모바일 뷰 (< 768px) 확인
- [ ] 태블릿 뷰 (768px ~ 1024px) 확인
- [ ] 데스크톱 뷰 (> 1024px) 확인

### 6.3 브라우저 호환성 테스트
- [ ] Chrome 테스트
- [ ] Firefox 테스트 (선택적)
- [ ] Safari 테스트 (선택적)
- [ ] Edge 테스트 (선택적)

### 6.4 성능 테스트
- [ ] 초기 로딩 시간 측정 (목표: < 2초)
- [ ] 코드 입력 → 렌더링 지연 측정 (목표: < 100ms)
- [ ] 템플릿 로드 시간 측정 (목표: < 500ms)

---

## Phase 7: 문서화 및 배포 준비

### 7.1 문서 작성
- [ ] README.md 작성
  - 프로젝트 소개
  - 설치 방법
  - 사용 방법
  - 스크린샷 포함
- [ ] 사용자 가이드 작성 (선택적)

### 7.2 코드 정리
- [ ] 불필요한 코드 제거
- [ ] 주석 추가 (복잡한 로직)
- [ ] 코드 포맷팅 (Prettier)
- [ ] ESLint 경고 해결

### 7.3 배포 준비
- [ ] 프로덕션 빌드 테스트 (`npm run build`)
- [ ] 빌드 에러 해결
- [ ] 환경 변수 설정 (필요 시)

---

## Phase 8: 추가 개선 사항 (선택적)

### 8.1 Monaco Editor 통합
- [ ] Monaco Editor 라이브러리 설치
- [ ] Editor 컴포넌트를 Monaco로 교체
- [ ] 코드 자동 완성 설정
- [ ] 신택스 하이라이팅 설정

### 8.2 보안 강화
- [ ] DOMPurify 라이브러리 설치
- [ ] XSS 방지 로직 추가
- [ ] CSP 헤더 설정

### 8.3 UX 개선
- [ ] 로딩 스피너 추가
- [ ] 토스트 알림 (저장 성공/실패)
- [ ] 키보드 단축키 (Ctrl+S: 저장)
- [ ] 드래그 앤 드롭으로 레이아웃 리사이즈

---

## 🎯 우선순위

### High Priority (필수)
- Phase 1: 프로젝트 초기화
- Phase 2: 핵심 UI 구현
- Phase 3: 실시간 동기화
- Phase 4: 템플릿 관리
- Phase 6: 기본 테스트

### Medium Priority (권장)
- Phase 5: 툴바 및 부가 기능
- Phase 7: 문서화

### Low Priority (선택)
- Phase 8: 추가 개선 사항

---

## 📅 예상 일정

| Phase | 작업 내용 | 예상 시간 |
|-------|----------|----------|
| Phase 1 | 프로젝트 초기화 | 30분 |
| Phase 2 | 핵심 UI 구현 | 1.5시간 |
| Phase 3 | 실시간 동기화 | 1시간 |
| Phase 4 | 템플릿 관리 | 2시간 |
| Phase 5 | 툴바 및 부가 기능 | 1시간 |
| Phase 6 | 테스트 및 검증 | 1시간 |
| Phase 7 | 문서화 | 30분 |
| **총계** | | **7.5시간** |

---

## ✅ 완료 체크리스트

### MVP 완료 기준
- [x] 코드 에디터에서 HTML/Tailwind 코드 작성 가능
- [x] 프리뷰 영역에서 실시간 렌더링 확인
- [x] Tailwind `dc-` prefix 정상 동작
- [ ] 템플릿 저장/로드/삭제 기능 동작 (Phase 4)
- [x] 모바일/데스크톱 반응형 지원

### 품질 기준
- [ ] TypeScript 에러 없음
- [ ] ESLint 경고 없음
- [ ] 프로덕션 빌드 성공
- [ ] 주요 브라우저에서 정상 동작

---

**작성일**: 2026-02-03  
**최종 수정일**: 2026-02-03
