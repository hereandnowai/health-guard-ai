
import { RiskFormData, RiskResult, RiskRecommendation } from '../types';

// Mock service to simulate risk calculation
// This is NOT a clinically validated model and is for demonstration purposes only.
export const calculateCardiovascularRisk = async (data: RiskFormData): Promise<RiskResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let baseRisk = 5; // Base 10-year risk percentage
      let heartAge = data.age || 0;
      const recommendations: RiskRecommendation[] = [];

      // Age factor
      if (data.age) {
        if (data.age > 60) baseRisk += (data.age - 60) * 0.5;
        else if (data.age < 40) baseRisk -= (40 - data.age) * 0.2;
        heartAge += (data.age - 50) * 0.2; // Simplified heart age adjustment
      }
      
      // Gender factor (example: males slightly higher base risk in some models)
      if (data.gender === 'male') {
        baseRisk += 1;
        heartAge += 2;
      }

      // Smoking factor
      if (data.isSmoker) {
        baseRisk += 8;
        heartAge += 7;
        recommendations.push({ id: 'smoke', text: "Quitting smoking is the most impactful step to reduce your cardiovascular risk. Seek support and resources for smoking cessation.", severity: 'high' });
      } else {
        recommendations.push({ id: 'no_smoke', text: "Continue to avoid smoking to maintain good cardiovascular health.", severity: 'low' });
      }

      // Systolic BP factor
      if (data.systolicBP) {
        if (data.systolicBP > 160) {
          baseRisk += 6;
          heartAge += 8;
          recommendations.push({ id: 'bp_high', text: `Your blood pressure (${data.systolicBP} mmHg) is high. Consult your doctor for management strategies, which may include lifestyle changes and medication.`, severity: 'high' });
        } else if (data.systolicBP > 140) {
          baseRisk += 3;
          heartAge += 4;
          recommendations.push({ id: 'bp_elevated', text: `Your blood pressure (${data.systolicBP} mmHg) is elevated. Monitor regularly and discuss lifestyle modifications with your doctor.`, severity: 'medium' });
        } else {
           recommendations.push({ id: 'bp_normal', text: `Your blood pressure (${data.systolicBP} mmHg) is in a good range. Continue healthy habits.`, severity: 'low' });
        }
      }

      // Total Cholesterol factor
      if (data.totalCholesterol) {
        if (data.totalCholesterol > 240) {
          baseRisk += 5;
          heartAge += 6;
          recommendations.push({ id: 'chol_high', text: `Your total cholesterol (${data.totalCholesterol} mg/dL) is high. Discuss with your doctor about dietary changes, exercise, and potential medication.`, severity: 'high' });
        } else if (data.totalCholesterol > 200) {
          baseRisk += 2.5;
          heartAge += 3;
          recommendations.push({ id: 'chol_elevated', text: `Your total cholesterol (${data.totalCholesterol} mg/dL) is borderline high. Focus on a heart-healthy diet and regular exercise.`, severity: 'medium' });
        } else {
           recommendations.push({ id: 'chol_normal', text: `Your total cholesterol (${data.totalCholesterol} mg/dL) is in a good range. Maintain a healthy lifestyle.`, severity: 'low' });
        }
      }

      // Diabetes factor
      if (data.hasDiabetes) {
        baseRisk += 6;
        heartAge += 5;
        recommendations.push({ id: 'diabetes', text: "Managing diabetes effectively is crucial for cardiovascular health. Follow your doctor's advice on medication, diet, and blood sugar monitoring.", severity: 'high' });
      }
      
      // Family History factor
      if (data.hasFamilyHistoryCVD) {
        baseRisk += 2;
        heartAge += 1;
        recommendations.push({ id: 'family_history', text: "Your family history of CVD slightly increases your risk. Focus on modifiable risk factors like diet, exercise, and not smoking.", severity: 'medium' });
      }

      // General recommendations
      recommendations.push({ id: 'diet', text: "Adopt a heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins. Limit saturated/trans fats, sodium, and added sugars.", severity: 'medium' });
      recommendations.push({ id: 'exercise', text: "Engage in at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity exercise per week.", severity: 'medium' });
      recommendations.push({ id: 'stress', text: "Manage stress through techniques like mindfulness, yoga, or hobbies. Chronic stress can impact heart health.", severity: 'low' });
      recommendations.push({ id: 'checkups', text: "Regular medical check-ups are important for monitoring your health and discussing preventive strategies with your doctor.", severity: 'low' });


      let cvdRiskPercentage = Math.max(0, Math.min(100, baseRisk)); // Cap risk between 0 and 100
      heartAge = Math.max(data.age || 20, Math.round(heartAge)); // Heart age shouldn't be less than actual age (or a minimum like 20)

      let riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High' = 'Low';
      if (cvdRiskPercentage >= 20) riskLevel = 'Very High';
      else if (cvdRiskPercentage >= 10) riskLevel = 'High';
      else if (cvdRiskPercentage >= 5) riskLevel = 'Moderate';
      
      // Sort recommendations: high, then medium, then low
      recommendations.sort((a, b) => {
        const severityOrder = { high: 0, medium: 1, low: 2 };
        return severityOrder[a.severity] - severityOrder[b.severity];
      });


      resolve({
        cvdRiskPercentage,
        heartAge,
        riskLevel,
        recommendations,
      });
    }, 1000); // Simulate network delay
  });
};
