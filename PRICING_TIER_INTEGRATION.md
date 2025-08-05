# Pricing Tier Integration - Complete ✅

## Overview
The Get Started form now automatically creates opportunities in GoHighLevel with monetary values based on the selected pricing tier.

## Pricing Structure

### Tier Mapping
| Selected Plan | Weekly Price | Monthly Value (4.33 weeks) | Pipeline Value |
|--------------|--------------|---------------------------|----------------|
| **Content Engine** | $150/week | $650/month | $650 |
| **Complete System** | $300/week | $1,300/month | $1,300 |
| **Custom Enterprise** | Contact for pricing | Estimated | $2,500 |
| **Not Sure** | Defaults to lowest | Defaults to Content Engine | $650 |
| **No Selection** | Defaults to lowest | Defaults to Content Engine | $650 |

## How It Works

1. **User selects a pricing tier** on the Get Started form
2. **Form submission** includes the `pricingPlan` field
3. **API processes the selection** and calculates monthly value
4. **Opportunity is created** in "TrueFlow – Getting Started Form" pipeline
5. **Monetary value** is set based on the tier:
   - Content Engine: $650/month
   - Complete System: $1,300/month
   - Custom Enterprise: $2,500/month (estimated)
   - Not Sure/Missing: $650/month (defaults to lowest tier)

## Default Behavior
As requested, when users are unsure or don't select a tier, the system **defaults to the lowest tier** (Content Engine at $650/month).

## Opportunity Naming
Opportunities are named with the following format:
```
[First Name] [Last Name] - [Business Name] ([Selected Tier])
```

Example: "John Smith - Acme Corp (Complete System)"

## Test Results

### Successfully Tested Scenarios:
✅ Content Engine tier → $650/month  
✅ Complete System tier → $1,300/month  
✅ Custom Enterprise tier → $2,500/month  
✅ "Not Sure" selection → $650/month (default)  
✅ No selection → $650/month (default)  

### Test Contact Created:
- **Contact ID**: `9miCxrrDqC6nysRMiBLS`
- **Opportunity ID**: `KJXj1R0vd8LSroZw0SgC`
- **Selected**: Complete System
- **Value**: $1,300/month

## Verification in GoHighLevel

1. Navigate to **Opportunities** → **TrueFlow – Getting Started Form**
2. Look for the contact in the **"New Lead (Getting Started Form)"** stage
3. The opportunity will show:
   - Contact name and business
   - Selected tier in parentheses
   - Monetary value based on tier

## API Implementation

The implementation in `/app/api/ghl/create-lead-v5/route.ts`:
- Reads the `pricingPlan` field from form data
- Maps plan names to monetary values
- Creates opportunity with calculated value
- Includes tier name in opportunity title
- Defaults to Content Engine ($650) for unsure/missing selections

## Pipeline Configuration
- **Pipeline**: TrueFlow – Getting Started Form
- **Pipeline ID**: `tH245WTBIthgA8j8dYLI`
- **First Stage**: New Lead (Getting Started Form)
- **Stage ID**: `2e4484df-c32f-46e6-87be-eee88ca413f0`

## Support
The system is fully operational and automatically:
1. Creates contacts in GoHighLevel
2. Adds them to the correct pipeline
3. Sets monetary value based on selected tier
4. Defaults to lowest tier when unsure
5. Sends email notifications to TrueFlow team