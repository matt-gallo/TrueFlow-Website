#!/usr/bin/env node

/**
 * Test script for Get Started form with Opportunity creation
 * This will create a contact AND add it to the pipeline
 */

// Generate unique test data
const timestamp = Date.now();
const uniqueEmail = `opp.test.${timestamp}@trueflow-test.com`;

const testData = {
  firstName: 'Pipeline',
  lastName: `Test${timestamp}`,
  email: uniqueEmail,
  phone: `+1555${String(timestamp).slice(-7)}`,
  businessName: `Pipeline Test Business ${timestamp}`,
  businessType: 'E-commerce',
  contentGoals: ['SEO Content', 'Social Media', 'Email Campaigns', 'Blog Content'],
  integrations: ['CRM Integration', 'Email Marketing', 'Analytics Tools', 'Social Media Tools'],
  
  // Get Started specific fields - higher value lead
  monthlyLeads: '250-500',
  teamSize: '25-50',
  currentTools: 'HubSpot, Klaviyo, Hootsuite, Google Analytics, Semrush',
  biggestChallenge: 'We need to scale our content production to match our growth without sacrificing quality or brand voice',
  pricingPlan: 'enterprise',
  
  // Metadata
  timestamp: new Date().toISOString(),
  source: 'get-started-form',
  formType: 'get-started'
};

console.log('========================================');
console.log('Testing Get Started Form with Pipeline');
console.log('========================================');
console.log('');
console.log('This test will:');
console.log('1. Create a new contact in GoHighLevel');
console.log('2. Add the contact to "TrueFlow – Paid Leads (2W Trial Funnel)" pipeline');
console.log('3. Place them in the first stage: "New Lead (Ad Form)"');
console.log('');
console.log('Test Contact Details:');
console.log('  Name:', `${testData.firstName} ${testData.lastName}`);
console.log('  Email:', uniqueEmail);
console.log('  Business:', testData.businessName);
console.log('  Plan:', testData.pricingPlan);
console.log('');

async function testFormSubmission() {
  try {
    console.log('Submitting to API...\n');
    const response = await fetch('http://localhost:3001/api/ghl/create-lead-v5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ SUCCESS: Form submitted successfully\n');
      
      console.log('=== CONTACT CREATED ===');
      console.log('Contact ID:', result.ghlContactId || 'Not provided');
      console.log('Lead Score:', result.leadScore);
      console.log('Lead Quality:', result.leadQuality);
      console.log('');
      
      if (result.ghlOpportunityId) {
        console.log('🎯 OPPORTUNITY CREATED ===');
        console.log('Opportunity ID:', result.ghlOpportunityId);
        console.log('Pipeline: TrueFlow – Paid Leads (2W Trial Funnel)');
        console.log('Stage: New Lead (Ad Form)');
        console.log('Monetary Value: $' + (result.leadScore * 10));
        console.log('');
        
        console.log('📋 To verify in GoHighLevel:');
        console.log('1. Go to Opportunities → TrueFlow – Paid Leads (2W Trial Funnel)');
        console.log('2. Look for contact in "New Lead (Ad Form)" stage');
        console.log('3. Contact name:', `${testData.firstName} ${testData.lastName}`);
        console.log('4. Business:', testData.businessName);
      } else {
        console.log('⚠️ WARNING: Opportunity was not created');
        console.log('This could mean:');
        console.log('- GHL_CREATE_OPPORTUNITIES is not set to "true" in environment');
        console.log('- There was an error creating the opportunity (check server logs)');
      }
      
      console.log('');
      console.log('Direct Links:');
      if (result.ghlContactId) {
        console.log('Contact: https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/contacts/' + result.ghlContactId);
      }
      if (result.ghlOpportunityId) {
        console.log('Opportunity: https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/opportunities/' + result.ghlOpportunityId);
      }
      
    } else {
      console.log('❌ ERROR: Form submission failed');
      console.log('Error message:', result.message);
      if (result.error) {
        console.log('Error details:', result.error);
      }
    }
    
  } catch (error) {
    console.error('\n❌ CRITICAL ERROR:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

// Run the test
testFormSubmission().then(() => {
  console.log('\n========================================');
  console.log('Test completed at:', new Date().toISOString());
  console.log('========================================');
}).catch(error => {
  console.error('Test failed:', error);
  process.exit(1);
});