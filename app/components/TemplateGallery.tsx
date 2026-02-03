'use client';

import { useState } from 'react';
import { prebuiltTemplates, type PrebuiltTemplate } from '../data/prebuilt-templates';

interface TemplateGalleryProps {
    onSelectTemplate: (code: string) => void;
}

export default function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState<PrebuiltTemplate | null>(null);

    // 카테고리 목록
    const categories = [
        { id: 'all', label: '전체', icon: '🎨' },
        { id: 'hero', label: 'Hero', icon: '🏠' },
        { id: 'card', label: 'Card', icon: '🃏' },
        { id: 'navigation', label: 'Navigation', icon: '🧭' },
        { id: 'form', label: 'Form', icon: '📝' },
        { id: 'button', label: 'Button', icon: '🔘' },
        { id: 'footer', label: 'Footer', icon: '📄' },
    ];

    // 필터링된 템플릿
    const filteredTemplates = prebuiltTemplates.filter((template) => {
        const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
        const matchesSearch =
            template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // 템플릿 복사
    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        alert('코드가 복사되었습니다! 📋');
    };

    // 에디터로 열기
    const handleOpenInEditor = (code: string) => {
        onSelectTemplate(code);
        setSelectedTemplate(null);
    };

    return (
        <div className="template-gallery">
            {/* 검색 및 필터 */}
            <div className="gallery-header">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="템플릿 검색... (이름, 설명, 태그)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="search-icon">🔍</span>
                </div>

                <div className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            <span>{category.icon}</span>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* 템플릿 그리드 */}
            <div className="template-grid">
                {filteredTemplates.length === 0 ? (
                    <div className="empty-state">
                        <p>검색 결과가 없습니다.</p>
                        <p className="empty-hint">다른 키워드로 검색해보세요.</p>
                    </div>
                ) : (
                    filteredTemplates.map((template) => (
                        <div
                            key={template.id}
                            className="template-card"
                            onClick={() => setSelectedTemplate(template)}
                        >
                            <div className="template-preview">
                                <div className="preview-placeholder">
                                    {template.category === 'hero' && '🏠'}
                                    {template.category === 'card' && '🃏'}
                                    {template.category === 'navigation' && '🧭'}
                                    {template.category === 'form' && '📝'}
                                    {template.category === 'button' && '🔘'}
                                    {template.category === 'footer' && '📄'}
                                </div>
                            </div>
                            <div className="template-info">
                                <h3>{template.name}</h3>
                                <p>{template.description}</p>
                                <div className="template-tags">
                                    {template.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* 상세 모달 */}
            {selectedTemplate && (
                <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
                    <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{selectedTemplate.name}</h2>
                            <button className="close-btn" onClick={() => setSelectedTemplate(null)}>
                                ✕
                            </button>
                        </div>

                        <div className="modal-body">
                            {/* 프리뷰 */}
                            <div className="preview-section">
                                <h3>프리뷰</h3>
                                <div
                                    className="preview-frame"
                                    dangerouslySetInnerHTML={{ __html: selectedTemplate.code }}
                                />
                            </div>

                            {/* 코드 */}
                            <div className="code-section">
                                <h3>코드</h3>
                                <pre className="code-block">
                                    <code>{selectedTemplate.code}</code>
                                </pre>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleCopy(selectedTemplate.code)}
                            >
                                📋 복사
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => handleOpenInEditor(selectedTemplate.code)}
                            >
                                ✏️ 에디터로 열기
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .template-gallery {
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: #1e1e1e;
        }

        .gallery-header {
          padding: 24px;
          background-color: #2d2d2d;
          border-bottom: 1px solid #333333;
        }

        .search-container {
          position: relative;
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          padding: 12px 48px 12px 16px;
          background-color: #1e1e1e;
          border: 2px solid #444444;
          border-radius: 8px;
          color: #d4d4d4;
          font-size: 14px;
        }

        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .search-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 20px;
        }

        .category-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background-color: #1e1e1e;
          border: 2px solid #444444;
          border-radius: 8px;
          color: #9ca3af;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .category-btn:hover {
          border-color: #3b82f6;
          color: #d4d4d4;
        }

        .category-btn.active {
          background-color: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .template-grid {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          align-content: start;
        }

        .template-card {
          background-color: #2d2d2d;
          border: 2px solid #444444;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
        }

        .template-card:hover {
          border-color: #3b82f6;
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
        }

        .template-preview {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preview-placeholder {
          font-size: 80px;
        }

        .template-info {
          padding: 16px;
        }

        .template-info h3 {
          margin: 0 0 8px 0;
          color: #d4d4d4;
          font-size: 18px;
          font-weight: 600;
        }

        .template-info p {
          margin: 0 0 12px 0;
          color: #9ca3af;
          font-size: 14px;
        }

        .template-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 4px 10px;
          background-color: #1e1e1e;
          border-radius: 12px;
          color: #6b7280;
          font-size: 12px;
        }

        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: #9ca3af;
        }

        .empty-state p {
          margin: 0 0 8px 0;
          font-size: 18px;
        }

        .empty-hint {
          font-size: 14px;
          color: #6b7280;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background-color: #1e1e1e;
          border-radius: 16px;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px;
          border-bottom: 1px solid #333333;
        }

        .modal-header h2 {
          margin: 0;
          color: #d4d4d4;
          font-size: 24px;
        }

        .close-btn {
          background: none;
          border: none;
          color: #9ca3af;
          font-size: 28px;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .close-btn:hover {
          background-color: #2d2d2d;
          color: #d4d4d4;
        }

        .modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .preview-section,
        .code-section {
          display: flex;
          flex-direction: column;
        }

        .preview-section h3,
        .code-section h3 {
          margin: 0 0 12px 0;
          color: #d4d4d4;
          font-size: 16px;
          font-weight: 600;
        }

        .preview-frame {
          flex: 1;
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          overflow: auto;
        }

        .code-block {
          flex: 1;
          background-color: #2d2d2d;
          border: 1px solid #444444;
          border-radius: 8px;
          padding: 16px;
          overflow: auto;
          margin: 0;
        }

        .code-block code {
          color: #d4d4d4;
          font-family: 'Fira Code', monospace;
          font-size: 13px;
          line-height: 1.6;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          padding: 24px;
          border-top: 1px solid #333333;
        }

        .btn {
          flex: 1;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary {
          background-color: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          background-color: #2563eb;
        }

        .btn-secondary {
          background-color: #6b7280;
          color: white;
        }

        .btn-secondary:hover {
          background-color: #4b5563;
        }

        @media (max-width: 768px) {
          .modal-body {
            grid-template-columns: 1fr;
          }

          .template-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
}
