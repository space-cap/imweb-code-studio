'use client';

interface TabNavigationProps {
    activeTab: 'gallery' | 'editor' | 'my-templates';
    onTabChange: (tab: 'gallery' | 'editor' | 'my-templates') => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
    const tabs = [
        { id: 'gallery' as const, label: '갤러리', icon: '🏠' },
        { id: 'editor' as const, label: '에디터', icon: '✏️' },
        { id: 'my-templates' as const, label: '내 템플릿', icon: '💾' },
    ];

    return (
        <div className="tab-navigation">
            <div className="tab-container">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => onTabChange(tab.id)}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </div>

            <style jsx>{`
        .tab-navigation {
          background-color: #2d2d2d;
          border-bottom: 2px solid #333333;
          padding: 0 20px;
        }

        .tab-container {
          display: flex;
          gap: 4px;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          color: #9ca3af;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .tab:hover {
          color: #d4d4d4;
          background-color: rgba(59, 130, 246, 0.1);
        }

        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }

        .tab-icon {
          font-size: 18px;
        }

        .tab-label {
          font-family: var(--font-geist-sans), sans-serif;
        }

        /* 모바일 반응형 */
        @media (max-width: 640px) {
          .tab {
            padding: 10px 16px;
            font-size: 13px;
          }

          .tab-icon {
            font-size: 16px;
          }

          .tab-label {
            display: none;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .tab {
            padding: 10px 20px;
          }
        }
      `}</style>
        </div>
    );
}
