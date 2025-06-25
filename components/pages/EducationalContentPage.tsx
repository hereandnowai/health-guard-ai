
import React, { useState } from 'react';
import { Article } from '../../types';
import { MOCK_ARTICLES } from '../../constants';
import { BookOpenIcon, ChevronRightIcon, MagnifyingGlassIcon } from '../icons'; 

interface EducationalContentPageProps {
  onShowArticleDetail?: (article: Article) => void;
}

const EducationalContentPage: React.FC<EducationalContentPageProps> = ({ onShowArticleDetail }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(MOCK_ARTICLES.map(a => a.category)))];

  const filteredArticles = MOCK_ARTICLES.filter(article => {
    const matchesSearchTerm = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[var(--brand-primary)]">
          Learn & Discover Health
        </h2>
        <p className="mt-3 text-lg text-[var(--brand-text-light)] max-w-2xl mx-auto">
          Explore evidence-based articles and resources to empower your health journey.
        </p>
      </div>

      <div className="sticky top-20 z-40 bg-[var(--brand-card-background)]/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[var(--brand-border)] mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--brand-text-dim)]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--brand-card-background)] border border-[var(--brand-border)] rounded-lg text-[var(--brand-text-light)] focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-[var(--brand-primary)] transition-colors"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[var(--brand-card-background)] border border-[var(--brand-border)] rounded-lg text-[var(--brand-text-light)] py-2.5 px-3 focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-[var(--brand-primary)] transition-colors sm:w-auto"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-[var(--brand-card-background)] text-[var(--brand-text-light)]">{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <BookOpenIcon className="h-16 w-16 text-[var(--brand-text-dim)] mx-auto mb-4" />
          <p className="text-xl text-[var(--brand-text-dim)]">No articles found matching your criteria.</p>
          <p className="text-[var(--brand-text-dim)]/80">Try adjusting your search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article: Article) => (
            <div key={article.id} className="bg-[var(--brand-card-background)] rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[var(--brand-primary)]/30 hover:scale-[1.02] border border-[var(--brand-border)]">
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-[var(--brand-primary)] uppercase tracking-wider mb-1">{article.category}</span>
                <h3 className="text-lg font-semibold text-[var(--brand-text-light)] mb-2">{article.title}</h3>
                <p className="text-sm text-[var(--brand-text-dim)] flex-grow mb-4">{article.summary}</p>
                <button 
                  onClick={() => onShowArticleDetail?.(article)}
                  className="mt-auto self-start text-sm font-medium text-[var(--brand-primary)] hover:text-[var(--brand-primary)]/80 transition-colors group"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read More <ChevronRightIcon className="inline h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationalContentPage;