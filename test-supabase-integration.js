#!/usr/bin/env node

/**
 * Test script to verify Supabase integration
 * Run with: node test-supabase-integration.js
 */

const https = require('https');

// Test data
const testData = {
  email: `test${Date.now()}@example.com`,
  password: 'TestPassword123!',
  fullName: 'Test User',
  company: 'Test Company',
  role: 'Manager',
  phone: '+1234567890',
  businessType: 'Service-Based',
  contentGoals: ['blog', 'social'],
  integrations: ['google', 'facebook'],
  selectedPlan: 'complete'
};

console.log('🔍 Testing Supabase Integration...\n');
console.log('Test user email:', testData.email);
console.log('Test password:', testData.password);
console.log('\n📋 Instructions to test:');
console.log('1. Start the landing page server: npm run dev');
console.log('2. Navigate to: http://localhost:3001/get-started');
console.log('3. Complete the assessment form');
console.log('4. On Step 6 (Create Account), use the test credentials above');
console.log('5. Click "Create Account & Continue"');
console.log('6. Check for verification email (if Supabase is configured)');
console.log('\n⚠️  Important: Make sure to update .env.local with real Supabase credentials:');
console.log('   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>');
console.log('   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>');
console.log('\n✅ Expected Result:');
console.log('   - Account should be created in Supabase');
console.log('   - Verification email should be sent');
console.log('   - Success page should show with email verification message');
console.log('\n🔗 After verification, user can sign in at:');
console.log('   http://localhost:3000/auth/signin');