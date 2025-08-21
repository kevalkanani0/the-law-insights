'use client';

import { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

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
        <label className="block text-white font-light text-xl mb-4">Your Status:</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setUserType('eu')}
            className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 ${
              userType === 'eu' 
                ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
            }`}
          >
            EU/EEA Student
          </button>
          <button
            onClick={() => setUserType('non-eu')}
            className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 ${
              userType === 'non-eu' 
                ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
            }`}
          >
            Non-EU Student
          </button>
        </div>
      </div>
      
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-white font-light text-lg mb-3">
            Hours per week during semester:
          </label>
          <input
            type="number"
            value={hoursPerWeek === 0 ? '' : hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value === '' ? 0 : Number(e.target.value))}
            min="0"
            max="40"
            placeholder="Enter hours"
            className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
          />
        </div>
        
        <div>
          <label className="block text-white font-light text-lg mb-3">
            Weeks in semester:
          </label>
          <input
            type="number"
            value={semesterWeeks === 0 ? '' : semesterWeeks}
            onChange={(e) => setSemesterWeeks(e.target.value === '' ? 0 : Number(e.target.value))}
            min="0"
            max="30"
            placeholder="Enter weeks"
            className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
          />
        </div>
        
        <div>
          <label className="block text-white font-light text-lg mb-3">
            Full vacation days worked:
          </label>
          <input
            type="number"
            value={vacationDays === 0 ? '' : vacationDays}
            onChange={(e) => setVacationDays(e.target.value === '' ? 0 : Number(e.target.value))}
            min="0"
            max="365"
            placeholder="Enter days"
            className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
          />
        </div>
      </div>
      
      {/* Results */}
      <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl font-light text-white mb-6">📊 Calculation Results</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Semester hours:</span>
              <span className="text-white font-light text-lg">{results.totalSemesterHours}h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Vacation hours:</span>
              <span className="text-white font-light text-lg">{results.totalVacationHours}h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Total yearly hours:</span>
              <span className="text-white font-light text-lg">{results.totalYearlyHours}h</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70 font-light">Weekly limit (≤20h):</span>
              <span className={`font-light ${results.weeklyLimitOk ? 'text-green-400' : 'text-red-400'}`}>
                {results.weeklyLimitOk ? '✅ OK' : '❌ Exceeded'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70 font-light">Yearly days (≤120):</span>
              <span className={`font-light ${results.yearlyDaysOk ? 'text-green-400' : 'text-red-400'}`}>
                {results.yearlyDaysOk ? '✅ OK' : '❌ Exceeded'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70 font-light">Half-day limit (≤240):</span>
              <span className={`font-light ${results.halfDayLimitOk ? 'text-green-400' : 'text-red-400'}`}>
                {results.halfDayLimitOk ? '✅ OK' : '❌ Exceeded'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Overall Status */}
        <div className={`mt-8 p-6 rounded-2xl text-center font-light text-lg ${
          results.isCompliant 
            ? 'backdrop-blur-md bg-green-400/20 border border-green-400/30 text-green-300' 
            : 'backdrop-blur-md bg-red-400/20 border border-red-400/30 text-red-300'
        }`}>
          {results.isCompliant 
            ? '✅ Your work schedule is compliant with German regulations!' 
            : '⚠️ Your work schedule exceeds German legal limits!'
          }
        </div>
        
        {/* Additional Info */}
        {userType === 'non-eu' && (
          <div className="mt-6 p-6 backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 rounded-2xl">
            <p className="text-yellow-200 font-light leading-relaxed">
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
        <label className="block text-white font-light text-xl mb-4">Employment Type:</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setEmploymentType('employee')}
            className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 ${
              employmentType === 'employee' 
                ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
            }`}
          >
            Employee
          </button>
          <button
            onClick={() => setEmploymentType('freelancer')}
            className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 ${
              employmentType === 'freelancer' 
                ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
            }`}
          >
            Freelancer/Self-employed
          </button>
        </div>
      </div>
      
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-white font-light text-lg mb-3">
            Annual Income (€):
          </label>
          <input
            type="number"
            value={annualIncome === 0 ? '' : annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value === '' ? 0 : Number(e.target.value))}
            min="0"
            max="500000"
            step="1000"
            placeholder="Enter income"
            className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
          />
        </div>
        
        {employmentType === 'employee' && (
          <div>
            <label className="block text-white font-light text-lg mb-3">
              Tax Class:
            </label>
            <select
              value={taxClass}
              onChange={(e) => setTaxClass(Number(e.target.value))}
              className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
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
          <label className="block text-white font-light text-lg mb-3">
            Church Tax:
          </label>
          <div className="flex items-center space-x-4 mt-3">
            <button
              onClick={() => setChurchTax(false)}
              className={`px-6 py-3 rounded-xl font-light transition-all duration-500 ${
                !churchTax 
                  ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                  : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
              }`}
            >
              No
            </button>
            <button
              onClick={() => setChurchTax(true)}
              className={`px-6 py-3 rounded-xl font-light transition-all duration-500 ${
                churchTax 
                  ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                  : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
              }`}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl font-light text-white mb-6">💰 Tax Calculation Results</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Gross Annual Income:</span>
              <span className="text-white font-light text-lg">€{annualIncome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Income Tax:</span>
              <span className="text-white font-light text-lg">€{results.incomeTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Solidarity Tax:</span>
              <span className="text-white font-light text-lg">€{results.solidarityTax.toLocaleString()}</span>
            </div>
            {churchTax && (
              <div className="flex justify-between">
                <span className="text-white/70 font-light">Church Tax:</span>
                <span className="text-white font-light text-lg">€{results.churchTaxAmount.toLocaleString()}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            {employmentType === 'employee' && (
              <div className="flex justify-between">
                <span className="text-white/70 font-light">Social Contributions:</span>
                <span className="text-white font-light text-lg">€{results.socialContributions.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Net Annual Income:</span>
              <span className="text-green-400 font-light text-xl">€{results.netIncome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Effective Tax Rate:</span>
              <span className="text-white font-light text-lg">{results.taxRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Monthly Net:</span>
              <span className="text-green-400 font-light text-lg">€{Math.round(results.netIncome / 12).toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 p-6 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl">
          <p className="text-white/70 font-light leading-relaxed">
            <strong className="text-white">Note:</strong> This is a simplified calculation for estimation purposes. 
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
        <label className="block text-white font-light text-xl mb-4">Business Status:</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setBusinessType('new')}
            className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 ${
              businessType === 'new' 
                ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
            }`}
          >
            New Business
          </button>
          <button
            onClick={() => setBusinessType('existing')}
            className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 ${
              businessType === 'existing' 
                ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400' 
                : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
            }`}
          >
            Existing Business
          </button>
        </div>
      </div>
      
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessType === 'existing' && (
          <div>
            <label className="block text-white font-light text-lg mb-3">
              Previous Year Revenue (€):
            </label>
            <input
              type="number"
              value={previousYearRevenue === 0 ? '' : previousYearRevenue}
              onChange={(e) => setPreviousYearRevenue(e.target.value === '' ? 0 : Number(e.target.value))}
              min="0"
              max="100000"
              step="1000"
              placeholder="Enter revenue"
              className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
            />
          </div>
        )}
        
        <div>
          <label className="block text-white font-light text-lg mb-3">
            Expected Current Year Revenue (€):
          </label>
          <input
            type="number"
            value={currentYearRevenue === 0 ? '' : currentYearRevenue}
            onChange={(e) => setCurrentYearRevenue(e.target.value === '' ? 0 : Number(e.target.value))}
            min="0"
            max="100000"
            step="1000"
            placeholder="Enter revenue"
            className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
          />
        </div>
        
        <div>
          <label className="block text-white font-light text-lg mb-3">
            VAT Rate (%):
          </label>
          <select
            value={vatRate}
            onChange={(e) => setVatRate(Number(e.target.value))}
            className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
          >
            <option value={19}>19% (Standard rate)</option>
            <option value={7}>7% (Reduced rate)</option>
          </select>
        </div>
      </div>
      
      {/* Results */}
      <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl">
        <h4 className="text-2xl font-light text-white mb-6">📊 Kleinunternehmer Eligibility</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Current Year Revenue:</span>
              <span className="text-white font-light text-lg">€{currentYearRevenue.toLocaleString()}</span>
            </div>
            {businessType === 'existing' && (
              <div className="flex justify-between">
                <span className="text-white/70 font-light">Previous Year Revenue:</span>
                <span className="text-white font-light text-lg">€{previousYearRevenue.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Revenue Buffer:</span>
              <span className="text-white font-light text-lg">€{results.revenueBuffer.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Annual VAT Savings:</span>
              <span className="text-green-400 font-light text-xl">€{results.vatSavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70 font-light">Monthly VAT Savings:</span>
              <span className="text-green-400 font-light text-lg">€{results.vatSavingsMonthly.toLocaleString()}</span>
            </div>
            {results.monthsUntilLimit < 12 && (
              <div className="flex justify-between">
                <span className="text-white/70 font-light">Months until limit:</span>
                <span className="text-yellow-400 font-light text-lg">{results.monthsUntilLimit}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Eligibility Status */}
        <div className={`mt-8 p-6 rounded-2xl text-center font-light text-lg ${
          results.isEligible 
            ? 'backdrop-blur-md bg-green-400/20 border border-green-400/30 text-green-300' 
            : 'backdrop-blur-md bg-red-400/20 border border-red-400/30 text-red-300'
        }`}>
          {results.isEligible 
            ? '✅ You qualify for Kleinunternehmerregelung!' 
            : '❌ You do not qualify for Kleinunternehmerregelung'
          }
        </div>
        
        {/* Detailed Breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl ${results.previousYearOk ? 'backdrop-blur-md bg-green-400/10 border border-green-400/20' : 'backdrop-blur-md bg-red-400/10 border border-red-400/20'}`}>
            <div className="flex items-center space-x-3">
              <span className={results.previousYearOk ? 'text-green-400' : 'text-red-400'}>
                {results.previousYearOk ? '✅' : '❌'}
              </span>
              <span className="text-white font-light text-lg">Previous Year Limit</span>
            </div>
            <p className="text-white/70 font-light leading-relaxed mt-2">
              {businessType === 'new' ? 'New business - automatically passed' : `≤ €22,000 (you: €${previousYearRevenue.toLocaleString()})`}
            </p>
          </div>
          
          <div className={`p-6 rounded-2xl ${results.currentYearOk ? 'backdrop-blur-md bg-green-400/10 border border-green-400/20' : 'backdrop-blur-md bg-red-400/10 border border-red-400/20'}`}>
            <div className="flex items-center space-x-3">
              <span className={results.currentYearOk ? 'text-green-400' : 'text-red-400'}>
                {results.currentYearOk ? '✅' : '❌'}
              </span>
              <span className="text-white font-light text-lg">Current Year Limit</span>
            </div>
            <p className="text-white/70 font-light leading-relaxed mt-2">
              ≤ €50,000 (you: €{currentYearRevenue.toLocaleString()})
            </p>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 p-6 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl">
          <p className="text-white/70 font-light leading-relaxed">
            <strong className="text-white">What is Kleinunternehmerregelung?</strong> Small business owners can opt out of charging VAT 
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
  const calculatorRef = useRef<HTMLDivElement>(null);

  const handleCalculatorSelect = (calculatorType: string) => {
    setActiveCalculator(calculatorType);
    
    // Smooth scroll to calculator on mobile after a short delay
    setTimeout(() => {
      if (calculatorRef.current) {
        calculatorRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  // Auto-scroll when calculator changes
  useEffect(() => {
    if (activeCalculator && calculatorRef.current) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setTimeout(() => {
          calculatorRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [activeCalculator]);

  return (
    <div className="min-h-screen bg-black text-white overflow-auto scroll-smooth">
      <Navigation />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
      
      {/* Ambient lighting effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 pt-28 md:pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-white leading-tight tracking-tight mb-6">
            Calculators
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto">
            Calculate work hours, tax estimates, and business requirements for Germany
          </p>
        </div>

        {/* Calculator Cards - Better desktop layout */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
          activeCalculator ? 'md:mb-8' : 'mb-16'
        }`}>
          {/* Student Work Hours Calculator */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => handleCalculatorSelect('work-hours')}
          >
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:transform hover:scale-[1.02]">
              <div className="text-5xl md:text-6xl mb-6">⏰</div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">Work Hours</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Calculate if your student work schedule complies with German regulations
              </p>
              <div className="inline-flex items-center text-yellow-400 font-light">
                Calculate →
              </div>
            </div>
          </div>

          {/* Tax Calculator */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => handleCalculatorSelect('tax-estimate')}
          >
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:transform hover:scale-[1.02]">
              <div className="text-5xl md:text-6xl mb-6">💰</div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">Tax Estimate</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Estimate your income tax and social contributions in Germany
              </p>
              <div className="inline-flex items-center text-yellow-400 font-light">
                Calculate →
              </div>
            </div>
          </div>

          {/* Kleinunternehmer Calculator */}
          <div 
            className="group relative cursor-pointer"
            onClick={() => handleCalculatorSelect('kleinunternehmer')}
          >
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:transform hover:scale-[1.02]">
              <div className="text-5xl md:text-6xl mb-6">📊</div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-4">Kleinunternehmer</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Check if you qualify for small business VAT exemption
              </p>
              <div className="inline-flex items-center text-yellow-400 font-light">
                Calculate →
              </div>
            </div>
          </div>
        </div>

        {/* Active Calculator Display - Fixed desktop layout */}
        {activeCalculator && (
          <div ref={calculatorRef} className="relative">
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 md:p-12 shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">
                  {activeCalculator === 'work-hours' && 'Student Work Hours Calculator'}
                  {activeCalculator === 'tax-estimate' && 'Tax Estimation Calculator'}
                  {activeCalculator === 'kleinunternehmer' && 'Kleinunternehmer Eligibility'}
                </h3>
                <div className="flex gap-3">
                  {/* Back to all calculators button - mobile only */}
                  <button 
                    onClick={() => setActiveCalculator(null)}
                    className="md:hidden backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 rounded-xl font-light hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-500 px-4 py-2 text-sm"
                  >
                    ← All Calculators
                  </button>
                  {/* Close button */}
                  <button 
                    onClick={() => setActiveCalculator(null)}
                    className="backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 rounded-xl font-light hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-500 w-10 h-10 flex items-center justify-center text-xl"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              {/* Student Work Hours Calculator */}
              {activeCalculator === 'work-hours' && (
                <StudentWorkHoursCalculator />
              )}
              
              {/* Tax Calculator */}
              {activeCalculator === 'tax-estimate' && (
                <TaxEstimationCalculator />
              )}
              
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