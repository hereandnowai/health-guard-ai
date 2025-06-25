
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './components/pages/HomePage';
import RiskAssessmentPage from './components/pages/RiskAssessmentPage';
import EducationalContentPage from './components/pages/EducationalContentPage';
import HealthAssistantPage from './components/pages/HealthAssistantPage';
import SettingsPage from './components/pages/SettingsPage';
import ArticleDetailPage from './components/pages/ArticleDetailPage'; // Import ArticleDetailPage
import Modal from './components/common/Modal';
import Button from './components/common/Button';
import { ActiveView, Article } from './types'; // Added Article
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>(ActiveView.Home);
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(true);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null); // State for selected article

  useEffect(() => {
    const disclaimerShown = localStorage.getItem('disclaimerShown');
    if (disclaimerShown) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleDisclaimerAccept = () => {
    localStorage.setItem('disclaimerShown', 'true');
    setShowDisclaimer(false);
  };

  const handleShowArticleDetail = (article: Article) => {
    setSelectedArticle(article);
    setActiveView(ActiveView.ArticleDetail);
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
    setActiveView(ActiveView.EducationalContent);
  };

  const renderView = () => {
    switch (activeView) {
      case ActiveView.Home:
        return <HomePage setActiveView={setActiveView} />;
      case ActiveView.RiskAssessment:
        return <RiskAssessmentPage />;
      case ActiveView.EducationalContent:
        return <EducationalContentPage onShowArticleDetail={handleShowArticleDetail} />;
      case ActiveView.HealthAssistant:
        return <HealthAssistantPage />;
      case ActiveView.Settings:
        return <SettingsPage />;
      case ActiveView.ArticleDetail:
        if (selectedArticle) {
          return <ArticleDetailPage article={selectedArticle} onBack={handleBackToArticles} />;
        }
        // Fallback if no article is selected, though this shouldn't typically happen
        setActiveView(ActiveView.EducationalContent); 
        return <EducationalContentPage onShowArticleDetail={handleShowArticleDetail} />;
      default:
        return <HomePage setActiveView={setActiveView} />;
    }
  };

  return (
    <>
      <Layout activeView={activeView} setActiveView={setActiveView} navItems={NAV_ITEMS}>
        {renderView()}
      </Layout>
      {showDisclaimer && (
        <Modal
          title="Important Medical Disclaimer"
          onClose={handleDisclaimerAccept}
          isOpen={showDisclaimer}
        >
          {/* Modal text now uses --brand-text-light which maps to dark body text, suitable for light modal bg */}
          <div className="text-sm text-[var(--brand-text-light)] space-y-3">
            <p>This application provides information and risk estimations for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this application.</p>
            <p>The risk calculations are based on general models and may not accurately reflect your individual health status. Decisions regarding your health should be made in consultation with a healthcare professional.</p>
            <p>The AI Health Assistant provides general information and should not be used for diagnosis or treatment decisions. If you have a medical emergency, call your local emergency number immediately.</p>
            <Button
              onClick={handleDisclaimerAccept}
              fullWidth
              className="mt-4"
            >
              I Understand and Accept
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default App;