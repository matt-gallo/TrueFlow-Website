#!/usr/bin/env node

/**
 * Test script for Get Started form submission with unique email
 * Ensures a new contact is created in GoHighLevel
 */

// Generate unique test data with timestamp to ensure uniqueness
const timestamp = Date.now();
const uniqueEmail = `test.${timestamp}@trueflow-test.com`;

const testData = {
  firstName: 'New',
  lastName: `Contact${timestamp}`,
  email: uniqueEmail,
  phone: `+1555${String(timestamp).slice(-7)}`,
  businessName: `New Business ${timestamp}`,
  businessType: 'Technology',
  contentGoals: ['SEO Content', 'Social Media', 'Email Campaigns'],
  integrations: ['CRM Integration', 'Email Marketing', 'Analytics Tools'],
  
  // Get Started specific fields
  monthlyLeads: '100-250',
  teamSize: '10-25',
  currentTools: 'Salesforce, ActiveCampaign, Semrush',
  biggestChallenge: 'Need to scale content production without losing quality',
  pricingPlan: 'enterprise',
  
  // Metadata
  timestamp: new Date().toISOString(),
  source: 'get-started-form',
  formType: 'get-started'
};

console.log('========================================');
console.log('Testing Get Started Form - NEW CONTACT');
console.log('========================================');
console.log('Unique Email:', uniqueEmail);
console.log('Contact Name:', `${testData.firstName} ${testData.lastName}`);
console.log('Business:', testData.businessName);
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
    console.log('');
    
    if (result.success) {
      console.log('✅ SUCCESS: Form submitted successfully');
      console.log('');
      console.log('=== GOHIGHLEVEL DETAILS ===');
      console.log('Contact ID:', result.ghlContactId || 'Not provided');
      console.log('');
      console.log('This should be a NEW contact in GoHighLevel.');
      console.log('');
      console.log('To verify in GoHighLevel:');
      console.log('1. Go to Contacts in your GHL dashboard');
      console.log('2. Search for email:', uniqueEmail);
      console.log('3. Or search for name:', `${testData.firstName} ${testData.lastName}`);
      console.log('4. Or search for business:', testData.businessName);
      console.log('');
      console.log('Expected Contact Details:');
      console.log('- Name:', `${testData.firstName} ${testData.lastName}`);
      console.log('- Email:', uniqueEmail);
      console.log('- Phone:', testData.phone);
      console.log('- Company:', testData.businessName);
      console.log('- Lead Score:', result.leadScore);
      console.log('- Lead Quality:', result.leadQuality);
      console.log('- Tags:', 'web-lead, lead-quality-' + result.leadQuality + ', get-started-form, business-type-technology');
      
      if (result.ghlContactId) {
        console.log('');
        console.log('📋 Direct GHL Contact Link (if available):');
        console.log(`https://app.gohighlevel.com/location/${process.env.GHL_LOCATION_ID || 'GVFoSfHpPaXzRXCJbym0'}/contacts/${result.ghlContactId}`);
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