#!/usr/bin/env node

/**
 * Test script for Get Started form with CORRECT Pipeline
 * This will create a contact and add it to "TrueFlow – Getting Started Form" pipeline
 */

// Generate unique test data
const timestamp = Date.now();
const uniqueEmail = `getting.started.${timestamp}@test.com`;

const testData = {
  firstName: 'Getting',
  lastName: `Started${timestamp}`,
  email: uniqueEmail,
  phone: `+1555${String(timestamp).slice(-7)}`,
  businessName: `GS Test Business ${timestamp}`,
  businessType: 'SaaS',
  contentGoals: ['Blog Content', 'Email Campaigns', 'Social Media'],
  integrations: ['CRM Integration', 'Email Marketing'],
  
  // Get Started specific fields
  monthlyLeads: '100-250',
  teamSize: '10-25',
  currentTools: 'HubSpot, Mailchimp',
  biggestChallenge: 'Need to create more consistent, high-quality content',
  pricingPlan: 'growth',
  
  // Metadata
  timestamp: new Date().toISOString(),
  source: 'get-started-form',
  formType: 'get-started'
};

console.log('========================================');
console.log('Testing with CORRECT Pipeline');
console.log('========================================');
console.log('');
console.log('Pipeline: TrueFlow – Getting Started Form');
console.log('First Stage: New Lead (Getting Started Form)');
console.log('');
console.log('Test Contact:');
console.log('  Name:', `${testData.firstName} ${testData.lastName}`);
console.log('  Email:', uniqueEmail);
console.log('  Business:', testData.businessName);
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
      console.log('✅ SUCCESS: Form submitted\n');
      
      console.log('=== RESULTS ===');
      console.log('Contact ID:', result.ghlContactId || 'Not provided');
      console.log('Opportunity ID:', result.ghlOpportunityId || 'Not created');
      console.log('Lead Score:', result.leadScore);
      console.log('Lead Quality:', result.leadQuality);
      console.log('');
      
      if (result.ghlOpportunityId) {
        console.log('🎯 OPPORTUNITY DETAILS:');
        console.log('✓ Pipeline: TrueFlow – Getting Started Form');
        console.log('✓ Stage: New Lead (Getting Started Form)');
        console.log('✓ Value: $' + (result.leadScore * 10));
        console.log('');
        
        console.log('📋 To verify in GoHighLevel:');
        console.log('1. Go to Opportunities');
        console.log('2. Select "TrueFlow – Getting Started Form" pipeline');
        console.log('3. Look in "New Lead (Getting Started Form)" column');
        console.log('4. Find:', `${testData.firstName} ${testData.lastName}`);
      } else {
        console.log('⚠️ No opportunity created - check server logs');
      }
      
      if (result.ghlContactId || result.ghlOpportunityId) {
        console.log('');
        console.log('Direct Links:');
        if (result.ghlContactId) {
          console.log('Contact: https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/contacts/' + result.ghlContactId);
        }
        if (result.ghlOpportunityId) {
          console.log('Opportunity: https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/opportunities/' + result.ghlOpportunityId);
        }
      }
      
    } else {
      console.log('❌ ERROR:', result.message);
    }
    
  } catch (error) {
    console.error('❌ CRITICAL ERROR:', error.message);
  }
}

// Run the test
testFormSubmission().then(() => {
  console.log('\n========================================');
  console.log('Test completed');
  console.log('========================================');
});