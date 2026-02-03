'use client';

import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import TemplateManager from './components/TemplateManager';
import TabNavigation from './components/TabNavigation';
import TemplateGallery from './components/TemplateGallery';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'editor' | 'my-templates'>('gallery');
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

  const handleLoadTemplate = (templateCode: string) => {
    setCode(templateCode);
    setActiveTab('editor'); // 템플릿 로드 시 에디터 탭으로 전환
  };

  return (
    <div className="app-container">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 갤러리 탭 */}
      {activeTab === 'gallery' && (
        <div className="tab-content">
          <TemplateGallery onSelectTemplate={handleLoadTemplate} />
        </div>
      )}

      {/* 에디터 탭 */}
      {activeTab === 'editor' && (
        <div className="split-layout">
          <div className="editor-panel">
            <Editor code={code} onChange={handleCodeChange} />
          </div>
          <div className="preview-panel">
            <Preview code={code} />
          </div>
        </div>
      )}

      {/* 내 템플릿 탭 */}
      {activeTab === 'my-templates' && (
        <div className="tab-content">
          <TemplateManager currentCode={code} onLoadTemplate={handleLoadTemplate} />
        </div>
      )}

      <style jsx>{`
        .app-container {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .tab-content {
          flex: 1;
          overflow: auto;
          background-color: #1e1e1e;
        }

        .placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #d4d4d4;
          text-align: center;
          padding: 40px;
        }

        .placeholder h2 {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .placeholder p {
          font-size: 18px;
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .coming-soon {
          font-size: 14px;
          color: #6b7280;
          font-style: italic;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          flex: 1;
          width: 100%;
          overflow: hidden;
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
