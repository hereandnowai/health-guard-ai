
import React from 'react';
import { FEATURE_CARDS, BRAND_INFO } from '../../constants';
import { ActiveView, FeatureCardItem } from '../../types';
import Button from '../common/Button';
import { ArrowRightIcon } from '../icons';

interface HomePageProps {
  setActiveView: (view: ActiveView) => void;
}

const FeatureCard: React.FC<{item: FeatureCardItem, onNavigate?: () => void}> = ({ item, onNavigate }) => {
  const IconComponent = item.icon;
  const cardContent = (
    <>
      <div className="mb-4 text-[var(--theme-text-headings)]"> {/* Use theme-text-headings (Dark Teal) */}
        <IconComponent className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-semibold text-[var(--theme-text-headings)] mb-2">{item.title}</h3> {/* Use theme-text-headings */}
      <p className="text-sm text-[var(--theme-text-body)] flex-grow mb-3">{item.description}</p> {/* Use theme-text-body (slate-700) */}
    </>
  );

  if (item.targetView && onNavigate) {
    return (
      <button
        onClick={onNavigate}
        // Use new theme variables for card background and border
        className="group flex flex-col items-start p-6 bg-[var(--brand-card-background)] rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--brand-primary)]/40 border border-[var(--brand-border)] hover:border-[var(--brand-primary)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-left w-full h-full"
      >
        {cardContent}
        <div className="mt-auto text-sm font-medium text-[var(--theme-text-accent-link)] group-hover:underline"> {/* Use theme-text-accent-link */}
          Explore Feature <ArrowRightIcon className="inline h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </button>
    );
  }

  return (
    // Use new theme variables for card background and border
    <div className="flex flex-col items-start p-6 bg-[var(--brand-card-background)] rounded-xl shadow-lg border border-[var(--brand-border)] h-full">
      {cardContent}
    </div>
  );
};


const HomePage: React.FC<HomePageProps> = ({ setActiveView }) => {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 rounded-xl bg-[var(--brand-card-background)] shadow-2xl border border-[var(--brand-border)]">
        <img 
          src={BRAND_INFO.logo.title} 
          alt={`${BRAND_INFO.organizationShortName} Logo`} 
          className="h-16 md:h-20 mx-auto mb-6 object-contain" 
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--brand-primary)]">
          Welcome to HealthGuard
        </h1>
        {/* --brand-text-light now maps to --theme-text-body (dark text) */}
        <p className="mt-4 text-lg sm:text-xl text-[var(--brand-text-light)] max-w-3xl mx-auto px-4">
          Your comprehensive partner for understanding and managing health risks.
        </p>
        {/* --brand-text-dim now maps to --theme-text-muted (dark muted text) */}
        <p className="mt-2 text-md text-[var(--brand-text-dim)] italic max-w-3xl mx-auto px-4">
          "{BRAND_INFO.slogan}"
        </p>
        <Button 
          onClick={() => setActiveView(ActiveView.RiskAssessment)}
          size="lg"
          className="mt-8"
        >
          Start Risk Assessment <ArrowRightIcon className="inline h-5 w-5 ml-2" />
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tight text-center text-[var(--brand-primary)] mb-10">
          Discover Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {FEATURE_CARDS.map(item => (
            <FeatureCard 
              key={item.id} 
              item={item} 
              onNavigate={item.targetView ? () => setActiveView(item.targetView as ActiveView) : undefined}
            />
          ))}
        </div>
      </section>

       <section className="text-center py-10 px-6 bg-[var(--brand-card-background)] rounded-xl shadow-xl border border-[var(--brand-border)]">
        <h3 className="text-2xl font-semibold text-[var(--brand-primary)] mb-3">Ready to Take Control of Your Health?</h3>
        {/* --brand-text-light now maps to --theme-text-body (dark text) */}
        <p className="text-[var(--brand-text-light)] mb-6 max-w-xl mx-auto">
          HealthGuard empowers you with insights and tools for a healthier tomorrow. Explore, learn, and act.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button onClick={() => setActiveView(ActiveView.EducationalContent)} variant="secondary" size="md">
                Browse Educational Content
            </Button>
            <Button onClick={() => setActiveView(ActiveView.HealthAssistant)} variant="primary" size="md">
                Chat with AI Assistant
            </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;