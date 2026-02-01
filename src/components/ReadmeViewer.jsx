import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations.json';

const ReadmeViewer = ({ repoName, onClose }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useLanguage();
    const t = translations[language].projects;

    useEffect(() => {
        const fetchReadme = async () => {
            try {
                setLoading(true);
                // Using Github's direct raw content URL is often simpler for READMEs
                // Alternatively, use the API: https://api.github.com/repos/FerXxk/${repoName}/readme
                const response = await fetch(`https://api.github.com/repos/FerXxk/${repoName}/readme`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3.raw'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch README');
                }

                const data = await response.text();
                setContent(data);
            } catch (err) {
                console.error('Error fetching README:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (repoName) {
            fetchReadme();
        }
    }, [repoName]);

    // Prevent background scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!repoName) return null;

    return (
        <div className="readme-overlay" onClick={onClose}>
            <div className="readme-modal" onClick={(e) => e.stopPropagation()} data-lenis-prevent>
                <div className="readme-header">
                    <h3>{repoName}</h3>
                    <button className="close-readme" onClick={onClose}>×</button>
                </div>

                <div className="readme-content">
                    {loading ? (
                        <div className="readme-status">
                            <div className="spinner"></div>
                            <p>{t.readme_loading}</p>
                        </div>
                    ) : error ? (
                        <div className="readme-status">
                            <p className="error-text">{t.readme_error}</p>
                            <button onClick={onClose} className="retry-btn">Close</button>
                        </div>
                    ) : (
                        <div className="markdown-body">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        .readme-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .readme-modal {
          background: #0a0a0a;
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          width: 100%;
          max-width: 1000px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .readme-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
        }

        .readme-header h3 {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 1rem;
        }

        .close-readme {
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
          transition: transform 0.2s;
        }

        .close-readme:hover {
          transform: rotate(90deg);
          color: var(--accent);
        }

        .readme-content {
          flex: 1;
          overflow-y: auto;
          padding: 3rem;
          scroll-behavior: smooth;
        }

        .readme-status {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          color: var(--text-muted);
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 2px solid var(--glass-border);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .markdown-body {
          color: #e6edf3;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          line-height: 1.6;
          word-wrap: break-word;
        }

        /* Basic Markdown styling to match Github look but adapted to our theme */
        .markdown-body :global(h1), 
        .markdown-body :global(h2) {
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 0.3em;
          margin-top: 1.5em;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .markdown-body :global(h1) { font-size: 2em; }
        .markdown-body :global(h2) { font-size: 1.5em; }

        .markdown-body :global(p) { margin-bottom: 1rem; }

        .markdown-body :global(code) {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: rgba(110, 118, 129, 0.4);
          border-radius: 6px;
        }

        .markdown-body :global(pre) {
          padding: 16px;
          overflow: auto;
          font-size: 85%;
          line-height: 1.45;
          background-color: #161b22;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .markdown-body :global(img) {
          max-width: 100%;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .markdown-body :global(ul), 
        .markdown-body :global(ol) {
          padding-left: 2em;
          margin-bottom: 1rem;
        }

        .markdown-body :global(a) {
          color: var(--accent);
          text-decoration: none;
        }

        .markdown-body :global(a:hover) {
          text-decoration: underline;
        }

        .markdown-body :global(blockquote) {
          padding: 0 1em;
          color: #8b949e;
          border-left: 0.25em solid #30363d;
          margin-bottom: 1rem;
        }

        .error-text { color: #ff4d4d; }

        .retry-btn {
          background: var(--accent);
          color: black;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        @media (max-width: 768px) {
          .readme-overlay { padding: 1rem; }
          .readme-content { padding: 1.5rem; }
          .readme-modal { height: 90vh; }
        }
      `}</style>
        </div>
    );
};

export default ReadmeViewer;
