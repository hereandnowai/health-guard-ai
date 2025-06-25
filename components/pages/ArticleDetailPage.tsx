
import React from 'react';
import { Article } from '../../types';
import Button from '../common/Button';
import { ArrowLeftIcon } from '../icons';

interface ArticleDetailPageProps {
  article: Article | null;
  onBack: () => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article, onBack }) => {
  if (!article) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-[var(--brand-text-dim)]">Article not found.</p>
        <Button onClick={onBack} className="mt-4">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Articles
        </Button>
      </div>
    );
  }

  // Split content by newline characters to render paragraphs
  const paragraphs = article.content.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="max-w-3xl mx-auto bg-[var(--brand-card-background)] p-6 sm:p-8 rounded-xl shadow-2xl border border-[var(--brand-border)]">
      <Button onClick={onBack} variant="secondary" size="sm" className="mb-6">
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to Articles
      </Button>

      <article className="space-y-6">
        <span className="text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-wider">
          {article.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--theme-text-headings)]">
          {article.title}
        </h1>
        
        <div className="prose prose-sm sm:prose-base max-w-none text-[var(--brand-text-light)] space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        <p className="text-xs text-[var(--brand-text-dim)] italic mt-8 pt-4 border-t border-[var(--theme-border-secondary)]">
          This article is for informational purposes only. Consult a healthcare professional for medical advice.
        </p>
      </article>
    </div>
  );
};

export default ArticleDetailPage;