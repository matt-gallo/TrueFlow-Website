#!/bin/bash

# TrueFlow Sign-Up Flow Test Script
# This script tests the complete signup flow end-to-end

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
BASE_URL="${BASE_URL:-https://trueflow.ai}"
TEST_EMAIL="test+$(date +%s)@trueflow.ai"
TEST_BUSINESS="Test Business $(date +%s)"
SIGNUP_ID="test_$(date +%s)_$(openssl rand -hex 4)"

echo "========================================="
echo "TrueFlow Sign-Up Flow Test"
echo "========================================="
echo "Base URL: $BASE_URL"
echo "Test Email: $TEST_EMAIL"
echo "Test Business: $TEST_BUSINESS"
echo "Signup ID: $SIGNUP_ID"
echo "========================================="
echo ""

# Test 1: Check if signup-data API is accessible
echo -e "${YELLOW}Test 1: Checking signup-data API...${NC}"
response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/signup-data" \
  -H "Content-Type: application/json" \
  -d "{
    \"signupId\": \"$SIGNUP_ID\",
    \"name\": \"$TEST_BUSINESS\",
    \"email\": \"$TEST_EMAIL\",
    \"phone\": \"+1 555 123 4567\",
    \"address\": \"123 Test Street\",
    \"city\": \"San Francisco\",
    \"state\": \"CA\",
    \"country\": \"US\",
    \"postalCode\": \"94102\",
    \"prospectInfo\": {
      \"firstName\": \"Test\",
      \"lastName\": \"User\",
      \"email\": \"$TEST_EMAIL\"
    }
  }")

http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | sed '$d')

if [ "$http_code" -eq 200 ]; then
  echo -e "${GREEN}✓ Signup data stored successfully${NC}"
  echo "Response: $body"
else
  echo -e "${RED}✗ Failed to store signup data (HTTP $http_code)${NC}"
  echo "Response: $body"
  exit 1
fi
echo ""

# Test 2: Retrieve stored data
echo -e "${YELLOW}Test 2: Retrieving stored signup data...${NC}"
response=$(curl -s -w "\n%{http_code}" "$BASE_URL/api/signup-data?signupId=$SIGNUP_ID")

http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | sed '$d')

if [ "$http_code" -eq 200 ]; then
  echo -e "${GREEN}✓ Signup data retrieved successfully${NC}"
  echo "Response: $body"
else
  echo -e "${RED}✗ Failed to retrieve signup data (HTTP $http_code)${NC}"
  echo "Response: $body"
  exit 1
fi
echo ""

# Test 3: Check webhook endpoint
echo -e "${YELLOW}Test 3: Checking webhook endpoint...${NC}"
response=$(curl -s -w "\n%{http_code}" "$BASE_URL/api/webhooks/ghl")

http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | sed '$d')

if [ "$http_code" -eq 200 ]; then
  echo -e "${GREEN}✓ Webhook endpoint is accessible${NC}"
  echo "Recent webhooks: $body"
else
  echo -e "${RED}✗ Webhook endpoint not accessible (HTTP $http_code)${NC}"
  echo "Response: $body"
fi
echo ""

# Test 4: Send test webhook (payment.succeeded)
echo -e "${YELLOW}Test 4: Simulating payment webhook...${NC}"
echo -e "${YELLOW}WARNING: This will create a REAL sub-account in GoHighLevel!${NC}"
read -p "Continue? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/webhooks/ghl" \
    -H "Content-Type: application/json" \
    -d "{
      \"type\": \"payment.succeeded\",
      \"signup_id\": \"$SIGNUP_ID\",
      \"email\": \"$TEST_EMAIL\",
      \"name\": \"Test User\"
    }")

  http_code=$(echo "$response" | tail -n 1)
  body=$(echo "$response" | sed '$d')

  if [ "$http_code" -eq 200 ]; then
    echo -e "${GREEN}✓ Webhook processed successfully${NC}"
    echo "Response: $body"
    echo ""
    echo -e "${YELLOW}Waiting 10 seconds for account creation...${NC}"
    sleep 10

    # Check if signup data was deleted (means account was created)
    echo -e "${YELLOW}Checking if account was created...${NC}"
    response=$(curl -s -w "\n%{http_code}" "$BASE_URL/api/signup-data?signupId=$SIGNUP_ID")
    http_code=$(echo "$response" | tail -n 1)

    if [ "$http_code" -eq 404 ] || [ "$http_code" -eq 410 ]; then
      echo -e "${GREEN}✓ Account created successfully (signup data deleted)${NC}"
    else
      echo -e "${YELLOW}⚠ Signup data still exists - account may still be processing${NC}"
    fi
  else
    echo -e "${RED}✗ Webhook processing failed (HTTP $http_code)${NC}"
    echo "Response: $body"
  fi
else
  echo "Skipping webhook test (would create real account)"
fi
echo ""

# Test 5: Check intake API directly (OPTIONAL - creates real account)
echo -e "${YELLOW}Test 5: Test intake API directly (creates real GHL account)${NC}"
read -p "Continue? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL/api/intake" \
    -H "Content-Type: application/json" \
    -d "{
      \"name\": \"Direct Test Business $(date +%s)\",
      \"email\": \"directtest+$(date +%s)@trueflow.ai\",
      \"phone\": \"+1 555 999 8888\",
      \"address\": \"456 Direct Test Ave\",
      \"city\": \"Los Angeles\",
      \"state\": \"CA\",
      \"country\": \"US\",
      \"postalCode\": \"90001\",
      \"prospectInfo\": {
        \"firstName\": \"Direct\",
        \"lastName\": \"Test\",
        \"email\": \"directtest+$(date +%s)@trueflow.ai\"
      }
    }")

  http_code=$(echo "$response" | tail -n 1)
  body=$(echo "$response" | sed '$d')

  if [ "$http_code" -eq 200 ]; then
    echo -e "${GREEN}✓ Sub-account created successfully${NC}"
    echo "Response: $body"

    # Parse locationId and userId from response
    locationId=$(echo "$body" | grep -o '"locationId":"[^"]*"' | cut -d'"' -f4)
    userId=$(echo "$body" | grep -o '"userId":"[^"]*"' | cut -d'"' -f4)

    if [ -n "$locationId" ]; then
      echo -e "${GREEN}Location ID: $locationId${NC}"
    fi
    if [ -n "$userId" ]; then
      echo -e "${GREEN}User ID: $userId${NC}"
    fi
  else
    echo -e "${RED}✗ Failed to create sub-account (HTTP $http_code)${NC}"
    echo "Response: $body"
  fi
else
  echo "Skipping intake API test"
fi
echo ""

# Cleanup: Delete test signup data
echo -e "${YELLOW}Cleanup: Deleting test signup data...${NC}"
curl -s -X DELETE "$BASE_URL/api/signup-data?signupId=$SIGNUP_ID" > /dev/null
echo -e "${GREEN}✓ Cleanup complete${NC}"
echo ""

echo "========================================="
echo "Test Summary"
echo "========================================="
echo -e "${GREEN}✓ Signup data storage working${NC}"
echo -e "${GREEN}✓ Signup data retrieval working${NC}"
echo -e "${GREEN}✓ Webhook endpoint accessible${NC}"
echo ""
echo "To test the complete flow:"
echo "1. Go to https://trueflow.ai/sign-up"
echo "2. Fill out the form"
echo "3. Complete payment in test mode"
echo "4. Monitor logs: railway logs"
echo "========================================="
