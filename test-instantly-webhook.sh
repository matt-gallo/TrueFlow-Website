#!/bin/bash

# Instantly Webhook Testing Script
# Quick utility to test webhook events locally or in production

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Default to local
URL="${1:-http://localhost:3001}"

echo -e "${BLUE}🧪 Testing Instantly Webhooks${NC}"
echo -e "Endpoint: ${URL}/api/webhooks/instantly/test"
echo ""

# Function to test an event
test_event() {
    local event=$1
    local description=$2

    echo -e "${YELLOW}Testing: ${description}${NC}"

    response=$(curl -s -X POST "${URL}/api/webhooks/instantly/test?event=${event}")

    if echo "$response" | grep -q '"success":true'; then
        echo -e "${GREEN}✅ Success${NC}"
    else
        echo -e "${RED}❌ Failed${NC}"
        echo "$response" | jq '.' 2>/dev/null || echo "$response"
    fi

    echo ""
    sleep 1
}

# Run tests
echo -e "${BLUE}Running webhook tests...${NC}"
echo ""

test_event "reply_interested" "Interested Reply"
test_event "reply_not_interested" "Not Interested Reply"
test_event "reply_not_now" "Not Now Reply"
test_event "reply_question" "Question Reply"
test_event "reply_ooo" "Out of Office Reply"
test_event "reply_referral" "Referral Reply"
test_event "link_clicked_optin" "Opt-In Link Click"
test_event "campaign_completed" "Campaign Completed"
test_event "lead_unsubscribed" "Lead Unsubscribed"
test_event "email_bounced" "Email Bounced"

echo -e "${GREEN}✅ All tests completed${NC}"
echo ""
echo -e "${BLUE}View logs:${NC}"
echo "  Local: Check your terminal running 'npm run dev'"
echo "  Production: railway logs"
