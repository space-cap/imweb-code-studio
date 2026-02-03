// 템플릿 데이터 타입 정의
export interface Template {
    id: string;          // UUID
    name: string;        // 사용자 지정 이름
    code: string;        // HTML/Tailwind 코드
    createdAt: number;   // 타임스탬프
    updatedAt: number;   // 타임스탬프
}

const STORAGE_KEY = 'imweb-design-studio-templates';

/**
 * 모든 템플릿 목록 조회
 */
export function getAllTemplates(): Template[] {
    if (typeof window === 'undefined') return [];

    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return [];

        const templates = JSON.parse(data) as Template[];
        // 최신순으로 정렬
        return templates.sort((a, b) => b.updatedAt - a.updatedAt);
    } catch (error) {
        console.error('Failed to load templates:', error);
        return [];
    }
}

/**
 * 특정 템플릿 조회
 */
export function getTemplate(id: string): Template | null {
    const templates = getAllTemplates();
    return templates.find(t => t.id === id) || null;
}

/**
 * 템플릿 저장 (새로 생성 또는 업데이트)
 */
export function saveTemplate(name: string, code: string, id?: string): Template {
    const templates = getAllTemplates();
    const now = Date.now();

    if (id) {
        // 기존 템플릿 업데이트
        const index = templates.findIndex(t => t.id === id);
        if (index !== -1) {
            templates[index] = {
                ...templates[index],
                name,
                code,
                updatedAt: now,
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
            return templates[index];
        }
    }

    // 새 템플릿 생성
    const newTemplate: Template = {
        id: generateId(),
        name,
        code,
        createdAt: now,
        updatedAt: now,
    };

    templates.push(newTemplate);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
    return newTemplate;
}

/**
 * 템플릿 삭제
 */
export function deleteTemplate(id: string): boolean {
    try {
        const templates = getAllTemplates();
        const filteredTemplates = templates.filter(t => t.id !== id);

        if (filteredTemplates.length === templates.length) {
            return false; // 삭제할 템플릿이 없음
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTemplates));
        return true;
    } catch (error) {
        console.error('Failed to delete template:', error);
        return false;
    }
}

/**
 * 모든 템플릿 삭제
 */
export function clearAllTemplates(): void {
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * 간단한 UUID 생성기
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 템플릿 내보내기 (JSON 파일로 다운로드)
 */
export function exportTemplates(): void {
    const templates = getAllTemplates();
    const dataStr = JSON.stringify(templates, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `imweb-templates-${Date.now()}.json`;
    link.click();

    URL.revokeObjectURL(url);
}

/**
 * 템플릿 가져오기 (JSON 파일에서 로드)
 */
export function importTemplates(file: File): Promise<number> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const content = e.target?.result as string;
                const importedTemplates = JSON.parse(content) as Template[];

                if (!Array.isArray(importedTemplates)) {
                    throw new Error('Invalid template file format');
                }

                const existingTemplates = getAllTemplates();
                const mergedTemplates = [...existingTemplates, ...importedTemplates];

                localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedTemplates));
                resolve(importedTemplates.length);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
}
