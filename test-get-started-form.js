#!/usr/bin/env node

/**
 * Test script for Get Started form submission
 * Tests both GoHighLevel integration and email notifications
 */

// Use native fetch (available in Node.js 18+)

// Generate unique test data
const timestamp = new Date().toISOString();
const randomNum = Math.floor(Math.random() * 10000);

const testData = {
  firstName: 'Test',
  lastName: `User${randomNum}`,
  email: `test.user.${randomNum}@example.com`,
  phone: '+1234567890',
  businessName: `Test Business ${randomNum}`,
  businessType: 'Technology',
  contentGoals: ['SEO Content', 'Social Media', 'Email Campaigns'],
  integrations: ['CRM Integration', 'Email Marketing', 'Analytics Tools'],
  
  // Get Started specific fields
  monthlyLeads: '50-100',
  teamSize: '5-10',
  currentTools: 'HubSpot, Mailchimp, Google Analytics',
  biggestChallenge: 'Spending too much time on repetitive content creation tasks',
  pricingPlan: 'growth',
  
  // Metadata
  timestamp: timestamp,
  source: 'get-started-form',
  formType: 'get-started'
};

console.log('========================================');
console.log('Testing Get Started Form Submission');
console.log('========================================');
console.log('Test data:', JSON.stringify(testData, null, 2));
console.log('');

async function testFormSubmission() {
  try {
    console.log('Submitting to API...');
    const response = await fetch('http://localhost:3001/api/ghl/create-lead-v5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response data:', JSON.stringify(result, null, 2));
    
    if (result.success) {
      console.log('\n✅ SUCCESS: Form submitted successfully');
      console.log('');
      console.log('Results:');
      console.log('- Form Type:', result.formType);
      console.log('- Lead Score:', result.leadScore);
      console.log('- Lead Quality:', result.leadQuality);
      console.log('- GHL Contact ID:', result.ghlContactId);
      console.log('- Custom Fields Used:', result.customFieldsUsed);
      console.log('- Tags Used:', result.tagsUsed);
      
      console.log('\n📧 Email Notification:');
      console.log('Email should be sent to Griffin at TrueFlow.ai with contact details');
      
      console.log('\n🔗 GoHighLevel:');
      console.log('Contact should be created in GHL with all custom fields populated');
      
      console.log('\n📋 Next Steps:');
      console.log('1. Check GHL dashboard for new contact');
      console.log('2. Verify email was received at TrueFlow');
      console.log('3. Confirm all custom fields are properly mapped');
    } else {
      console.log('\n❌ ERROR: Form submission failed');
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