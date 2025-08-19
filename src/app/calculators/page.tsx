'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

// Student Work Hours Calculator Component
function StudentWorkHoursCalculator() {
  const [userType, setUserType] = useState<'eu' | 'non-eu'>('eu');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(20);
  const [semesterWeeks, setSemesterWeeks] = useState<number>(20);
  const [vacationDays, setVacationDays] = useState<number>(0);
  
  const calculateCompliance = () => {
    const totalSemesterHours = hoursPerWeek * semesterWeeks;
    const totalVacationHours = vacationDays * 8;
    const totalYearlyHours = totalSemesterHours + totalVacationHours;
    
    const weeklyLimitOk = hoursPerWeek <= 20;
    const yearlyDaysOk = vacationDays <= 120;
    const halfDaysUsed = Math.ceil(totalSemesterHours / 4);
    const halfDayLimitOk = (halfDaysUsed + vacationDays) <= 240;
    
    const isCompliant = weeklyLimitOk && yearlyDaysOk && halfDayLimitOk;
    
    return {
      totalSemesterHours,
      totalVacationHours,
      totalYearlyHours,
      weeklyLimitOk,
      yearlyDaysOk,
      halfDaysUsed,
      halfDayLimitOk,
      isCompliant
    };
  };
  
  const results = calculateCompliance();
  
  return (
    <div className="space-y-8">
      {/* User Type Selection */}
      <div>
        <label className="block text-white font-semibold mb-4">Your Status:</label>
        <div className="flex gap-4">
          <button
            onClick={() => setUserType('eu')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              userType === 'eu' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            EU/EEA Student
          </button>
          <button
            onClick={() => setUserType('non-eu')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              userType === 'non-eu' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Non-EU Student
          </button>
        </div>
      </div>
      
      {/* Input Fields */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">
            Hours per week during semester:
          </label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            min="0"
            max="40"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div>
          <label className="block text-white font-semibold mb-2">
            Weeks in semester:
          </label>
          <input
            type="number"
            value={semesterWeeks}
            onChange={(e) => setSemesterWeeks(Number(e.target.value))}
            min="0"
            max="30"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div>
          <label className="block text-white font-semibold mb-2">
            Full vacation days worked:
          </label>
          <input
            type="number"
            value={vacationDays}
            onChange={(e) => setVacationDays(Number(e.target.value))}
            min="0"
            max="365"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      
      {/* Results */}
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-bold text-white mb-4">📊 Calculation Results</h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Semester hours:</span>
              <span className="text-white font-semibold">{results.totalSemesterHours}h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Vacation hours:</span>
              <span className="text-white font-semibold">{results.totalVacationHours}h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Total yearly hours:</span>
              <span className="text-white font-semibold">{results.totalYearlyHours}h</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Weekly limit (≤20h):</span>
              <span className={`font-semibold ${results.weeklyLimitOk ? 'text-green-400' : 'text-red-400'}`}>
                {results.weeklyLimitOk ? '✅ OK' : '❌ Exceeded'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Yearly days (≤120):</span>
              <span className={`font-semibold ${results.yearlyDaysOk ? 'text-green-400' : 'text-red-400'}`}>
                {results.yearlyDaysOk ? '✅ OK' : '❌ Exceeded'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Half-day limit (≤240):</span>
              <span className={`font-semibold ${results.halfDayLimitOk ? 'text-green-400' : 'text-red-400'}`}>
                {results.halfDayLimitOk ? '✅ OK' : '❌ Exceeded'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Overall Status */}
        <div className={`mt-6 p-4 rounded-xl text-center font-bold text-lg ${
          results.isCompliant 
            ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
            : 'bg-red-500/20 border border-red-500/30 text-red-300'
        }`}>
          {results.isCompliant 
            ? '✅ Your work schedule is compliant with German regulations!' 
            : '⚠️ Your work schedule exceeds German legal limits!'
          }
        </div>
        
        {/* Additional Info */}
        {userType === 'non-eu' && (
          <div className="mt-4 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
            <p className="text-yellow-200 text-sm">
              <strong>Note for Non-EU students:</strong> Additional work restrictions may apply based on your visa type. 
              Always check with Ausländerbehörde for your specific situation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Tax Estimation Calculator Component
function TaxEstimationCalculator() {
  const [annualIncome, setAnnualIncome] = useState<number>(30000);
  const [taxClass, setTaxClass] = useState<number>(1);
  const [employmentType, setEmploymentType] = useState<'employee' | 'freelancer'>('employee');
  const [churchTax, setChurchTax] = useState<boolean>(false);
  
  const calculateTax = () => {
    // Simplified German tax calculation (2024 rates)
    let taxableIncome = annualIncome;
    
    // Basic allowance (Grundfreibetrag)
    const basicAllowance = 11604; // 2024 rate
    if (taxableIncome <= basicAllowance) {
      return {
        taxableIncome: 0,
        incomeTax: 0,
        solidarityTax: 0,
        churchTaxAmount: 0,
        socialContributions: 0,
        netIncome: annualIncome,
        taxRate: 0
      };
    }
    
    taxableIncome -= basicAllowance;
    
    // Progressive income tax calculation (simplified)
    let incomeTax = 0;
    if (taxableIncome <= 17005) {
      // 14% to 24% zone
      incomeTax = (taxableIncome * 0.14) + (taxableIncome * 0.1 * (taxableIncome / 17005));
    } else if (taxableIncome <= 66760) {
      // 24% to 42% zone
      incomeTax = 2397 + (taxableIncome - 17005) * 0.24 + ((taxableIncome - 17005) * 0.18 * ((taxableIncome - 17005) / 49755));
    } else {
      // 42% zone
      incomeTax = 2397 + 49755 * 0.33 + (taxableIncome - 66760) * 0.42;
    }
    
    // Solidarity tax (5.5% of income tax, if income tax > 972€)
    const solidarityTax = incomeTax > 972 ? incomeTax * 0.055 : 0;
    
    // Church tax (8% or 9% of income tax, depending on state)
    const churchTaxAmount = churchTax ? incomeTax * 0.09 : 0;
    
    // Social contributions (approximate, only for employees)
    let socialContributions = 0;
    if (employmentType === 'employee') {
      const pensionContrib = Math.min(annualIncome * 0.093, 87600 * 0.093); // 9.3% up to ceiling
      const unemploymentContrib = Math.min(annualIncome * 0.012, 87600 * 0.012); // 1.2%
      const healthContrib = Math.min(annualIncome * 0.073, 59850 * 0.073); // 7.3%
      const careContrib = Math.min(annualIncome * 0.01525, 59850 * 0.01525); // 1.525%
      socialContributions = pensionContrib + unemploymentContrib + healthContrib + careContrib;
    }
    
    const totalTax = incomeTax + solidarityTax + churchTaxAmount + socialContributions;
    const netIncome = annualIncome - totalTax;
    const taxRate = (totalTax / annualIncome) * 100;
    
    return {
      taxableIncome,
      incomeTax: Math.round(incomeTax),
      solidarityTax: Math.round(solidarityTax),
      churchTaxAmount: Math.round(churchTaxAmount),
      socialContributions: Math.round(socialContributions),
      netIncome: Math.round(netIncome),
      taxRate: Math.round(taxRate * 100) / 100
    };
  };
  
  const results = calculateTax();
  
  return (
    <div className="space-y-8">
      {/* Employment Type Selection */}
      <div>
        <label className="block text-white font-semibold mb-4">Employment Type:</label>
        <div className="flex gap-4">
          <button
            onClick={() => setEmploymentType('employee')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              employmentType === 'employee' 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Employee
          </button>
          <button
            onClick={() => setEmploymentType('freelancer')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              employmentType === 'freelancer' 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Freelancer/Self-employed
          </button>
        </div>
      </div>
      
      {/* Input Fields */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">
            Annual Income (€):
          </label>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(Number(e.target.value))}
            min="0"
            max="500000"
            step="1000"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        
        {employmentType === 'employee' && (
          <div>
            <label className="block text-white font-semibold mb-2">
              Tax Class:
            </label>
            <select
              value={taxClass}
              onChange={(e) => setTaxClass(Number(e.target.value))}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value={1}>Class I (Single)</option>
              <option value={2}>Class II (Single parent)</option>
              <option value={3}>Class III (Married, higher earner)</option>
              <option value={4}>Class IV (Married, equal earners)</option>
              <option value={5}>Class V (Married, lower earner)</option>
              <option value={6}>Class VI (Second job)</option>
            </select>
          </div>
        )}
        
        <div>
          <label className="block text-white font-semibold mb-2">
            Church Tax:
          </label>
          <div className="flex items-center space-x-4 mt-3">
            <button
              onClick={() => setChurchTax(false)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                !churchTax 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              No
            </button>
            <button
              onClick={() => setChurchTax(true)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                churchTax 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-bold text-white mb-4">💰 Tax Calculation Results</h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Gross Annual Income:</span>
              <span className="text-white font-semibold">€{annualIncome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Income Tax:</span>
              <span className="text-white font-semibold">€{results.incomeTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Solidarity Tax:</span>
              <span className="text-white font-semibold">€{results.solidarityTax.toLocaleString()}</span>
            </div>
            {churchTax && (
              <div className="flex justify-between">
                <span className="text-gray-300">Church Tax:</span>
                <span className="text-white font-semibold">€{results.churchTaxAmount.toLocaleString()}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            {employmentType === 'employee' && (
              <div className="flex justify-between">
                <span className="text-gray-300">Social Contributions:</span>
                <span className="text-white font-semibold">€{results.socialContributions.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-300">Net Annual Income:</span>
              <span className="text-green-400 font-bold text-lg">€{results.netIncome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Effective Tax Rate:</span>
              <span className="text-white font-semibold">{results.taxRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Monthly Net:</span>
              <span className="text-green-400 font-bold">€{Math.round(results.netIncome / 12).toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl">
          <p className="text-blue-200 text-sm">
            <strong>Note:</strong> This is a simplified calculation for estimation purposes. 
            Actual tax amounts may vary based on deductions, allowances, and other factors. 
            Consult a tax advisor for precise calculations.
          </p>
        </div>
      </div>
    </div>
  );
}

// Kleinunternehmer Eligibility Calculator Component
function KleinunternehmerCalculator() {
  const [currentYearRevenue, setCurrentYearRevenue] = useState<number>(15000);
  const [previousYearRevenue, setPreviousYearRevenue] = useState<number>(12000);
  const [businessType, setBusinessType] = useState<'new' | 'existing'>('new');
  const [vatRate, setVatRate] = useState<number>(19);
  
  const calculateEligibility = () => {
    // Kleinunternehmer thresholds for 2024
    const previousYearLimit = 22000; // €22,000 for previous year
    const currentYearLimit = 50000;  // €50,000 for current year
    
    const previousYearOk = businessType === 'new' || previousYearRevenue <= previousYearLimit;
    const currentYearOk = currentYearRevenue <= currentYearLimit;
    const isEligible = previousYearOk && currentYearOk;
    
    // Calculate potential VAT savings
    const vatSavings = currentYearRevenue * (vatRate / 100);
    const vatSavingsMonthly = vatSavings / 12;
    
    // Calculate when they would exceed the limit
    const monthsUntilLimit = currentYearRevenue > 0 ? (currentYearLimit / currentYearRevenue) * 12 : 12;
    
    return {
      isEligible,
      previousYearOk,
      currentYearOk,
      vatSavings: Math.round(vatSavings),
      vatSavingsMonthly: Math.round(vatSavingsMonthly),
      monthsUntilLimit: Math.round(monthsUntilLimit * 10) / 10,
      revenueBuffer: currentYearLimit - currentYearRevenue
    };
  };
  
  const results = calculateEligibility();
  
  return (
    <div className="space-y-8">
      {/* Business Type Selection */}
      <div>
        <label className="block text-white font-semibold mb-4">Business Status:</label>
        <div className="flex gap-4">
          <button
            onClick={() => setBusinessType('new')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              businessType === 'new' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            New Business
          </button>
          <button
            onClick={() => setBusinessType('existing')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              businessType === 'existing' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Existing Business
          </button>
        </div>
      </div>
      
      {/* Input Fields */}
      <div className="grid md:grid-cols-3 gap-6">
        {businessType === 'existing' && (
          <div>
            <label className="block text-white font-semibold mb-2">
              Previous Year Revenue (€):
            </label>
            <input
              type="number"
              value={previousYearRevenue}
              onChange={(e) => setPreviousYearRevenue(Number(e.target.value))}
              min="0"
              max="100000"
              step="1000"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        )}
        
        <div>
          <label className="block text-white font-semibold mb-2">
            Expected Current Year Revenue (€):
          </label>
          <input
            type="number"
            value={currentYearRevenue}
            onChange={(e) => setCurrentYearRevenue(Number(e.target.value))}
            min="0"
            max="100000"
            step="1000"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        
        <div>
          <label className="block text-white font-semibold mb-2">
            VAT Rate (%):
          </label>
          <select
            value={vatRate}
            onChange={(e) => setVatRate(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value={19}>19% (Standard rate)</option>
            <option value={7}>7% (Reduced rate)</option>
          </select>
        </div>
      </div>
      
      {/* Results */}
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-xl font-bold text-white mb-4">📊 Kleinunternehmer Eligibility</h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Current Year Revenue:</span>
              <span className="text-white font-semibold">€{currentYearRevenue.toLocaleString()}</span>
            </div>
            {businessType === 'existing' && (
              <div className="flex justify-between">
                <span className="text-gray-300">Previous Year Revenue:</span>
                <span className="text-white font-semibold">€{previousYearRevenue.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-300">Revenue Buffer:</span>
              <span className="text-white font-semibold">€{results.revenueBuffer.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-300">Annual VAT Savings:</span>
              <span className="text-green-400 font-bold">€{results.vatSavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Monthly VAT Savings:</span>
              <span className="text-green-400 font-bold">€{results.vatSavingsMonthly.toLocaleString()}</span>
            </div>
            {results.monthsUntilLimit < 12 && (
              <div className="flex justify-between">
                <span className="text-gray-300">Months until limit:</span>
                <span className="text-yellow-400 font-semibold">{results.monthsUntilLimit}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Eligibility Status */}
        <div className={`mt-6 p-4 rounded-xl text-center font-bold text-lg ${
          results.isEligible 
            ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
            : 'bg-red-500/20 border border-red-500/30 text-red-300'
        }`}>
          {results.isEligible 
            ? '✅ You qualify for Kleinunternehmerregelung!' 
            : '❌ You do not qualify for Kleinunternehmerregelung'
          }
        </div>
        
        {/* Detailed Breakdown */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${results.previousYearOk ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
            <div className="flex items-center space-x-2">
              <span className={results.previousYearOk ? 'text-green-400' : 'text-red-400'}>
                {results.previousYearOk ? '✅' : '❌'}
              </span>
              <span className="text-white font-semibold">Previous Year Limit</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">
              {businessType === 'new' ? 'New business - automatically passed' : `≤ €22,000 (you: €${previousYearRevenue.toLocaleString()})`}
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${results.currentYearOk ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
            <div className="flex items-center space-x-2">
              <span className={results.currentYearOk ? 'text-green-400' : 'text-red-400'}>
                {results.currentYearOk ? '✅' : '❌'}
              </span>
              <span className="text-white font-semibold">Current Year Limit</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">
              ≤ €50,000 (you: €{currentYearRevenue.toLocaleString()})
            </p>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl">
          <p className="text-blue-200 text-sm">
            <strong>What is Kleinunternehmerregelung?</strong> Small business owners can opt out of charging VAT 
            if their revenue stays below €22,000 (previous year) and €50,000 (current year). 
            This simplifies accounting but means you cannot deduct input VAT.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Calculators
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate work hours, tax estimates, and business requirements for Germany
          </p>
        </div>

        {/* Calculator Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Student Work Hours Calculator */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => setActiveCalculator('work-hours')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl">
              <div className="text-6xl mb-6">⏰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Work Hours</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Calculate if your student work schedule complies with German regulations
              </p>
              <div className="inline-flex items-center text-blue-400 font-semibold">
                Calculate →
              </div>
            </div>
          </div>

          {/* Tax Calculator */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => setActiveCalculator('tax-estimate')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tax Estimate</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Estimate your income tax and social contributions in Germany
              </p>
              <div className="inline-flex items-center text-purple-400 font-semibold">
                Calculate →
              </div>
            </div>
          </div>

          {/* Kleinunternehmer Calculator */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => setActiveCalculator('kleinunternehmer')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
            <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Kleinunternehmer</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Check if you qualify for small business VAT exemption
              </p>
              <div className="inline-flex items-center text-orange-400 font-semibold">
                Calculate →
              </div>
            </div>
          </div>
        </div>

        {/* Active Calculator Display */}
        {activeCalculator && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {activeCalculator === 'work-hours' && 'Student Work Hours Calculator'}
                  {activeCalculator === 'tax-estimate' && 'Tax Estimation Calculator'}
                  {activeCalculator === 'kleinunternehmer' && 'Kleinunternehmer Eligibility'}
                </h3>
                <button 
                  onClick={() => setActiveCalculator(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              
              {/* Student Work Hours Calculator */}
              {activeCalculator === 'work-hours' && (
                <StudentWorkHoursCalculator />
              )}
              
              {/* Tax Calculator */}
              {/* Tax Calculator */}
              {activeCalculator === 'tax-estimate' && (
                <TaxEstimationCalculator />
              )}
              
              {/* Kleinunternehmer Calculator */}
              {/* Kleinunternehmer Calculator */}
              {activeCalculator === 'kleinunternehmer' && (
                <KleinunternehmerCalculator />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}