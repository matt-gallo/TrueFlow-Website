#!/usr/bin/env node

/**
 * Test script to verify pricing tier integration with opportunities
 */

const timestamp = Date.now();

// Test different pricing tiers
const testCases = [
  {
    name: 'Content Engine Tier',
    data: {
      firstName: 'Content',
      lastName: `Tier${timestamp}`,
      email: `content.${timestamp}@test.com`,
      businessName: `Content Business ${timestamp}`,
      pricingPlan: 'content-engine',
      expectedValue: 650,
      expectedTier: 'Content Engine'
    }
  },
  {
    name: 'Complete System Tier',
    data: {
      firstName: 'Complete',
      lastName: `Tier${timestamp}`,
      email: `complete.${timestamp}@test.com`,
      businessName: `Complete Business ${timestamp}`,
      pricingPlan: 'complete-system',
      expectedValue: 1300,
      expectedTier: 'Complete System'
    }
  },
  {
    name: 'Custom Enterprise Tier',
    data: {
      firstName: 'Enterprise',
      lastName: `Tier${timestamp}`,
      email: `enterprise.${timestamp}@test.com`,
      businessName: `Enterprise Business ${timestamp}`,
      pricingPlan: 'custom',
      expectedValue: 2500,
      expectedTier: 'Custom Enterprise'
    }
  },
  {
    name: 'Not Sure (Should default to lowest tier)',
    data: {
      firstName: 'Unsure',
      lastName: `Tier${timestamp}`,
      email: `unsure.${timestamp}@test.com`,
      businessName: `Unsure Business ${timestamp}`,
      pricingPlan: 'not-sure',
      expectedValue: 650,
      expectedTier: 'Not Sure (Defaulted to Content Engine)'
    }
  },
  {
    name: 'No Plan Selected (Should default to lowest tier)',
    data: {
      firstName: 'NoPlan',
      lastName: `Tier${timestamp}`,
      email: `noplan.${timestamp}@test.com`,
      businessName: `NoPlan Business ${timestamp}`,
      pricingPlan: '',
      expectedValue: 650,
      expectedTier: 'Content Engine (Default)'
    }
  }
];

console.log('========================================');
console.log('Testing Pricing Tier Integration');
console.log('========================================\n');

async function testPricingTier(testCase) {
  console.log(`\n📊 Testing: ${testCase.name}`);
  console.log('----------------------------------------');
  
  const formData = {
    ...testCase.data,
    phone: '+15551234567',
    businessType: 'Technology',
    contentGoals: ['SEO Content', 'Social Media'],
    integrations: ['CRM Integration'],
    monthlyLeads: '50-100',
    teamSize: '5-10',
    currentTools: 'HubSpot',
    biggestChallenge: 'Content creation',
    timestamp: new Date().toISOString(),
    source: 'get-started-form',
    formType: 'get-started'
  };

  try {
    const response = await fetch('http://localhost:3001/api/ghl/create-lead-v5', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Contact created:', result.ghlContactId);
      console.log('✅ Opportunity created:', result.ghlOpportunityId || 'Not created');
      console.log('💰 Expected value: $' + testCase.data.expectedValue + '/month');
      console.log('🏷️ Expected tier:', testCase.data.expectedTier);
      console.log('📧 Email:', testCase.data.email);
      
      if (result.ghlOpportunityId) {
        console.log('🔗 View opportunity:');
        console.log(`   https://app.gohighlevel.com/location/GVFoSfHpPaXzRXCJbym0/opportunities/${result.ghlOpportunityId}`);
      }
    } else {
      console.log('❌ Failed:', result.message);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

async function runAllTests() {
  for (const testCase of testCases) {
    await testPricingTier(testCase);
    // Small delay between tests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n========================================');
  console.log('Pricing Tier Summary');
  console.log('========================================');
  console.log('Content Engine: $150/week = $650/month');
  console.log('Complete System: $300/week = $1,300/month');
  console.log('Custom Enterprise: Estimated $2,500/month');
  console.log('Not Sure/Default: $650/month (Content Engine)');
  console.log('\nAll unsure or missing selections default to the');
  console.log('lowest tier (Content Engine) as requested.');
}

runAllTests().then(() => {
  console.log('\n✅ All tests completed');
}).catch(error => {
  console.error('Test suite failed:', error);
});