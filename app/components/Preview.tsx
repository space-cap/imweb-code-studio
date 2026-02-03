'use client';

interface PreviewProps {
    code: string;
}

export default function Preview({ code }: PreviewProps) {
    return (
        <div className="preview-container">
            <div className="preview-header">
                <h2>실시간 프리뷰</h2>
                <span className="preview-label">Live Preview</span>
            </div>
            <div className="preview-content">
                <div
                    className="preview-render"
                    dangerouslySetInnerHTML={{ __html: code }}
                />
            </div>
            <style jsx>{`
        .preview-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background-color: #f5f5f5;
          border-bottom: 1px solid #e5e5e5;
        }

        .preview-header h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #1e1e1e;
        }

        .preview-label {
          font-size: 12px;
          color: #6b7280;
          font-family: var(--font-geist-mono);
        }

        .preview-content {
          flex: 1;
          overflow: auto;
          background-color: #ffffff;
        }

        .preview-render {
          padding: 20px;
          min-height: 100%;
        }

        .preview-content::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        .preview-content::-webkit-scrollbar-track {
          background: #f5f5f5;
        }

        .preview-content::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 6px;
        }

        .preview-content::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
        </div>
    );
}
