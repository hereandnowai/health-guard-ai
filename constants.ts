
import { ActiveView, NavItem, FeatureCardItem, AppSettings, LanguageOption, Article } from './types'; // Added AppSettings, LanguageOption, Article
import { 
  HomeIcon, 
  HeartIcon, 
  BookOpenIcon, 
  ChatBubbleLeftEllipsisIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  CameraIcon, 
  AcademicCapIcon,
  CogIcon // Added CogIcon
} from './components/icons';

export const NAV_ITEMS: NavItem[] = [
  {
    key: ActiveView.Home,
    label: 'Home',
    icon: HomeIcon,
    description: 'Welcome to HealthGuard. Discover features and get started.'
  },
  {
    key: ActiveView.RiskAssessment,
    label: 'Risk Assessment',
    icon: HeartIcon,
    description: 'Calculate your cardiovascular disease risk and get personalized insights.'
  },
  {
    key: ActiveView.EducationalContent,
    label: 'Learn & Discover',
    icon: BookOpenIcon,
    description: 'Access articles and resources on health and disease prevention.'
  },
  {
    key: ActiveView.HealthAssistant,
    label: 'AI Health Assistant',
    icon: ChatBubbleLeftEllipsisIcon,
    description: 'Ask health-related questions and get information from our AI assistant.'
  },
  { // Added Settings Nav Item
    key: ActiveView.Settings,
    label: 'Settings',
    icon: CogIcon,
    description: 'Configure application preferences and settings.'
  },
];

export const GEMINI_TEXT_MODEL = 'gemini-2.5-flash-preview-04-17';

export const BRAND_INFO = {
  organizationShortName: "HERE AND NOW AI",
  organizationLongName: "HERE AND NOW AI - Artificial Intelligence Research Institute",
  website: "https://hereandnowai.com",
  email: "info@hereandnowai.com",
  mobile: "+91 996 296 1000",
  slogan: "designed with passion for innovation",
  colors: {
    primary: "#FFDF00",
    secondary: "#004040"
  },
  logo: {
    title: "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/HNAI%20Title%20-Teal%20%26%20Golden%20Logo%20-%20DESIGN%203%20-%20Raj-07.png",
    favicon: "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/favicon-logo-with-name.png"
  },
  chatbot: {
    avatar: "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/caramel.jpeg",
    face: "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/caramel-face.jpeg"
  },
  socialMedia: {
    blog: { url: "https://hereandnowai.com/blog", name: "Blog" },
    linkedin: { url: "https://www.linkedin.com/company/hereandnowai/", name: "LinkedIn"},
    instagram: { url: "https://instagram.com/hereandnow_ai", name: "Instagram"},
    github: { url: "https://github.com/hereandnowai", name: "GitHub"},
    x: { url: "https://x.com/hereandnow_ai", name: "X"},
    youtube: { url: "https://youtube.com/@hereandnow_ai", name: "YouTube"}
  }
};


export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Understanding Blood Pressure',
    summary: 'Learn about what blood pressure numbers mean and how to manage hypertension.',
    category: 'Cardiovascular Health',
    imageUrl: 'https://picsum.photos/seed/bp/400/200',
    content: `Hypertension, commonly known as high blood pressure, is a condition where the force of the blood against your artery walls is consistently too high. This can damage your arteries over time and lead to serious health problems such as heart disease, stroke, and kidney failure.

Blood pressure is measured in millimeters of mercury (mmHg) and is given as two numbers:
- Systolic pressure (the top number): This measures the pressure in your arteries when your heart beats.
- Diastolic pressure (the bottom number): This measures the pressure in your arteries when your heart rests between beats.

A normal blood pressure reading is typically around 120/80 mmHg. Blood pressure is considered high if it is consistently 130/80 mmHg or higher.

Managing hypertension often involves lifestyle changes such as:
- Eating a heart-healthy diet low in salt, saturated fats, and cholesterol.
- Maintaining a healthy weight.
- Being physically active regularly.
- Limiting alcohol consumption.
- Quitting smoking.
- Managing stress.

In some cases, medication may also be necessary to control high blood pressure. It's important to work with your doctor to develop a management plan that's right for you.`
  },
  {
    id: '2',
    title: 'The Importance of Cholesterol Management',
    summary: 'Discover the difference between good and bad cholesterol and tips for healthy levels.',
    category: 'Cardiovascular Health',
    imageUrl: 'https://picsum.photos/seed/cholesterol/400/200',
    content: `Cholesterol is a waxy substance found in your blood. Your body needs cholesterol to build healthy cells, but high levels of cholesterol can increase your risk of heart disease.

There are two main types of cholesterol:
- Low-density lipoprotein (LDL) cholesterol: This is often called "bad" cholesterol because it can build up in your arteries and form plaques, a condition known as atherosclerosis. These plaques can narrow your arteries and restrict blood flow, leading to heart attack or stroke.
- High-density lipoprotein (HDL) cholesterol: This is often called "good" cholesterol because it helps remove LDL cholesterol from your arteries.

High cholesterol typically has no symptoms, so it's important to have your cholesterol levels checked regularly. Lifestyle changes such as eating a healthy diet, exercising regularly, and maintaining a healthy weight can help manage cholesterol levels. In some cases, medication may also be needed.`
  },
  {
    id: '3',
    title: 'Healthy Eating for a Strong Heart',
    summary: 'Explore dietary strategies to reduce your risk of heart disease.',
    category: 'Nutrition',
    imageUrl: 'https://picsum.photos/seed/diet/400/200',
    content: `A heart-healthy diet is crucial for preventing heart disease. Key principles include:
- Eating plenty of fruits, vegetables, and whole grains.
- Choosing lean proteins such as fish, poultry, beans, and legumes.
- Limiting saturated and trans fats, which can raise LDL ("bad") cholesterol levels.
- Reducing sodium intake to help control blood pressure.
- Limiting added sugars, which can contribute to weight gain and other risk factors for heart disease.
- Choosing healthy fats, such as those found in avocados, nuts, seeds, and olive oil.

Making gradual changes to your eating habits can make a big difference in your heart health over time.`
  },
  {
    id: '4',
    title: 'The Benefits of Regular Physical Activity',
    summary: 'Find out how exercise can improve your overall health and reduce disease risk.',
    category: 'Fitness',
    imageUrl: 'https://picsum.photos/seed/fitness/400/200',
    content: `Regular physical activity is one of the most important things you can do for your health. It offers numerous benefits, including:
- Strengthening your heart and improving blood circulation.
- Helping to control blood pressure, cholesterol levels, and blood sugar levels.
- Assisting with weight management.
- Reducing stress, anxiety, and depression.
- Improving sleep quality.
- Strengthening bones and muscles.

Aim for at least 150 minutes of moderate-intensity aerobic exercise (such as brisk walking or cycling) or 75 minutes of vigorous-intensity aerobic exercise (such as jogging or swimming) per week, along with muscle-strengthening activities at least two days a week.`
  },
  {
    id: '5',
    title: 'Smoking Cessation: Your Path to a Healthier Life',
    summary: 'Resources and tips to help you quit smoking for good.',
    category: 'Lifestyle',
    imageUrl: 'https://picsum.photos/seed/smoking/400/200',
    content: `Quitting smoking is one of the best things you can do for your health, regardless of how long you've smoked. The benefits of quitting begin almost immediately and continue for years.
Smoking damages nearly every organ in your body and is a major cause of heart disease, stroke, lung cancer, and other chronic diseases.

Tips for quitting smoking:
- Set a quit date.
- Identify your triggers and plan how to avoid or cope with them.
- Seek support from family, friends, or a support group.
- Consider using nicotine replacement therapy (NRT) or other medications to help manage withdrawal symptoms.
- Don't get discouraged by setbacks. Many people try several times before they quit for good.

Talk to your doctor about resources and strategies to help you quit smoking.`
  },
  {
    id: '6',
    title: 'Managing Stress for Better Health',
    summary: 'Techniques to cope with stress and improve your mental and physical well-being.',
    category: 'Mental Wellness',
    imageUrl: 'https://picsum.photos/seed/stress/400/200',
    content: `Chronic stress can take a toll on your physical and mental health, increasing your risk for conditions like heart disease, high blood pressure, and depression. Learning healthy ways to manage stress is essential.

Effective stress management techniques include:
- Regular physical activity: Exercise is a great stress reliever.
- Relaxation techniques: Practices like deep breathing, meditation, yoga, or tai chi can help calm your mind and body.
- Getting enough sleep: Aim for 7-9 hours of quality sleep per night.
- Maintaining a healthy diet: Nourishing your body with healthy foods can improve your ability to cope with stress.
- Connecting with others: Spending time with supportive family and friends can reduce stress.
- Making time for hobbies and enjoyable activities.
- Setting realistic goals and priorities.
- Learning to say no to excessive commitments.

If you're struggling to manage stress on your own, don't hesitate to seek help from a mental health professional.`
  }
];

export const INITIAL_RISK_FORM_DATA = {
  age: null,
  gender: '' as 'male' | 'female' | '',
  isSmoker: false,
  systolicBP: null,
  totalCholesterol: null,
  hasDiabetes: false,
  hasFamilyHistoryCVD: false,
};

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'risk-assessment',
    title: 'Advanced Risk Calculators',
    description: 'Estimate your 10-year disease risks (CVD, Diabetes) and discover your heart age with established models.',
    icon: ShieldCheckIcon,
    targetView: ActiveView.RiskAssessment,
  },
  {
    id: 'educational-content',
    title: 'Learn & Discover',
    description: 'Access expert-curated articles, videos, and news on health, wellness, and disease prevention.',
    icon: BookOpenIcon,
    targetView: ActiveView.EducationalContent,
  },
  {
    id: 'ai-assistant',
    title: 'AI Health Assistant',
    description: 'Get instant answers to your health questions, symptom analysis, and medication information.',
    icon: ChatBubbleLeftEllipsisIcon,
    targetView: ActiveView.HealthAssistant,
  },
  {
    id: 'personalized-interventions',
    title: 'Tailored Health Guidance',
    description: 'Receive personalized lifestyle recommendations for blood pressure, cholesterol, weight, and more.',
    icon: AdjustmentsHorizontalIcon,
     // targetView: ActiveView.RiskAssessment, // Or a dedicated interventions page if it existed
  },
  {
    id: 'health-monitoring',
    title: 'Track Your Progress',
    description: 'Monitor vital signs, lab results, and lifestyle metrics. See your risk factors update in real-time.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    id: 'population-analytics',
    title: 'Population Health Insights',
    description: 'Analyze health trends, identify high-risk groups, and inform public health strategies effectively.',
    icon: UserGroupIcon,
  },
];

// Default App Settings
export const DEFAULT_APP_SETTINGS: AppSettings = {
  theme: 'light', // Default to light as per current app state
  notifications: {
    articleAlerts: true,
    riskReminders: false,
  },
  privacy: {
    allowAnonymousDataCollection: true,
  },
};

export const DEFAULT_LANGUAGE_CODE: string = 'en-US';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en-US', name: 'English (US)', nativeName: 'English (US)' },
  { code: 'en-GB', name: 'English (UK)', nativeName: 'English (UK)' },
  { code: 'es-ES', name: 'Spanish (Spain)', nativeName: 'Español (España)' },
  { code: 'es-MX', name: 'Spanish (Mexico)', nativeName: 'Español (México)' },
  { code: 'fr-FR', name: 'French (France)', nativeName: 'Français (France)' },
  { code: 'fr-CA', name: 'French (Canada)', nativeName: 'Français (Canada)' },
  { code: 'nl-NL', name: 'Dutch', nativeName: 'Nederlands' },
  // Add more languages as needed and supported by SpeechRecognition and Gemini
];