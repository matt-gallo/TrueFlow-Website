# Partial Lead Notification Email Template

Use this template in GoHighLevel workflows when a contact is tagged with `step-1-prospects`.

## Email Subject

```
🔔 New Partial Lead Captured: {{contact.first_name}} {{contact.last_name}}
```

## Plain Text Version

```
🔔 PARTIAL LEAD CAPTURED - CONTACT INFO RECEIVED

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION CAPTURED:
• Name: {{contact.first_name}} {{contact.last_name}}
• Email: {{contact.email}}
• Phone: {{contact.phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 STATUS:
• Lead Type: PARTIAL (Contact info only)
• Form Progress: Step 1 of 5 completed
• Next Steps: User is continuing through form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 SUBMISSION DETAILS:
• Timestamp: {{contact.date_added}}
• Source: get-started-form (partial)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 FOLLOW-UP STRATEGY:
This lead has provided contact info but hasn't completed the full form yet.
• Wait 24 hours before initial follow-up
• If they complete the form, you'll receive another notification
• Consider sending a helpful email if they don't complete within 48 hours
```

## HTML Version

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border: 1px solid #e9ecef; }
    .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .section-title { color: #495057; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #e9ecef; padding-bottom: 10px; }
    .status-partial { background: #fff3cd; color: #856404; padding: 15px; border-radius: 8px; border: 1px solid #ffeaa7; }
    .info-box { background: #d1ecf1; color: #0c5460; padding: 15px; border-radius: 8px; border: 1px solid #bee5eb; }
    ul { padding-left: 20px; }
    li { margin: 5px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 Partial Lead Captured</h1>
      <p style="margin: 0; font-size: 20px;">{{contact.first_name}} {{contact.last_name}}</p>
    </div>

    <div class="content">
      <div class="section">
        <div class="section-title">👤 Contact Information Captured</div>
        <p><strong>Name:</strong> {{contact.first_name}} {{contact.last_name}}<br>
        <strong>Email:</strong> <a href="mailto:{{contact.email}}">{{contact.email}}</a><br>
        <strong>Phone:</strong> {{contact.phone}}</p>
      </div>

      <div class="status-partial">
        <strong>📋 PARTIAL LEAD STATUS:</strong><br>
        • Lead Type: <strong>PARTIAL</strong> (Contact info only)<br>
        • Form Progress: <strong>Step 1 of 5</strong> completed<br>
        • User is currently continuing through the form
      </div>

      <div class="info-box" style="margin-top: 20px;">
        <strong>🔄 Recommended Follow-up Strategy:</strong><br>
        • Wait 24 hours before initial follow-up<br>
        • If they complete the form, you'll receive a full lead notification<br>
        • Consider sending a helpful email if they don't complete within 48 hours<br>
        • Keep any outreach friendly and value-focused
      </div>

      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 12px;">
        <p>Submitted: {{contact.date_added}}<br>
        Source: get-started-form (partial capture)</p>
      </div>
    </div>
  </div>
</body>
</html>
```

## GHL Custom Fields to Map

Make sure these custom fields exist in your GHL sub-account:

- `{{contact.first_name}}` - First Name
- `{{contact.last_name}}` - Last Name
- `{{contact.email}}` - Email
- `{{contact.phone}}` - Phone
- `{{contact.date_added}}` - Date Added (automatically populated)

## Workflow Setup in GHL

1. **Trigger:** Contact is tagged with `step-1-prospects`
2. **Action:** Send Internal Email Notification
3. **To:** griffin@trueflow.ai, matt@trueflow.ai
4. **From:** TrueFlow Leads <your-verified-sender@trueflow.ai>
5. **Subject:** Use subject template above
6. **Body:** Use HTML template above

---

**Note:** This template is for INTERNAL notifications only (to alert you/Matt when a lead comes in). For prospect-facing follow-up emails, create a separate workflow with different messaging.
