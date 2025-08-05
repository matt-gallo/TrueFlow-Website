#!/usr/bin/env node

/**
 * Test a single pricing tier with detailed logging
 */

const timestamp = Date.now();
const uniqueEmail = `pricing.test.${timestamp}@company.com`;

const testData = {
  firstName: 'Pricing',
  lastName: `Test${timestamp}`,
  email: uniqueEmail,
  phone: '+15559876543',
  businessName: `Pricing Test Company ${timestamp}`,
  businessType: 'E-commerce',
  contentGoals: ['SEO Content', 'Blog Content', 'Email Campaigns'],
  integrations: ['CRM Integration', 'Email Marketing'],
  
  // IMPORTANT: This is the pricing plan field
  pricingPlan: 'complete-system',  // Testing Complete System tier ($300/week = $1300/month)
  
  monthlyLeads: '100-250',
  teamSize: '10-25',
  currentTools: 'Salesforce, Mailchimp, Hootsuite',
  biggestChallenge: 'Scaling content production efficiently',
  
  timestamp: new Date().toISOString(),
  source: 'get-started-form',
  formType: 'get-started'
};

console.log('========================================');
console.log('Testing Pricing Tier: COMPLETE SYSTEM');
console.log('========================================\n');
console.log('Test Details:');
console.log('  Contact:', `${testData.firstName} ${testData.lastName}`);
console.log('  Email:', uniqueEmail);
console.log('  Business:', testData.businessName);
console.log('  Selected Plan:', testData.pricingPlan);
console.log('  Expected Monthly Value: $1,300');
console.log('');

async function testPricing() {
  try {
    console.log('Submitting form with pricing plan:', testData.pricingPlan);
    console.log('');
    
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
      console.log('  Opportunity ID:', result.ghlOpportunityId || 'Not created');
      console.log('  Lead Score:', result.leadScore);
      console.log('  Lead Quality:', result.leadQuality);
      console.log('');
      
      if (result.ghlOpportunityId) {
        console.log('🎯 Opportunity Created!');
        console.log('  Expected: Complete System tier at $1,300/month');
        console.log('  The opportunity name should include "(Complete System)"');
        console.log('');
        console.log('📋 Verify in GoHighLevel:');
        console.log('  1. Go to Opportunities → TrueFlow – Getting Started Form');
        console.log('  2. Find the opportunity in "New Lead (Getting Started Form)" stage');
        console.log('  3. Check the monetary value is $1,300');
        console.log('');
        console.log('Direct link:');
        console.log(`https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/opportunities/${result.ghlOpportunityId}`);
      } else {
        console.log('⚠️ No opportunity created - check server logs for details');
      }
    } else {
      console.log('❌ Failed:', result.message);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testPricing().then(() => {
  console.log('\n========================================');
  console.log('Test completed');
  console.log('========================================');
});