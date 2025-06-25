
import React, { useState, useEffect, useCallback } from 'react';
import { AppSettings } from '../../types';
import { DEFAULT_APP_SETTINGS, BRAND_INFO } from '../../constants';
import Button from '../common/Button';
import SelectInput from '../common/SelectInput';
import CheckboxInput from '../common/CheckboxInput';
import { CheckCircleIcon, InformationCircleIcon, PaintBrushIcon, BellIcon, ShieldExclamationIcon, ArrowDownTrayIcon } from '../icons';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_APP_SETTINGS);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedSettings = localStorage.getItem(`${BRAND_INFO.organizationShortName}_HealthGuard_Settings`);
    if (storedSettings) {
      try {
        const parsedSettings = JSON.parse(storedSettings);
        setSettings(prev => ({ ...prev, ...parsedSettings }));
      } catch (error) {
        console.error("Failed to parse settings from localStorage", error);
        setSettings(DEFAULT_APP_SETTINGS);
      }
    } else {
      setSettings(DEFAULT_APP_SETTINGS);
    }
    setIsLoading(false);
  }, []);

  const handleSettingChange = useCallback((category: keyof AppSettings, key: string, value: any) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [category]: {
        ...(prevSettings[category] as object), 
        [key]: value,
      },
    }));
  }, []);

  const handleThemeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prev => ({ ...prev, theme: e.target.value as AppSettings['theme'] }));
  }, []);
  
  const handleNotificationChange = useCallback((key: keyof AppSettings['notifications'], checked: boolean) => {
    handleSettingChange('notifications', key, checked);
  }, [handleSettingChange]);

  const handlePrivacyChange = useCallback((key: keyof AppSettings['privacy'], checked: boolean) => {
     handleSettingChange('privacy', key, checked);
  }, [handleSettingChange]);


  const handleSaveSettings = () => {
    localStorage.setItem(`${BRAND_INFO.organizationShortName}_HealthGuard_Settings`, JSON.stringify(settings));
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); 
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-[var(--brand-text-dim)]">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[var(--brand-primary)]">
          Application Settings
        </h2>
        <p className="mt-3 text-lg text-[var(--brand-text-light)]">
          Customize your HealthGuard experience.
        </p>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-24 right-4 z-[150] p-4 rounded-md bg-green-700 text-green-100 shadow-lg flex items-center transition-opacity duration-300 animate-modal-appear" role="alert">
          <CheckCircleIcon className="h-6 w-6 mr-2" />
          Settings saved successfully!
        </div>
      )}

      <div className="space-y-8">
        <section className="p-6 bg-[var(--brand-card-background)] rounded-xl shadow-xl border border-[var(--brand-border)]">
          <h3 className="text-xl font-semibold text-[var(--theme-text-headings)] mb-1 flex items-center">
            <PaintBrushIcon className="h-6 w-6 mr-2 text-[var(--brand-primary)]" />
            Appearance
          </h3>
          <p className="text-sm text-[var(--brand-text-dim)] mb-4 border-b border-[var(--theme-border-secondary)] pb-3">Choose how the application looks.</p>
          <SelectInput
            label="Application Theme"
            name="theme"
            value={settings.theme}
            onChange={handleThemeChange}
            options={[
              { value: 'light', label: 'Light Mode (Current)' },
              { value: 'system', label: 'System Default' },
               { value: 'dark', label: 'Dark Mode (Active Preview)' }, 
            ]}
            containerClassName="max-w-xs"
          />
           <p className="mt-2 text-xs text-[var(--brand-text-dim)] flex items-center">
            <InformationCircleIcon className="h-4 w-4 mr-1.5 shrink-0"/>
            The application is currently previewing a dark theme. Full theme switching functionality will be refined.
          </p>
        </section>

        <section className="p-6 bg-[var(--brand-card-background)] rounded-xl shadow-xl border border-[var(--brand-border)]">
          <h3 className="text-xl font-semibold text-[var(--theme-text-headings)] mb-1 flex items-center">
            <BellIcon className="h-6 w-6 mr-2 text-[var(--brand-primary)]" />
            Notifications
          </h3>
           <p className="text-sm text-[var(--brand-text-dim)] mb-4 border-b border-[var(--theme-border-secondary)] pb-3">Manage your alert preferences.</p>
          <div className="space-y-3">
            <CheckboxInput
              label="Enable New Article Alerts"
              name="articleAlerts"
              checked={settings.notifications.articleAlerts}
              onChange={(e) => handleNotificationChange('articleAlerts', e.target.checked)}
            />
            <CheckboxInput
              label="Enable Risk Assessment Reminders"
              name="riskReminders"
              checked={settings.notifications.riskReminders}
              onChange={(e) => handleNotificationChange('riskReminders', e.target.checked)}
            />
          </div>
          <p className="mt-3 text-xs text-[var(--brand-text-dim)] flex items-center">
             <InformationCircleIcon className="h-4 w-4 mr-1.5 shrink-0"/>
            Actual push notifications are not yet implemented. These settings are for demonstration.
          </p>
        </section>
        
        <section className="p-6 bg-[var(--brand-card-background)] rounded-xl shadow-xl border border-[var(--brand-border)]">
          <h3 className="text-xl font-semibold text-[var(--theme-text-headings)] mb-1 flex items-center">
            <ShieldExclamationIcon className="h-6 w-6 mr-2 text-[var(--brand-primary)]" />
            Data & Privacy
          </h3>
          <p className="text-sm text-[var(--brand-text-dim)] mb-4 border-b border-[var(--theme-border-secondary)] pb-3">Control how your data is used.</p>
          <div className="space-y-3">
            <CheckboxInput
              label="Allow anonymous data collection for research"
              name="allowAnonymousDataCollection"
              checked={settings.privacy.allowAnonymousDataCollection}
              onChange={(e) => handlePrivacyChange('allowAnonymousDataCollection', e.target.checked)}
            />
          </div>
           <p className="mt-3 text-xs text-[var(--brand-text-dim)] flex items-center">
            <InformationCircleIcon className="h-4 w-4 mr-1.5 shrink-0"/>
            Your privacy is important. Review our (non-existent) privacy policy for more details.
          </p>
        </section>

        <div className="flex justify-end pt-4">
          <Button onClick={handleSaveSettings} size="lg">
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;