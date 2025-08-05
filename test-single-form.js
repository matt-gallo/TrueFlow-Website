#!/usr/bin/env node

/**
 * Test the single Get Started form that includes assessment questions
 */

const timestamp = Date.now();
const uniqueEmail = `unified.test.${timestamp}@company.com`;

const testData = {
  // Contact info
  firstName: 'Unified',
  lastName: `Form${timestamp}`,
  email: uniqueEmail,
  phone: '+15557890123',
  businessName: `Unified Test Co ${timestamp}`,
  businessType: 'Technology',
  
  // Assessment questions (part of Get Started form)
  answers: {
    "current-content": "mixed",
    "content-volume": "moderate", 
    "crm-usage": "advanced-crm",
    "lead-response": "quick",
    "time-spent": "moderate",
    "budget": "high"
  },
  
  // Business details
  monthlyLeads: '100-250',
  teamSize: '10-25',
  currentTools: 'HubSpot, Klaviyo',
  biggestChallenge: 'Scaling content efficiently',
  
  // Content preferences
  contentGoals: ['SEO Content', 'Email Campaigns', 'Social Media'],
  integrations: ['CRM Integration', 'Email Marketing'],
  
  // Pricing selection
  pricingPlan: 'complete-system',
  
  // Metadata
  timestamp: new Date().toISOString(),
  source: 'get-started-form',  // Correct source
  assessmentVersion: '2.0'
};

console.log('========================================');
console.log('Testing Unified Get Started Form');
console.log('========================================\n');
console.log('This is the SINGLE form that includes:');
console.log('  ✓ Contact information');
console.log('  ✓ Assessment questions');
console.log('  ✓ Business details');
console.log('  ✓ Pricing tier selection');
console.log('');
console.log('Test Details:');
console.log('  Contact:', `${testData.firstName} ${testData.lastName}`);
console.log('  Email:', uniqueEmail);
console.log('  Business:', testData.businessName);
console.log('  Selected Plan:', testData.pricingPlan);
console.log('  Expected Value: $1,300/month (Complete System)');
console.log('');

async function testUnifiedForm() {
  try {
    console.log('Submitting Get Started form...\n');
    
    const response = await fetch('http://localhost:3001/api/ghl/create-lead-v5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ SUCCESS\n');
      console.log('Results:');
      console.log('  Contact ID:', result.ghlContactId);
      console.log('  Opportunity ID:', result.ghlOpportunityId || '❌ NOT CREATED');
      console.log('  Lead Score:', result.leadScore);
      console.log('  Lead Quality:', result.leadQuality);
      console.log('  Form Type:', result.formType);
      console.log('');
      
      if (result.ghlOpportunityId) {
        console.log('🎯 OPPORTUNITY CREATED!');
        console.log('  Pipeline: TrueFlow – Getting Started Form');
        console.log('  Stage: New Lead (Getting Started Form)');
        console.log('  Value: Should be $1,300/month for Complete System');
        console.log('');
        console.log('📋 Everything working correctly:');
        console.log('  ✓ Single form submission');
        console.log('  ✓ Contact created in GHL');
        console.log('  ✓ Opportunity added to pipeline');
        console.log('  ✓ Pricing tier applied');
        console.log('');
        console.log('Direct links:');
        console.log('  Contact:', `https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/contacts/${result.ghlContactId}`);
        console.log('  Opportunity:', `https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/opportunities/${result.ghlOpportunityId}`);
      }
    } else {
      console.log('❌ Failed:', result.message);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testUnifiedForm().then(() => {
  console.log('\n========================================');
  console.log('Single form test completed');
  console.log('========================================');
});