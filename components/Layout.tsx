
import React from 'react';
import { ActiveView, NavItem } from '../types';
import { BRAND_INFO } from '../constants';
import { LinkedInIcon, InstagramIcon, GitHubIcon, XIcon, YouTubeIcon, BlogIcon, EmailIcon, PhoneIcon } from './icons/index'; 

interface LayoutProps {
  children: React.ReactNode;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  navItems: NavItem[];
}

const SocialIcon: React.FC<{ platform: keyof typeof BRAND_INFO.socialMedia, className?: string }> = ({ platform, className="h-6 w-6" }) => {
  const IconComponent = {
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    github: GitHubIcon,
    x: XIcon,
    youtube: YouTubeIcon,
    blog: BlogIcon,
  }[platform];

  if (!IconComponent) return null;
  // Adjusted for light theme: footer is dark, so icons need to be light.
  return <IconComponent className={className + " text-slate-300 hover:text-[var(--brand-primary)] transition-colors"} />;
};


const Layout: React.FC<LayoutProps> = ({ children, activeView, setActiveView, navItems }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-background)] text-[var(--brand-text-light)]">
      <header className="bg-[var(--brand-secondary)]/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[var(--brand-primary)]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img src={BRAND_INFO.logo.title} alt={`${BRAND_INFO.organizationShortName} Logo`} className="h-10 md:h-12 mr-3 object-contain" />
            </div>
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveView(item.key)}
                  className={`px-3 py-2 lg:px-4 rounded-md text-sm font-medium transition-all duration-150 ease-in-out group relative overflow-hidden
                    ${activeView === item.key 
                      ? 'text-[var(--brand-primary-text)] shadow-md' // Active state: dark text
                      : 'text-slate-300 hover:bg-[var(--brand-primary)]/20 group-hover:text-[var(--brand-primary-text)]' // Inactive: slate text, on group hover (yellow bg slides in) text becomes dark
                    }`}
                >
                  {/* This span provides the main background color for active and hover states */}
                  <span className={`absolute inset-0 w-full h-full bg-[var(--brand-primary)] transition-transform duration-300 ease-out ${activeView === item.key ? 'translate-y-0' : '-translate-y-full group-hover:translate-y-0'}`}></span>
                  
                  {/* This span holds the content. Its text color will be dark on active or hover (when yellow bg is present) */}
                  <span className="relative z-10 flex items-center">
                    <item.icon className={`inline-block h-5 w-5 mr-2 -mt-0.5 
                      ${activeView === item.key ? 'text-[var(--brand-primary-text)]' : 'text-slate-300 group-hover:text-[var(--brand-primary-text)]'}`} />
                    {item.label} {/* Label inherits text color from button settings */}
                  </span>
                </button>
              ))}
            </nav>
            <div className="md:hidden">
              <select 
                value={activeView} 
                onChange={(e) => setActiveView(e.target.value as ActiveView)}
                className="bg-[var(--brand-card-background)] text-[var(--brand-text-light)] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] border border-[var(--brand-border)]"
                aria-label="Select view"
              >
                {navItems.map(item => (
                  <option key={item.key} value={item.key} className="bg-[var(--brand-card-background)] text-[var(--brand-text-light)]">{item.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-[var(--brand-secondary)]/90 backdrop-blur-md py-8 text-center text-sm border-t border-[var(--brand-primary)]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <img src={BRAND_INFO.logo.title} alt={`${BRAND_INFO.organizationShortName} Logo`} className="h-10 mx-auto mb-2 opacity-80 object-contain" />
          {/* Adjusted for light theme: footer is dark, so text needs to be light. */}
          <p className="italic text-base text-slate-100">"{BRAND_INFO.slogan}"</p>
          <div className="flex justify-center space-x-5 my-4">
            {Object.entries(BRAND_INFO.socialMedia).map(([platform, { url, name }]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                <SocialIcon platform={platform as keyof typeof BRAND_INFO.socialMedia} />
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-slate-300">
            <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[var(--brand-primary)] transition-colors flex items-center">
              <EmailIcon className="h-4 w-4 mr-1.5" /> {BRAND_INFO.email}
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={`tel:${BRAND_INFO.mobile.replace(/\s/g, '')}`} className="hover:text-[var(--brand-primary)] transition-colors flex items-center">
              <PhoneIcon className="h-4 w-4 mr-1.5" /> {BRAND_INFO.mobile}
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-300">
            &copy; {new Date().getFullYear()} {BRAND_INFO.organizationLongName}. All rights reserved. <br />
            Developed by Adhithya J [ AI Products Engineering Team ]
          </p>
          <p className="mt-1 text-xs text-slate-400">HealthGuard is a tool for informational purposes only. Consult a healthcare professional for medical advice.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
