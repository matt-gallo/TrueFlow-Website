#!/usr/bin/env node

/**
 * Test assessment form creating opportunity in pipeline
 */

const timestamp = Date.now();
const uniqueEmail = `assessment.opp.${timestamp}@test.com`;

const testData = {
  // Contact info
  firstName: 'Assessment',
  lastName: `Test${timestamp}`,
  email: uniqueEmail,
  phone: '+15551234567',
  businessName: `Assessment Business ${timestamp}`,
  businessType: 'content-creator',
  
  // Assessment specific fields
  answers: {
    "current-content": "manual",
    "content-volume": "moderate", 
    "crm-usage": "basic-crm",
    "lead-response": "hours",
    "time-spent": "moderate",
    "budget": "moderate"
  },
  
  // Selected plan from assessment
  selectedPlan: 'Not Sure Yet',  // This is how assessment forms send it
  
  // Content preferences
  contentGoals: ['newsletters', 'blog posts'],
  integrations: ['CRM Integration'],
  
  // Metadata - IMPORTANT: This determines form type
  formType: 'assessment',
  source: 'readiness-assessment',
  timestamp: new Date().toISOString(),
  assessmentVersion: '2.0'
};

console.log('========================================');
console.log('Testing Assessment Form → Pipeline');
console.log('========================================\n');
console.log('Form Type: ASSESSMENT');
console.log('Contact:', `${testData.firstName} ${testData.lastName}`);
console.log('Email:', uniqueEmail);
console.log('Business:', testData.businessName);
console.log('Selected Plan:', testData.selectedPlan || 'None');
console.log('');

async function testAssessmentOpportunity() {
  try {
    console.log('Submitting assessment form...\n');
    
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
        console.log('  Expected Value: $650/month (default for assessment)');
        console.log('');
        console.log('📋 Verify in GoHighLevel:');
        console.log('  The opportunity should now appear in the pipeline');
        console.log('');
        console.log('Direct links:');
        console.log('  Contact:', `https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/contacts/${result.ghlContactId}`);
        console.log('  Opportunity:', `https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/opportunities/${result.ghlOpportunityId}`);
      } else {
        console.log('❌ NO OPPORTUNITY CREATED');
        console.log('Possible reasons:');
        console.log('  - GHL_CREATE_OPPORTUNITIES not set to "true"');
        console.log('  - Error creating opportunity (check server logs)');
        console.log('  - Form type not recognized');
      }
    } else {
      console.log('❌ Failed:', result.message);
      if (result.error) {
        console.log('Error:', result.error);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testAssessmentOpportunity().then(() => {
  console.log('\n========================================');
  console.log('Assessment form test completed');
  console.log('========================================');
});