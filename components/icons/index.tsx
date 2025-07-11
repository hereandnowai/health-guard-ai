
import React from 'react';

// Using a generic type for SVG props
type SVGProps = React.SVGProps<SVGSVGElement>;

export const HomeIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

export const HeartIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.004-.004.001a.752.752 0 01-.704 0l-.004-.001z" />
  </svg>
);

export const BookOpenIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.509a.75.75 0 001 .707A9.707 9.707 0 006 21a9.735 9.735 0 003.25-.555.75.75 0 00.5-.707V5.24a.75.75 0 00-.5-.707z" />
    <path d="M12.75 4.533A9.707 9.707 0 0118 3a9.735 9.735 0 013.25.555.75.75 0 01.5.707v14.509a.75.75 0 01-1 .707A9.707 9.707 0 0118 21a9.735 9.735 0 01-3.25-.555.75.75 0 01-.5-.707V5.24a.75.75 0 01.5-.707z" />
  </svg>
);

export const ChatBubbleLeftEllipsisIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.352 0 9.75-3.694 9.75-8.25s-4.398-8.25-9.75-8.25S2.25 7.194 2.25 11.75c0 1.152.22 2.262.626 3.298l-1.614 4.842a.75.75 0 00.93 1.002l4.607-1.536zM8.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12zm3 0a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12zm3 0a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V12z" clipRule="evenodd" />
  </svg>
);

export const ChartBarIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const LightBulbIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 7.758a.75.75 0 00-1.06-1.06L3.515 8.29a.75.75 0 001.06 1.06l1.591-1.59z" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.557 13.031c1.155 2-1.18 4.603-3.298 3.464L12 17.25l-6.858 3.248c-2.118 1.139-4.452-.464-3.297-3.464L9.4 3.003zM12 15.75a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0v-.008a.75.75 0 01.75-.75zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);

export const CheckCircleIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06L10.5 12.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z" clipRule="evenodd" />
  </svg>
);

export const ChevronRightIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

export const MagnifyingGlassIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
  </svg>
);

export const PaperAirplaneIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

export const UserCircleIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
  </svg>
);

export const SparklesIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.502 2.657c-.996.588-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export const XMarkIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const InformationCircleIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

// Social Media Icons
export const LinkedInIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.4 1.4 0 0013 14.19a1.39 1.39 0 00-.12.56V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.94 3.28 4.43z" />
  </svg>
);

export const InstagramIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.22 2.42.47.65.25 1.23.58 1.77.98.54.4.88.92 1.13 1.77.25.63.42 1.36.47 2.42.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.42a4.93 4.93 0 01-1.13 1.77c-.4.54-.92.88-1.77 1.13-.63.25-1.36.42-2.42.47-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.42-.47a4.93 4.93 0 01-1.77-1.13c-.54-.4-.88-.92-1.13-1.77-.25-.63-.42-1.36-.47-2.42C2.01 15.05 2 14.72 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.42.25-.65.58-1.23.98-1.77.4-.54.92-.88 1.77-1.13.63-.25 1.36.42 2.42-.47C8.95 2.01 9.28 2 12 2zm0 1.8c-2.69 0-3 .01-4.06.06-1 .05-1.58.21-2.02.39-.46.18-.84.4-1.2.78-.35.37-.59.75-.78 1.2-.18.44-.34.98-.39 2.02C3.46 8.99 3.45 9.31 3.45 12s0 3.01.06 4.06c.05 1 .21 1.58.39 2.02.18.46.4.84.78 1.2.37.35.75.59 1.2.78.44.18.98.34 2.02.39 1.03.05 1.37.06 4.06.06s3.03-.01 4.06-.06c1-.05 1.58-.21 2.02-.39.46-.18.84.4 1.2-.78.35-.37-.59-.75-.78-1.2.18-.44.34-.98-.39-2.02.05-1.03.06-1.37.06-4.06s-.01-3.03-.06-4.06c-.05-1-.21-1.58-.39-2.02a3.03 3.03 0 00-.78-1.2c-.32-.34-.7-.59-1.2-.78-.44-.18-.98-.34-2.02-.39C15.03 3.81 14.69 3.8 12 3.8zm0 3.62c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7.22c-1.5 0-2.72-1.22-2.72-2.72S10.5 9.2 12 9.2s2.72 1.22 2.72 2.72-1.22 2.72-2.72 2.72zm5.82-7.3c-.53 0-.97.43-.97.97s.43.97.97.97.97-.43.97-.97-.44-.97-.97-.97z"/>
  </svg>
);

export const GitHubIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const XIcon: React.FC<SVGProps> = (props) => ( // Twitter/X Icon
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const YouTubeIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.582 7.306A2.88 2.88 0 0019.508 5.25C17.784 5 12 5 12 5s-5.784 0-7.508.25a2.882 2.882 0 00-2.074 2.056C2.167 9.043 2.167 12 2.167 12s0 2.957.251 4.694a2.88 2.88 0 002.074 2.056c1.724.251 7.508.251 7.508.251s5.784 0 7.508-.251a2.88 2.88 0 002.074-2.056c.251-1.737.251-4.694.251-4.694s0-2.957-.251-4.694zm-12.75 8.444V8.25l6.75 3.75z"/>
  </svg>
);

export const BlogIcon: React.FC<SVGProps> = (props) => ( // Generic Link/Blog icon
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M15.75 2.25a.75.75 0 00-1.5 0v1.5h-3v-1.5a.75.75 0 00-1.5 0v1.5H8.25V2.25a.75.75 0 00-1.5 0v1.5H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-12a3 3 0 00-3-3h-.75V2.25zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12zM6 8.25A.75.75 0 016.75 7.5h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 8.25z" />
  </svg>
);

export const EmailIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

export const PhoneIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.018a1.5 1.5 0 01-2.173 1.667l-.002.001L4.5 7.174a10.06 10.06 0 005.326 5.326l-1.01-.115a.001.001 0 01-.001-.002 1.5 1.5 0 011.667-2.173l3.018.716A1.5 1.5 0 0118 12.352V13.5A1.5 1.5 0 0116.5 15h-.69A13.816 13.816 0 012 3.5v-.69z" clipRule="evenodd" />
  </svg>
);

// Feature Icons
export const ArrowRightIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

export const ShieldCheckIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.016 3.062a11.23 11.23 0 00-8.157 3.504C2.368 8.188 2.25 10.151 2.25 12c0 1.848.118 3.812 1.608 5.433a11.233 11.233 0 008.158 3.505 11.232 11.232 0 008.157-3.505C21.632 15.812 21.75 13.849 21.75 12c0-1.848-.118-3.812-1.608-5.433A11.233 11.233 0 0012.016 3.062zm4.341 9.697a.75.75 0 00-1.06-1.06l-3.354 3.353-1.474-1.473a.75.75 0 10-1.06 1.06L11.47 16.22a.75.75 0 001.06 0l4.887-4.887-.02-.02z" clipRule="evenodd" />
  </svg>
);

export const UserGroupIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.5 6.375a.75.75 0 01.75-.75h2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V6.375zM6 11.625a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V11.625zM6.375 16.5a.75.75 0 01.75-.75h.375a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H7.125a.75.75 0 01-.75-.75v-4.5z" />
    <path fillRule="evenodd" d="M12.909.847a.75.75 0 01.248 1.026l-.055.091a10.375 10.375 0 01-3.23 4.295c-.477.408-.962.793-1.453 1.155-.54.4-.952.922-1.258 1.509-.37.723-.538 1.532-.477 2.348S6.99 13.12 7.5 13.875s.909 1.348 1.313 1.992c.403.645.818 1.272 1.262 1.862.443.59.93 1.138 1.453 1.637.524.5.992.936 1.396 1.304.403.368.683.67.855.909.172.238.196.406.1.518l-.078.09c-.12.144-.33.184-.531.117a14.397 14.397 0 01-2.928-1.109c-1.045-.515-2.097-1.12-3.08-1.848a13.953 13.953 0 01-2.618-2.186c-.75-.862-1.353-1.82-1.768-2.834a15.244 15.244 0 01-.64-3.328c0-1.246.21-2.46.619-3.608.409-1.147.995-2.233 1.728-3.221.732-.987 1.611-1.885 2.608-2.658C9.467 1.02 10.872.41 12.334.223A.75.75 0 0112.909.847zM18.75 6.375a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v2.25a.75.75 0 00.75.75H18a.75.75 0 00.75-.75V6.375zM17.25 11.625a.75.75 0 00-.75-.75h-3.75a.75.75 0 00-.75.75v2.25a.75.75 0 00.75.75H16.5a.75.75 0 00.75-.75V11.625zM17.625 16.5a.75.75 0 00-.75-.75h-.375a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75H16.875a.75.75 0 00.75-.75v-4.5z" clipRule="evenodd" />
  </svg>
);

export const AdjustmentsHorizontalIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 3.75A.75.75 0 013.75 3h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 3.75zM3 8.25A.75.75 0 013.75 7.5h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 8.25zM3 12.75a.75.75 0 013.75-1.5H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 17.25a.75.75 0 013.75-1.5H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM20.25 12a.75.75 0 000 1.5H12a.75.75 0 010-1.5h8.25zM20.25 16.5a.75.75 0 000 1.5H12a.75.75 0 010-1.5h8.25z" />
    <path fillRule="evenodd" d="M14.024 21.75a.75.75 0 01.75-.75H20.25a.75.75 0 010 1.5H14.774a.75.75 0 01-.75-.75zM14.024 17.25a.75.75 0 01.75-.75H20.25a.75.75 0 010 1.5H14.774a.75.75 0 01-.75-.75zM14.024 12.75a.75.75 0 01.75-.75H20.25a.75.75 0 010 1.5H14.774a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);


export const ClipboardDocumentCheckIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.5 3.75a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 004.5 0V6A2.25 2.25 0 0010.5 3.75zm0 12.75a.75.75 0 00.75-.75V6a.75.75 0 00-1.5 0v10.5a.75.75 0 00.75.75z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75v19.5a.75.75 0 01-1.5 0V2.25a.75.75 0 01.75-.75zM4.72 6.28a.75.75 0 011.06 0L9 9.5l3.22-3.22a.75.75 0 111.06 1.06L10.561 10.5l-3.72-3.72a.75.75 0 010-1.061L4.72 6.28zM15.78 13.22a.75.75 0 010 1.06l-2.72 2.72a.75.75 0 01-1.06 0L9 14.28V12a2.25 2.25 0 012.25-2.25h.5a2.25 2.25 0 012.25 2.25v1.28l2.404-2.404a.75.75 0 011.06 1.06l-3.125 3.125z" clipRule="evenodd" />
    <path d="M18.375 2.25A2.625 2.625 0 0015.75 4.875v14.25A2.625 2.625 0 0018.375 21.75h.001A2.625 2.625 0 0021 19.125V4.875A2.625 2.625 0 0018.375 2.25zM17.25 19.125a1.125 1.125 0 01-1.125-1.125V6a1.125 1.125 0 012.25 0v12a1.125 1.125 0 01-1.125 1.125z" />
  </svg>
);


export const CameraIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
    <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.426 1.458 2.426 2.915V19.5a2.25 2.25 0 01-2.25 2.25H1.933A2.25 2.25 0 01-.317 19.5V9.932c0-1.457.994-2.676 2.426-2.915a48.773 48.773 0 011.152-.177.935.935 0 001.11-.71l.821-1.317c.502-.805 1.365-1.338 2.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

export const AcademicCapIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.723 3.012A.75.75 0 0112.277 3L23.25 6.75a.75.75 0 01.527.928l-.868 3.473a.75.75 0 01-1.341-.336L21.75 7.723 12 4.31v10.522l5.25-1.969a.75.75 0 01.986.745l.003.018-5.338 2.001a4.5 4.5 0 01-4.798 0L2.75 13.996l-.003-.018a.75.75 0 01.986-.745L9 14.832V4.31L1.277 7.723l.181 3.049a.75.75 0 01-1.342.335L.25 7.678a.75.75 0 01.527-.928L11.723 3.012z" />
    <path d="M12.75 21.066C12.75 21.574 12.368 22 11.996 22c-.372 0-.75-.426-.75-.934V15.541l-2.983 1.119a.75.75 0 01-.659-1.341l3.593-1.347a.75.75 0 01.658 0l3.594 1.347a.75.75 0 01-.66 1.341l-2.983-1.119v5.525z" />
  </svg>
);

export const CogIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.948 1.567L9.049 4.21A7.522 7.522 0 007.82 5.511L6.177 5.096a1.95 1.95 0 00-2.121.729L2.715 7.751a1.95 1.95 0 00.73 2.121l1.408 1.056a7.51 7.51 0 000 2.148l-1.408 1.056a1.95 1.95 0 00-.73 2.121l1.342 1.926c.491.702 1.417.96 2.121.729l1.644-.415a7.522 7.522 0 001.23 1.302l.081.062a7.522 7.522 0 001.23 1.302l-.081.062 1.644.415c.704.23 1.63.026 2.121-.729l1.342-1.926a1.95 1.95 0 00-.73-2.121l-1.408-1.056a7.51 7.51 0 000-2.148l1.408-1.056a1.95 1.95 0 00.73-2.121l-1.342-1.926a1.95 1.95 0 00-2.121-.729l-1.644.415a7.522 7.522 0 00-1.23-1.302l-.081-.062a7.522 7.522 0 00-1.23-1.302l.081-.062-1.644-.415A1.952 1.952 0 0011.078 2.25zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" clipRule="evenodd" />
    <path d="M10.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
  </svg>
);

// Settings Page Icons
export const PaintBrushIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.5 2.25a2.25 2.25 0 00-2.25 2.25v9.75a.75.75 0 001.5 0V4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v12a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V15a.75.75 0 00-1.5 0v1.5a3.75 3.75 0 003.75 3.75h12A3.75 3.75 0 0021 16.5V4.5A2.25 2.25 0 0019.5 2.25z" />
    <path d="M6 12.75a.75.75 0 00-.75-.75H3.75a.75.75 0 000 1.5H6a.75.75 0 00.75-.75zm0-3.75A.75.75 0 005.25 9H3.75a.75.75 0 000 1.5H6a.75.75 0 00.75-.75zm0-3.75A.75.75 0 005.25 5.25H3.75a.75.75 0 000 1.5H6a.75.75 0 00.75-.75z" />
  </svg>
);

export const BellIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M11.58 3.663a1.5 1.5 0 01.84 1.342V6.37l4.16 3.099a1.5 1.5 0 01.692 1.341v.231l-.01.036a11.93 11.93 0 01-3.612 3.861 1.5 1.5 0 01-1.859-.44L10.5 12.235V12a1.5 1.5 0 00-1.5-1.5H8.25V9.37a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 000 3h.75v1.125A1.5 1.5 0 007.5 13.5h3.375a1.5 1.5 0 001.406-.94L15 8.797V5.005a.75.75 0 00-.42-.671l-3.33-2.497a.75.75 0 00-.84-.048z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 21a6.75 6.75 0 006.75-6.75.75.75 0 00-1.5 0A5.25 5.25 0 0112 19.5a5.25 5.25 0 01-5.25-5.25.75.75 0 00-1.5 0A6.75 6.75 0 0012 21z" clipRule="evenodd" />
  </svg>
);

export const ShieldExclamationIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.016 3.062a11.23 11.23 0 00-8.157 3.504C2.368 8.188 2.25 10.151 2.25 12c0 1.848.118 3.812 1.608 5.433a11.233 11.233 0 008.158 3.505 11.232 11.232 0 008.157-3.505C21.632 15.812 21.75 13.849 21.75 12c0-1.848-.118-3.812-1.608-5.433A11.233 11.233 0 0012.016 3.062zM12 8.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

export const ArrowDownTrayIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);

// Health Assistant Icons
export const MicrophoneIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 18.75a6 6 0 006-6v-1.5a6 6 0 00-12 0v1.5a6 6 0 006 6zM12 6.75a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V7.5a.75.75 0 01.75-.75zM12 15a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-4.5 0v1.5A2.25 2.25 0 0012 15z" />
    <path d="M12 2.25a.75.75 0 01.75.75v.518c2.98.299 5.25 2.82 5.25 5.732v1.5a7.5 7.5 0 01-15 0v-1.5c0-2.912 2.27-5.433 5.25-5.732V3a.75.75 0 01.75-.75zM8.25 12a3.75 3.75 0 017.5 0v1.5a3.75 3.75 0 01-7.5 0v-1.5z" />
    <path d="M5.566 14.07a11.23 11.23 0 00-1.284 2.378.75.75 0 00.732 1.05h12.004a.75.75 0 00.732-1.05A11.23 11.23 0 0018.435 14.07l-.07-.129a12.75 12.75 0 01-12.73 0l-.07.129z" />
  </svg>
);

export const LanguageIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.75 2.25a.75.75 0 00-1.5 0v1.5h-1.5a.75.75 0 000 1.5H12v1.5a.75.75 0 001.5 0V6h1.5a.75.75 0 000-1.5H13.5V3a.75.75 0 00-.75-.75zM15 9.75a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6zM10.875 12.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM12 15.75a.75.75 0 01.75.75v.008c0 .867.212 1.701.583 2.454l.058.118a3.375 3.375 0 005.83 0l.058-.118a5.163 5.163 0 00.583-2.454V16.5a.75.75 0 011.5 0v.008a6.663 6.663 0 01-.937 3.738l-.06.12-.058.118a4.875 4.875 0 01-8.452 0l-.058-.118-.06-.12A6.663 6.663 0 014.5 16.508V16.5a.75.75 0 011.5 0v.008c0 .867.212 1.701.583 2.454l.058.118a3.375 3.375 0 005.83 0l.058-.118a5.163 5.163 0 00.583-2.454V16.5A.75.75 0 0112 15.75z" clipRule="evenodd" />
    <path d="M3.375 12.75a.75.75 0 000 1.5h1.875a.75.75 0 000-1.5H3.375z" />
  </svg>
);

export const ArrowLeftIcon: React.FC<SVGProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.638l4.132 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.638 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
  </svg>
);
