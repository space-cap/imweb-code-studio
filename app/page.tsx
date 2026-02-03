'use client';

import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

export default function Home() {
  const [code, setCode] = useState(`<div class="dc-flex dc-items-center dc-justify-center dc-h-64 dc-bg-gradient-to-r dc-from-blue-500 dc-to-purple-600 dc-rounded-lg dc-shadow-xl">
  <div class="dc-text-center dc-text-white">
    <h1 class="dc-text-4xl dc-font-bold dc-mb-4">
      🎨 Imweb Design Studio
    </h1>
    <p class="dc-text-xl dc-opacity-90">
      실시간 HTML/Tailwind 코드 에디터
    </p>
  </div>
</div>

<div class="dc-mt-8 dc-grid dc-grid-cols-1 md:dc-grid-cols-3 dc-gap-6">
  <div class="dc-bg-white dc-p-6 dc-rounded-lg dc-shadow-md dc-border dc-border-gray-200">
    <div class="dc-text-3xl dc-mb-3">⚡</div>
    <h3 class="dc-text-xl dc-font-semibold dc-mb-2 dc-text-gray-800">실시간 프리뷰</h3>
    <p class="dc-text-gray-600">코드 작성과 동시에 결과 확인</p>
  </div>
  
  <div class="dc-bg-white dc-p-6 dc-rounded-lg dc-shadow-md dc-border dc-border-gray-200">
    <div class="dc-text-3xl dc-mb-3">🎨</div>
    <h3 class="dc-text-xl dc-font-semibold dc-mb-2 dc-text-gray-800">Tailwind CSS</h3>
    <p class="dc-text-gray-600">dc- prefix로 스타일 충돌 방지</p>
  </div>
  
  <div class="dc-bg-white dc-p-6 dc-rounded-lg dc-shadow-md dc-border dc-border-gray-200">
    <div class="dc-text-3xl dc-mb-3">💾</div>
    <h3 class="dc-text-xl dc-font-semibold dc-mb-2 dc-text-gray-800">템플릿 관리</h3>
    <p class="dc-text-gray-600">재사용 가능한 디자인 저장</p>
  </div>
</div>`);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="app-container">
      <div className="split-layout">
        <div className="editor-panel">
          <Editor code={code} onChange={handleCodeChange} />
        </div>
        <div className="preview-panel">
          <Preview code={code} />
        </div>
      </div>
      <style jsx>{`
        .app-container {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100%;
          width: 100%;
        }

        .editor-panel,
        .preview-panel {
          height: 100%;
          overflow: hidden;
        }

        /* 반응형: 모바일 (768px 이하) */
        @media (max-width: 768px) {
          .split-layout {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
          }
        }

        /* 태블릿 (768px ~ 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .split-layout {
            grid-template-columns: 40% 60%;
          }
        }
      `}</style>
    </div>
  );
}
