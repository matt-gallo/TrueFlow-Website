/**
 * Cloudflare Domain Sharing Guide
 * Step-by-step instructions for inviting TrueFlow AI to Cloudflare
 */

export default function CloudflareGuidePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cloudflare Domain Sharing Guide - TrueFlow AI</title>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            color-scheme: light dark;
            font-family: "Inter", "Segoe UI", Arial, sans-serif;
            line-height: 1.5;
          }

          body {
            margin: 0;
            padding: 0;
            background: #f7f8fa;
            color: #1f2a44;
          }

          header {
            background: #fff;
            border-bottom: 1px solid #dbe1f0;
            padding: 2.5rem 1rem 2rem;
            text-align: center;
          }

          header h1 {
            margin: 0 0 0.5rem;
            font-size: clamp(1.8rem, 3vw, 2.4rem);
          }

          header p {
            margin: 0;
            color: #5f6b83;
            font-size: 1rem;
          }

          main {
            max-width: 900px;
            margin: 2rem auto 4rem;
            padding: 0 1.5rem;
          }

          ol {
            list-style: none;
            counter-reset: step;
            padding: 0;
            margin: 0;
          }

          li {
            counter-increment: step;
            background: #fff;
            border-radius: 18px;
            border: 1px solid #dbe1f0;
            box-shadow: 0 10px 25px rgba(31, 42, 68, 0.05);
            padding: 2rem 2rem 1.5rem;
            margin-bottom: 1.75rem;
          }

          li::before {
            content: "Step " counter(step);
            display: inline-block;
            font-weight: 600;
            color: #0c5dd6;
            background: #e7f0ff;
            border-radius: 999px;
            padding: 0.25rem 0.85rem;
            margin-bottom: 1rem;
            font-size: 0.95rem;
          }

          h2 {
            margin: 0 0 0.75rem;
            font-size: 1.25rem;
            color: #0d1436;
          }

          p {
            margin: 0 0 1.25rem;
            color: #33415c;
            font-size: 1rem;
          }

          .screenshot {
            display: block;
            width: 100%;
            max-height: 480px;
            object-fit: contain;
            border-radius: 12px;
            border: 1px solid #cdd6ec;
            margin: 0 auto;
            background: #f1f4ff;
          }

          .tip {
            margin-top: -0.5rem;
            font-size: 0.95rem;
            color: #55627d;
          }

          @media (max-width: 640px) {
            li {
              padding: 1.5rem;
            }

            h2 {
              font-size: 1.1rem;
            }
          }
        `}} />
      </head>
      <body>
        <header>
          <h1>Share a Domain in Cloudflare</h1>
          <p>Follow the steps below to invite TrueFlow AI to your Cloudflare account with the correct domain permissions.</p>
        </header>

        <main>
          <ol>
            <li>
              <h2>Open the Members page</h2>
              <p>In the Cloudflare dashboard, expand <strong>Manage Account</strong> in the left navigation and choose <strong>Members</strong>.</p>
              <img src="/cloudflare-guide/Step 1.png" alt="Cloudflare dashboard with Manage Account > Members highlighted" className="screenshot" />
            </li>

            <li>
              <h2>Start a new invite</h2>
              <p>Select the blue <strong>Invite</strong> button at the top right of the Members panel.</p>
              <img src="/cloudflare-guide/Step 2.png" alt="Cloudflare Members screen with the Invite button highlighted" className="screenshot" />
            </li>

            <li>
              <h2>Add the invitee email</h2>
              <p>Type <strong>griffin@trueflow.ai</strong> (or the email you are sharing the domain with) into the invite field.</p>
              <img src="/cloudflare-guide/Step 3 and Step 4.png" alt="Invite members form with email address entered" className="screenshot" />
            </li>

            <li>
              <h2>Save the invitee</h2>
              <p>Click <strong>Add</strong> to confirm the email address so it appears below the field.</p>
              <img src="/cloudflare-guide/Step 3 and Step 4.png" alt="Invite members form with Add button highlighted" className="screenshot" />
            </li>

            <li>
              <h2>Configure the scope</h2>
              <p>Ensure the scope options read <strong>Include</strong> and <strong>A specific domain</strong>, then pick the TrueFlow AI domain from the dropdown.</p>
              <p className="tip">The three dropdowns should match: Include → A specific domain → TrueFlow AI domain.</p>
              <img src="/cloudflare-guide/Step 5.png" alt="Scope configuration with TrueFlow AI domain selected" className="screenshot" />
            </li>

            <li>
              <h2>Grant domain roles</h2>
              <p>Select every role listed under <strong>Domain Scoped Roles</strong> so the invitee has full domain-level access required by TrueFlow AI.</p>
              <img src="/cloudflare-guide/Step 6.png" alt="Domain scoped roles list with instruction to select all roles" className="screenshot" />
            </li>
          </ol>
        </main>
      </body>
    </html>
  )
}
