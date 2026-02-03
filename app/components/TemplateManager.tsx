'use client';

import { useState, useEffect } from 'react';
import { getAllTemplates, saveTemplate, deleteTemplate, type Template } from '../utils/storage';

interface TemplateManagerProps {
    currentCode: string;
    onLoadTemplate: (code: string) => void;
}

export default function TemplateManager({ currentCode, onLoadTemplate }: TemplateManagerProps) {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showLoadModal, setShowLoadModal] = useState(false);
    const [templateName, setTemplateName] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    // 템플릿 목록 로드
    useEffect(() => {
        loadTemplates();
    }, []);

    const loadTemplates = () => {
        const allTemplates = getAllTemplates();
        setTemplates(allTemplates);
    };

    // 템플릿 저장
    const handleSave = () => {
        if (!templateName.trim()) {
            alert('템플릿 이름을 입력해주세요.');
            return;
        }

        saveTemplate(templateName.trim(), currentCode);
        setTemplateName('');
        setShowSaveModal(false);
        loadTemplates();
        alert('템플릿이 저장되었습니다! 🎉');
    };

    // 템플릿 로드
    const handleLoad = (template: Template) => {
        onLoadTemplate(template.code);
        setShowLoadModal(false);
        setSelectedTemplate(null);
    };

    // 템플릿 삭제
    const handleDelete = (id: string, name: string) => {
        if (confirm(`"${name}" 템플릿을 삭제하시겠습니까?`)) {
            deleteTemplate(id);
            loadTemplates();
            alert('템플릿이 삭제되었습니다.');
        }
    };

    // 날짜 포맷팅
    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="template-manager">
            {/* 버튼 그룹 */}
            <div className="button-group">
                <button
                    className="btn btn-primary"
                    onClick={() => setShowSaveModal(true)}
                >
                    💾 저장
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => setShowLoadModal(true)}
                >
                    📂 불러오기
                </button>
            </div>

            {/* 저장 모달 */}
            {showSaveModal && (
                <div className="modal-overlay" onClick={() => setShowSaveModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>템플릿 저장</h2>
                        <input
                            type="text"
                            className="input"
                            placeholder="템플릿 이름 입력 (예: Hero Section)"
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                            autoFocus
                        />
                        <div className="modal-actions">
                            <button className="btn btn-primary" onClick={handleSave}>
                                저장
                            </button>
                            <button className="btn btn-cancel" onClick={() => setShowSaveModal(false)}>
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 불러오기 모달 */}
            {showLoadModal && (
                <div className="modal-overlay" onClick={() => setShowLoadModal(false)}>
                    <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
                        <h2>템플릿 불러오기</h2>

                        {templates.length === 0 ? (
                            <div className="empty-state">
                                <p>저장된 템플릿이 없습니다.</p>
                                <p className="empty-hint">코드를 작성하고 "저장" 버튼을 눌러 템플릿을 만들어보세요!</p>
                            </div>
                        ) : (
                            <div className="template-list">
                                {templates.map((template) => (
                                    <div key={template.id} className="template-item">
                                        <div className="template-info">
                                            <h3>{template.name}</h3>
                                            <p className="template-date">{formatDate(template.updatedAt)}</p>
                                            <p className="template-preview">{template.code.substring(0, 100)}...</p>
                                        </div>
                                        <div className="template-actions">
                                            <button
                                                className="btn btn-small btn-primary"
                                                onClick={() => handleLoad(template)}
                                            >
                                                불러오기
                                            </button>
                                            <button
                                                className="btn btn-small btn-danger"
                                                onClick={() => handleDelete(template.id, template.name)}
                                            >
                                                삭제
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="modal-actions">
                            <button className="btn btn-cancel" onClick={() => setShowLoadModal(false)}>
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .template-manager {
          padding: 12px 16px;
          background-color: #2d2d2d;
          border-bottom: 1px solid #333333;
        }

        .button-group {
          display: flex;
          gap: 8px;
        }

        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
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

        .btn-cancel {
          background-color: #4b5563;
          color: white;
        }

        .btn-cancel:hover {
          background-color: #374151;
        }

        .btn-danger {
          background-color: #ef4444;
          color: white;
        }

        .btn-danger:hover {
          background-color: #dc2626;
        }

        .btn-small {
          padding: 6px 12px;
          font-size: 13px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: #1e1e1e;
          border-radius: 12px;
          padding: 24px;
          min-width: 400px;
          max-width: 500px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .modal-large {
          min-width: 600px;
          max-width: 700px;
          max-height: 80vh;
          overflow-y: auto;
        }

        .modal-content h2 {
          margin: 0 0 20px 0;
          color: #d4d4d4;
          font-size: 20px;
        }

        .input {
          width: 100%;
          padding: 10px 12px;
          background-color: #2d2d2d;
          border: 1px solid #444444;
          border-radius: 6px;
          color: #d4d4d4;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .modal-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: #9ca3af;
        }

        .empty-state p {
          margin: 0 0 8px 0;
        }

        .empty-hint {
          font-size: 13px;
          color: #6b7280;
        }

        .template-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .template-item {
          background-color: #2d2d2d;
          border: 1px solid #444444;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .template-info {
          flex: 1;
        }

        .template-info h3 {
          margin: 0 0 4px 0;
          color: #d4d4d4;
          font-size: 16px;
        }

        .template-date {
          margin: 0 0 8px 0;
          color: #6b7280;
          font-size: 12px;
        }

        .template-preview {
          margin: 0;
          color: #9ca3af;
          font-size: 13px;
          font-family: 'Fira Code', monospace;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .template-actions {
          display: flex;
          gap: 8px;
          margin-left: 16px;
        }
      `}</style>
        </div>
    );
}
