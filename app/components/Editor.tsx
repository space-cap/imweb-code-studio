'use client';

import { ChangeEvent } from 'react';

interface EditorProps {
  code: string;
  onChange: (code: string) => void;
}

export default function Editor({ code, onChange }: EditorProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="editor-container">
      <div className="editor-header">
        <h2>코드 에디터</h2>
        <span className="editor-label">HTML / Tailwind CSS</span>
      </div>
      <textarea
        className="editor-textarea"
        value={code}
        onChange={handleChange}
        placeholder="여기에 HTML/Tailwind 코드를 작성하세요...&#10;&#10;예시:&#10;<div class=&quot;dc-text-blue-500 dc-text-2xl dc-font-bold&quot;>&#10;  Hello, Imweb Design Studio!&#10;</div>"
        spellCheck={false}
      />
      <style jsx>{`
        .editor-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: #1e1e1e;
          border-right: 1px solid #333333;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background-color: #252525;
          border-bottom: 1px solid #333333;
        }

        .editor-header h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #d4d4d4;
        }

        .editor-label {
          font-size: 12px;
          color: #858585;
          font-family: var(--font-geist-mono);
        }

        .editor-textarea {
          flex: 1;
          width: 100%;
          padding: 20px;
          background-color: #1e1e1e;
          color: #d4d4d4;
          border: none;
          outline: none;
          font-family: 'Fira Code', 'JetBrains Mono', var(--font-geist-mono), monospace;
          font-size: 14px;
          line-height: 1.6;
          resize: none;
          tab-size: 2;
        }

        .editor-textarea::placeholder {
          color: #6a6a6a;
        }

        .editor-textarea::-webkit-scrollbar {
          width: 12px;
        }

        .editor-textarea::-webkit-scrollbar-track {
          background: #1e1e1e;
        }

        .editor-textarea::-webkit-scrollbar-thumb {
          background: #424242;
          border-radius: 6px;
        }

        .editor-textarea::-webkit-scrollbar-thumb:hover {
          background: #4e4e4e;
        }
      `}</style>
    </div>
  );
}
