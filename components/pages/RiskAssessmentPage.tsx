
import React, { useState, useCallback } from 'react';
import { RiskFormData, RiskResult } from '../../types';
import { calculateCardiovascularRisk } from '../../services/riskService';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import CheckboxInput from '../common/CheckboxInput';
import LoadingSpinner from '../common/LoadingSpinner';
import { INITIAL_RISK_FORM_DATA } from '../../constants';
import { ChartBarIcon, LightBulbIcon, ExclamationTriangleIcon, CheckCircleIcon } from '../icons';

const RiskAssessmentPage: React.FC = () => {
  const [formData, setFormData] = useState<RiskFormData>(INITIAL_RISK_FORM_DATA);
  const [riskResult, setRiskResult] = useState<RiskResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: type === 'number' ? (value ? parseFloat(value) : null) : value }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setRiskResult(null);

    if (!formData.age || formData.age <= 0 || !formData.gender || !formData.systolicBP || formData.systolicBP <=0 || !formData.totalCholesterol || formData.totalCholesterol <=0) {
        setError("Please fill in all required fields with valid values (Age, Gender, Systolic BP, Total Cholesterol).");
        setIsLoading(false);
        return;
    }

    try {
      const result = await calculateCardiovascularRisk(formData);
      setRiskResult(result);
    } catch (err) {
      setError("An error occurred while calculating risk. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getRiskColor = (level: string | undefined) => {
    if (!level) return 'text-[var(--brand-text-dim)]'; 
    switch (level) {
      case 'Low': return 'text-green-400'; 
      case 'Moderate': return 'text-yellow-400'; 
      case 'High': return 'text-orange-400'; 
      case 'Very High': return 'text-red-500'; 
      default: return 'text-[var(--brand-text-dim)]';
    }
  };
  
  const getRecommendationIcon = (severity: 'low' | 'medium' | 'high') => {
    switch(severity) {
      case 'low': return <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 shrink-0" />;
      case 'medium': return <LightBulbIcon className="h-5 w-5 text-yellow-400 mr-2 shrink-0" />;
      case 'high': return <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2 shrink-0" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[var(--brand-primary)]">
          Cardiovascular Risk Assessment
        </h2>
        <p className="mt-3 text-lg text-[var(--brand-text-light)] max-w-2xl mx-auto">
          Enter your details to estimate your 10-year risk of cardiovascular disease (CVD) and receive personalized recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <form onSubmit={handleSubmit} className="p-6 bg-[var(--brand-card-background)] rounded-xl shadow-2xl space-y-6 border border-[var(--brand-border)]">
          <h3 className="text-xl font-semibold text-[var(--brand-primary)] mb-4 border-b border-[var(--brand-border)] pb-2">Your Health Profile</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <TextInput label="Age (years)" name="age" type="number" value={formData.age?.toString() || ''} onChange={handleChange} required placeholder="e.g., 55" />
            <SelectInput label="Gender" name="gender" value={formData.gender} onChange={handleChange} required options={[{value: '', label: 'Select Gender'}, {value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}]} />
            <TextInput label="Systolic BP (mmHg)" name="systolicBP" type="number" value={formData.systolicBP?.toString() || ''} onChange={handleChange} required placeholder="e.g., 130" />
            <TextInput label="Total Cholesterol (mg/dL)" name="totalCholesterol" type="number" value={formData.totalCholesterol?.toString() || ''} onChange={handleChange} required placeholder="e.g., 200" />
          </div>
          <div className="space-y-3 pt-2">
            <CheckboxInput label="Current Smoker" name="isSmoker" checked={formData.isSmoker} onChange={handleChange} />
            <CheckboxInput label="Diagnosed with Diabetes" name="hasDiabetes" checked={formData.hasDiabetes} onChange={handleChange} />
            <CheckboxInput label="Family History of CVD (parents/siblings before 60)" name="hasFamilyHistoryCVD" checked={formData.hasFamilyHistoryCVD} onChange={handleChange} />
          </div>
          
          {error && <p className="text-sm text-red-400 bg-red-900/40 p-3 rounded-md"><ExclamationTriangleIcon className="inline h-5 w-5 mr-2 text-red-500" />{error}</p>}
          
          <Button type="submit" disabled={isLoading} fullWidth>
            {isLoading ? <LoadingSpinner size="sm" /> : <><ChartBarIcon className="inline h-5 w-5 mr-2" />Calculate My Risk</>}
          </Button>
        </form>

        {isLoading && !riskResult && (
          <div className="p-6 bg-[var(--brand-card-background)] rounded-xl shadow-2xl flex flex-col items-center justify-center h-full border border-[var(--brand-border)] min-h-[300px]">
            <LoadingSpinner text="Calculating your risk..." />
          </div>
        )}

        {riskResult && !isLoading && (
          <div className="p-6 bg-[var(--brand-card-background)] rounded-xl shadow-2xl space-y-6 border border-[var(--brand-border)]">
            <h3 className="text-xl font-semibold text-[var(--brand-primary)] border-b border-[var(--brand-border)] pb-2">Your Risk Profile</h3>
            <div className="text-center space-y-2">
              <p className="text-sm text-[var(--brand-text-dim)]">10-Year CVD Risk</p>
              <p className={`text-5xl font-bold ${getRiskColor(riskResult.riskLevel)}`}>{riskResult.cvdRiskPercentage.toFixed(1)}%</p>
              <p className={`text-lg font-medium ${getRiskColor(riskResult.riskLevel)}`}>Risk Level: {riskResult.riskLevel}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-[var(--brand-text-dim)]">Estimated Heart Age</p>
              <p className="text-3xl font-bold text-sky-400">{riskResult.heartAge} years</p> 
            </div>
            
            <div className="space-y-3 pt-3">
              <h4 className="text-lg font-semibold text-[var(--brand-text-light)] flex items-center"><LightBulbIcon className="h-6 w-6 mr-2 text-yellow-400" />Personalized Recommendations:</h4>
              <ul className="space-y-2 pl-1">
                {riskResult.recommendations.map(rec => (
                  <li key={rec.id} className="flex items-start text-sm p-3 bg-[var(--theme-bg-accent)] rounded-md border border-[var(--theme-border-secondary)]">
                    {getRecommendationIcon(rec.severity)}
                    <span className="text-[var(--brand-text-light)]">{rec.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-[var(--brand-text-dim)] italic mt-4">
              Note: This is an estimate. Consult a healthcare professional for a comprehensive evaluation and medical advice.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskAssessmentPage;