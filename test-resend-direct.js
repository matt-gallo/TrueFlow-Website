#!/usr/bin/env node

/**
 * Direct test of Resend API
 */

const RESEND_API_KEY = 're_gp5Mnyjq_EEVVKSs3jtbjZY8xY34B2z6m';

async function testResendDirectly() {
  console.log('Testing Resend API directly...');
  console.log('API Key:', RESEND_API_KEY.substring(0, 10) + '...');
  
  try {
    // Test the API connection
    console.log('\n1. Testing API connection...');
    const testResponse = await fetch('https://api.resend.com/emails', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Connection test status:', testResponse.status);
    console.log('Connection test OK:', testResponse.ok);
    
    if (!testResponse.ok) {
      const errorText = await testResponse.text();
      console.log('Error response:', errorText);
    }
    
    // Try sending a test email
    console.log('\n2. Attempting to send test email...');
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'TrueFlow AI <onboarding@resend.dev>',
        to: ['griffin@trueflow.ai'],
        subject: 'Test Email from Get Started Form',
        html: '<p>This is a test email to verify Resend integration is working.</p>',
        text: 'This is a test email to verify Resend integration is working.'
      })
    });
    
    console.log('Email send status:', emailResponse.status);
    console.log('Email send OK:', emailResponse.ok);
    
    const result = await emailResponse.json();
    console.log('Email send result:', JSON.stringify(result, null, 2));
    
    if (emailResponse.ok) {
      console.log('\n✅ SUCCESS: Email sent successfully!');
      console.log('Email ID:', result.id);
    } else {
      console.log('\n❌ ERROR: Failed to send email');
      console.log('Error details:', result);
    }
    
  } catch (error) {
    console.error('\n❌ CRITICAL ERROR:', error.message);
    console.error('Stack:', error.stack);
  }
}

// Run the test
testResendDirectly().then(() => {
  console.log('\nTest completed');
}).catch(error => {
  console.error('Test failed:', error);
});