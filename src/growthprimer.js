import React, { useState } from 'react';
import { Building2, Users, TrendingUp, DollarSign, BarChart3, AlertCircle, ChevronRight, FileText } from 'lucide-react';

const GrowthPrimer = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);

  const sections = [
    {
      id: 'business_snapshot',
      title: 'Business Snapshot',
      icon: Building2,
      questions: [
        {
          id: 'business_type',
          question: 'What type of business do you run?',
          type: 'select',
          options: ['Restaurant/Café', 'Retail Shop', 'Professional Service', 'Healthcare/Wellness', 'Home Service', 'Other']
        },
        {
          id: 'years_operating',
          question: 'How long have you been in business?',
          type: 'select',
          options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', 'Over 10 years']
        },
        {
          id: 'revenue_band',
          question: 'What\'s your approximate annual revenue?',
          type: 'select',
          options: ['Under $100k', '$100k-250k', '$250k-500k', '$500k-1M', 'Over $1M', 'Prefer not to say']
        },
        {
          id: 'main_goal',
          question: 'What\'s your #1 business goal for the next 6 months?',
          type: 'select',
          options: ['Get more customers', 'Increase repeat business', 'Raise prices', 'Reduce costs', 'Expand locations/services']
        }
      ]
    },
    {
      id: 'customer_acquisition',
      title: 'Customer Acquisition',
      icon: Users,
      questions: [
        {
          id: 'customer_source',
          question: 'Where do most new customers find you?',
          type: 'select',
          options: ['Word of mouth', 'Google search', 'Social media', 'Walk by/Drive by', 'Referral partners', 'Not sure']
        },
        {
          id: 'track_sources',
          question: 'Do you ask new customers how they heard about you?',
          type: 'select',
          options: ['Always', 'Sometimes', 'Rarely', 'Never']
        },
        {
          id: 'monthly_new_customers',
          question: 'Roughly how many NEW customers/clients do you get per month?',
          type: 'select',
          options: ['Under 10', '10-25', '25-50', '50-100', '100-250', 'Over 250', 'Not sure']
        }
      ]
    },
    {
      id: 'conversion_booking',
      title: 'Conversion & Booking',
      icon: TrendingUp,
      questions: [
        {
          id: 'has_website',
          question: 'Do you have a website?',
          type: 'select',
          options: ['Yes, and I update it regularly', 'Yes, but it\'s outdated', 'No, just social media', 'No online presence']
        },
        {
          id: 'website_visitors',
          question: 'If you have a website, roughly how many people visit per month?',
          type: 'select',
          options: ['Under 100', '100-500', '500-1000', '1000-5000', 'Over 5000', 'No idea']
        },
        {
          id: 'inquiry_tracking',
          question: 'How many inquiries (calls/emails/DMs) turn into actual sales?',
          type: 'select',
          options: ['Over 75%', '50-75%', '25-50%', 'Under 25%', 'I don\'t track this']
        },
        {
          id: 'email_list',
          question: 'Do you have an email list?',
          type: 'select',
          options: ['Yes, over 500 contacts', 'Yes, 100-500 contacts', 'Yes, under 100', 'No email list']
        }
      ]
    },
    {
      id: 'repeat_retention',
      title: 'Repeat Business',
      icon: Users,
      questions: [
        {
          id: 'repeat_rate',
          question: 'What percentage of customers come back within 3 months?',
          type: 'select',
          options: ['Over 60%', '40-60%', '20-40%', 'Under 20%', 'Not sure']
        },
        {
          id: 'loyalty_program',
          question: 'Do you have any loyalty or rewards program?',
          type: 'select',
          options: ['Yes, formal program', 'Informal (remember regulars)', 'No, but considering it', 'No, not relevant']
        },
        {
          id: 'customer_feedback',
          question: 'How do you collect customer feedback?',
          type: 'select',
          options: ['Systematic surveys', 'Online reviews only', 'Casual conversations', 'Don\'t actively collect']
        }
      ]
    },
    {
      id: 'revenue_seasonality',
      title: 'Revenue & Seasonality',
      icon: DollarSign,
      questions: [
        {
          id: 'average_transaction',
          question: 'What\'s your average sale/ticket/job value?',
          type: 'select',
          options: ['Under $25', '$25-50', '$50-100', '$100-250', '$250-500', 'Over $500']
        },
        {
          id: 'busy_season',
          question: 'When are you typically busiest?',
          type: 'select',
          options: ['Summer', 'Winter', 'Spring/Fall', 'Holidays only', 'Steady year-round', 'Unpredictable']
        },
        {
          id: 'capacity_issue',
          question: 'Do you ever turn away business due to capacity?',
          type: 'select',
          options: ['Often', 'Sometimes', 'Rarely', 'Never', 'Only in peak season']
        }
      ]
    },
    {
      id: 'pain_points',
      title: 'Your Top Challenges',
      icon: AlertCircle,
      questions: [
        {
          id: 'biggest_challenge',
          question: 'What\'s your #1 business challenge right now?',
          type: 'select',
          options: [
            'Not enough customers',
            'Customers don\'t return',
            'Can\'t raise prices',
            'Staff issues',
            'Cash flow',
            'Too much competition',
            'Marketing doesn\'t work',
            'No time to grow'
          ]
        },
        {
          id: 'second_challenge',
          question: 'What\'s your #2 challenge?',
          type: 'select',
          options: [
            'Not enough customers',
            'Customers don\'t return',
            'Can\'t raise prices',
            'Staff issues',
            'Cash flow',
            'Too much competition',
            'Marketing doesn\'t work',
            'No time to grow'
          ]
        },
        {
          id: 'data_confidence',
          question: 'How confident are you in your business numbers?',
          type: 'select',
          options: [
            'Very - I track everything',
            'Somewhat - I know the basics',
            'Not very - lots of guesswork',
            'Not at all - flying blind'
          ]
        }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const isCurrentSectionComplete = () => {
    const currentQuestions = sections[currentSection].questions;
    return currentQuestions.every(q => answers[q.id]);
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      generateReport();
    }
  };

  const generateReport = () => {
    setShowReport(true);
  };

  const getInsights = () => {
    const insights = [];

    // Customer Acquisition Insight
    if (answers.track_sources === 'Never' || answers.track_sources === 'Rarely') {
      insights.push({
        type: 'critical',
        title: 'Flying Blind on Marketing',
        description: 'You\'re likely wasting money on marketing that doesn\'t work. Start asking every customer: "How did you hear about us?"',
        action: 'Add this question to your checkout process TODAY'
      });
    }

    // Repeat Business Insight
    if (answers.repeat_rate === 'Under 20%' || answers.repeat_rate === 'Not sure') {
      insights.push({
        type: 'critical',
        title: 'The Leaky Bucket Problem',
        description: 'You\'re working 5x harder because customers don\'t return. It costs 5x more to get a new customer than keep an existing one.',
        action: 'Start a simple email list or loyalty card program'
      });
    }

    // Conversion Insight
    if (answers.inquiry_tracking === 'I don\'t track this') {
      insights.push({
        type: 'warning',
        title: 'Mystery Conversion Rate',
        description: 'You could be losing 50% of potential sales and not know it. Track inquiries for just one week to see.',
        action: 'Create a simple tally sheet: Inquiries vs Sales'
      });
    }

    // Capacity Insight
    if (answers.capacity_issue === 'Often' && answers.average_transaction) {
      insights.push({
        type: 'opportunity',
        title: 'Hidden Pricing Power',
        description: 'Turning away business means you\'re underpriced. You could raise prices 15-20% without losing customers.',
        action: 'Test a 10% price increase on new customers only'
      });
    }

    return insights;
  };

  if (showReport) {
    const insights = getInsights();
    
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-blue-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">Your Growth Baseline Report</h1>
            </div>

            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900">
                Based on your answers, here are your immediate growth opportunities:
              </p>
            </div>

            <div className="space-y-6">
              {insights.map((insight, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-lg border-2 ${
                    insight.type === 'critical' 
                      ? 'bg-red-50 border-red-300' 
                      : insight.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-300'
                      : 'bg-green-50 border-green-300'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                  <p className="text-gray-700 mb-3">{insight.description}</p>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-sm">Next Step:</span>
                    <span className="text-sm">{insight.action}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Your Data Collection Priority</h3>
              <p className="text-gray-700 mb-4">
                Start tracking just ONE thing this week: <strong>How new customers find you</strong>
              </p>
              <p className="text-sm text-gray-600">
                This single data point will show you where to focus your marketing budget.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-3">Ready for Your Full Growth Diagnostic?</h3>
              <p className="mb-4">
                This baseline report shows just the tip of the iceberg. Get your complete Growth Intelligence analysis to uncover all hidden revenue opportunities.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Full Diagnostic →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentSectionData = sections[currentSection];
  const Icon = currentSectionData.icon;
  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Growth Primer</h1>
            <span className="text-sm text-gray-500">
              Section {currentSection + 1} of {sections.length}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Section Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Icon className="text-blue-600" size={28} />
            <h2 className="text-2xl font-semibold text-gray-900">{currentSectionData.title}</h2>
          </div>

          <div className="space-y-6">
            {currentSectionData.questions.map((question) => (
              <div key={question.id} className="space-y-3">
                <label className="block text-lg font-medium text-gray-900">
                  {question.question}
                </label>
                
                {question.type === 'select' && (
                  <div className="grid gap-2">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(question.id, option)}
                        className={`text-left p-4 rounded-lg border-2 transition-all ${
                          answers[question.id] === option
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              className={`px-6 py-3 rounded-lg font-medium ${
                currentSection === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={currentSection === 0}
            >
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isCurrentSectionComplete()}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${
                isCurrentSectionComplete()
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentSection === sections.length - 1 ? 'Get Report' : 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Takes just 7 minutes • No email required • Instant insights</p>
        </div>
      </div>
    </div>
  );
};

export default GrowthPrimer;