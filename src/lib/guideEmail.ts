const SCHEDULE_URL = "https://www.pillarproductionsusa.com/schedule";
const SITE_URL = "https://www.pillarproductionsusa.com";

export function buildGuideEmail(): { subject: string; html: string; text: string } {
  const subject = "Your Guide: How to Get Your Brand on Screen — Pillar Productions";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#000;color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">

<!-- Wrapper -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#000">
<tr><td align="center" style="padding:40px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">

<!-- Header -->
<tr><td style="padding:0 0 32px 0">
  <p style="margin:0;font-size:13px;letter-spacing:0.2em;text-transform:uppercase;color:#666">Pillar Productions</p>
</td></tr>

<!-- Hero -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <h1 style="margin:0 0 16px 0;font-size:28px;font-weight:600;line-height:1.3;letter-spacing:-0.02em;color:#fff">How to Get Your Brand on Screen</h1>
  <p style="margin:0;font-size:16px;line-height:1.6;color:#999">Your step-by-step guide to entering entertainment as a brand — formats, budgets, deal structures, and what to look for in a producing partner.</p>
</td></tr>

<!-- Section 1 -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666">Step 1</p>
  <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:600;color:#fff">Decide What You Want Entertainment to Do for Your Brand</h2>
  <p style="margin:0;font-size:15px;line-height:1.7;color:#ccc">Before you pick a format or a partner, get clear on what you want the content to accomplish. The most common goals brands have when entering entertainment:</p>
  <ul style="margin:16px 0;padding-left:20px;color:#ccc;font-size:15px;line-height:1.8">
    <li><strong style="color:#fff">Brand awareness</strong> — reach audiences who have never heard of you through stories they choose to watch</li>
    <li><strong style="color:#fff">Brand equity</strong> — shift how people perceive your brand by associating it with quality content</li>
    <li><strong style="color:#fff">Audience building</strong> — create a loyal audience around content, not campaigns</li>
    <li><strong style="color:#fff">Cultural relevance</strong> — position your brand as a cultural participant, not just an advertiser</li>
    <li><strong style="color:#fff">Content library</strong> — build a library of assets that work across channels for years</li>
  </ul>
  <p style="margin:0;font-size:15px;line-height:1.7;color:#ccc">Your goal determines everything: format, budget, distribution, and the type of partner you need. Start here before anything else.</p>
</td></tr>

<!-- Section 2 -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666">Step 2</p>
  <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:600;color:#fff">Choose the Right Format</h2>
  <p style="margin:0 0 16px 0;font-size:15px;line-height:1.7;color:#ccc">Each format has different costs, timelines, and audience dynamics. Here is a realistic breakdown:</p>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px 0">
    <tr><td style="padding:16px;background:#111;border:1px solid #222;border-radius:8px 8px 0 0">
      <p style="margin:0 0 4px 0;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:0.1em">Best entry point</p>
      <h3 style="margin:0 0 8px 0;font-size:17px;font-weight:600;color:#fff">Docuseries</h3>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#999">Real stories, real people. $15K–$75K per episode. Most accessible for first-time brand entertainment. Natural integration because the brand exists in the real world being documented.</p>
    </td></tr>
    <tr><td style="padding:16px;background:#111;border:1px solid #222;border-top:none">
      <h3 style="margin:0 0 8px 0;font-size:17px;font-weight:600;color:#fff">Competition / Reality</h3>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#999">Original formats with repeat viewership. $50K–$200K per episode. Great for sports, food, fitness, and lifestyle brands. Built-in audience hooks and dozens of natural brand touch points per episode.</p>
    </td></tr>
    <tr><td style="padding:16px;background:#111;border:1px solid #222;border-top:none">
      <h3 style="margin:0 0 8px 0;font-size:17px;font-weight:600;color:#fff">Scripted Series</h3>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#999">Narrative storytelling with actors and writers. $100K–$500K+ per episode. Highest ceiling for cultural impact. Best for brands with ambitious creative goals and larger budgets.</p>
    </td></tr>
    <tr><td style="padding:16px;background:#111;border:1px solid #222;border-top:none;border-radius:0 0 8px 8px">
      <h3 style="margin:0 0 8px 0;font-size:17px;font-weight:600;color:#fff">Feature Film</h3>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#999">Single cinematic piece. $250K–$2M+. Highest commitment, highest cultural impact. Works for brands ready to make a statement.</p>
    </td></tr>
  </table>
</td></tr>

<!-- Section 3 -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666">Step 3</p>
  <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:600;color:#fff">Understand Deal Structures</h2>
  <p style="margin:0 0 16px 0;font-size:15px;line-height:1.7;color:#ccc">There are three primary ways to structure a brand entertainment deal. Each has different implications for ownership, cost, and creative control:</p>

  <p style="margin:0 0 8px 0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">1. Brand-funded, producer-owned (recommended for most brands).</strong> You fund the production and receive integration, usage rights, and deliverables. The production partner retains ownership and handles distribution. Lower risk, fixed investment, professional distribution.</p>

  <p style="margin:0 0 8px 0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">2. Co-owned partnership.</strong> You and the production partner share ownership, revenue, and creative control. Both parties have skin in the game. Best for multi-season strategies with larger budgets.</p>

  <p style="margin:0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">3. Work-for-hire.</strong> You own everything. The producer executes to your spec. Highest control but also highest risk — you handle distribution and the creative quality depends on how much creative freedom the producer has.</p>
</td></tr>

<!-- Section 4 -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666">Step 4</p>
  <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:600;color:#fff">Build Your Internal Entertainment Capability</h2>
  <p style="margin:0 0 16px 0;font-size:15px;line-height:1.7;color:#ccc">You do not need a full production department, but you do need the right internal setup to manage entertainment partnerships effectively:</p>

  <p style="margin:0 0 12px 0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">Assign an entertainment lead.</strong> This is the person who owns the relationship with your producing partner, makes approval decisions, and keeps the project aligned with brand strategy. This can be your CMO, head of content, or a dedicated brand entertainment manager. They do not need production experience — they need decision-making authority and brand fluency.</p>

  <p style="margin:0 0 12px 0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">Define your approval process.</strong> Decide upfront who approves creative milestones: concept, script/treatment, key cast, rough cut, and final cut. Keep the approval chain short. Too many approvers slows production and dilutes creative quality.</p>

  <p style="margin:0 0 12px 0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">Set brand guardrails, not a script.</strong> Give your producing partner clear guardrails — what the brand must never be associated with, what values must come through, what the tone should feel like — then let them create within those bounds. The more creative freedom you give, the better the content will be.</p>

  <p style="margin:0 0 12px 0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">Plan your amplification strategy.</strong> The content your producing partner creates is the centerpiece. But you should plan how your own marketing channels — social, email, PR, events, paid media — will amplify the content at launch and beyond. This is where your internal team adds the most value.</p>

  <p style="margin:0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">Budget for the full lifecycle.</strong> Production cost is not the only cost. Budget for marketing the content, creating social cutdowns, event activations, and ongoing distribution support. A good rule: allocate 15–25% of your production budget for launch and amplification.</p>
</td></tr>

<!-- Section 5 -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666">Step 5</p>
  <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:600;color:#fff">Find the Right Producing Partner</h2>
  <p style="margin:0 0 16px 0;font-size:15px;line-height:1.7;color:#ccc">This is the most important decision you will make. Here is what separates a real entertainment partner from a video production vendor:</p>
  <ul style="margin:0 0 16px 0;padding-left:20px;color:#ccc;font-size:15px;line-height:1.8">
    <li><strong style="color:#fff">They have produced real entertainment</strong> — series or films on actual platforms, not just corporate videos</li>
    <li><strong style="color:#fff">They lead with story, not brand prominence</strong> — if they promise your logo will be everywhere, run</li>
    <li><strong style="color:#fff">They think about distribution from day one</strong> — not "we'll figure it out in post"</li>
    <li><strong style="color:#fff">They are transparent about deal structures</strong> — ownership, rights, deliverables, and costs are all clear</li>
    <li><strong style="color:#fff">They have operational infrastructure</strong> — a team, equipment, post-production capability, and insurance</li>
    <li><strong style="color:#fff">They treat the first call as strategy, not sales</strong> — a good partner helps you think, not pressures you to sign</li>
  </ul>
</td></tr>

<!-- Section 6 -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666">Step 6</p>
  <h2 style="margin:0 0 12px 0;font-size:20px;font-weight:600;color:#fff">Plan Distribution Before You Produce</h2>
  <p style="margin:0 0 16px 0;font-size:15px;line-height:1.7;color:#ccc">Great content nobody sees is a failed investment. Before cameras roll, your distribution plan should answer:</p>
  <ul style="margin:0;padding-left:20px;color:#ccc;font-size:15px;line-height:1.8">
    <li>Where does the content premiere? (streaming, broadcast, YouTube, FAST channels, events)</li>
    <li>What is the windowing strategy? (first window exclusive → second window → broad availability)</li>
    <li>How does the brand amplify through its own channels?</li>
    <li>What territories will the content reach?</li>
    <li>What is the social and PR strategy around launch?</li>
  </ul>
</td></tr>

<!-- CTA -->
<tr><td style="padding:40px 0;border-top:1px solid #222" align="center">
  <h2 style="margin:0 0 12px 0;font-size:22px;font-weight:600;color:#fff">Ready to talk through your brand's path to screen?</h2>
  <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:#999">Book a free 30-minute strategy call with Pillar Productions. We will discuss your goals, the right format, realistic budgets, and concrete next steps. No pitch, no commitment.</p>
  <a href="${SCHEDULE_URL}" style="display:inline-block;padding:14px 32px;background:#fff;color:#000;font-size:14px;font-weight:600;text-decoration:none;border-radius:100px;letter-spacing:0.03em">Book a Free Strategy Call</a>
</td></tr>

<!-- Divider -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 4px 0;font-size:15px;line-height:1.7;color:#ccc"><strong style="color:#fff">What happens on the call:</strong></p>
  <ul style="margin:8px 0 0 0;padding-left:20px;color:#999;font-size:14px;line-height:1.8">
    <li>Clarity on whether entertainment is the right move for your brand</li>
    <li>Which format fits your goals and budget</li>
    <li>How the deal structure and process works</li>
    <li>Specific next steps tailored to your situation</li>
  </ul>
</td></tr>

<!-- Footer -->
<tr><td style="padding:32px 0;border-top:1px solid #222">
  <p style="margin:0 0 4px 0;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;color:#666">Pillar Productions</p>
  <p style="margin:0 0 12px 0;font-size:13px;color:#444">Tampa &middot; Abuja &middot; McAllen &middot; Jackson</p>
  <p style="margin:0;font-size:13px;color:#444">
    <a href="${SITE_URL}" style="color:#666;text-decoration:underline">pillarproductionsusa.com</a> &middot;
    <a href="${SITE_URL}/blog" style="color:#666;text-decoration:underline">Blog</a> &middot;
    <a href="${SITE_URL}/brands" style="color:#666;text-decoration:underline">For Brands</a> &middot;
    <a href="${SCHEDULE_URL}" style="color:#666;text-decoration:underline">Schedule a Call</a>
  </p>
</td></tr>

</table>
</td></tr>
</table>

</body>
</html>`;

  const text = `HOW TO GET YOUR BRAND ON SCREEN
A guide from Pillar Productions
================================

STEP 1: DECIDE WHAT YOU WANT ENTERTAINMENT TO DO FOR YOUR BRAND

Before you pick a format or a partner, get clear on what you want the content to accomplish:
- Brand awareness — reach audiences who have never heard of you
- Brand equity — shift how people perceive your brand
- Audience building — create a loyal audience around content, not campaigns
- Cultural relevance — position your brand as a cultural participant
- Content library — build assets that work across channels for years

STEP 2: CHOOSE THE RIGHT FORMAT

- Docuseries: $15K–$75K/episode. Best entry point. Real stories, real people.
- Competition/Reality: $50K–$200K/episode. Great for sports, food, fitness brands.
- Scripted Series: $100K–$500K+/episode. Highest ceiling for cultural impact.
- Feature Film: $250K–$2M+. Highest commitment, highest cultural impact.

STEP 3: UNDERSTAND DEAL STRUCTURES

1. Brand-funded, producer-owned (recommended): You fund, they own and distribute. Lower risk.
2. Co-owned partnership: Shared ownership and revenue. Best for multi-season strategies.
3. Work-for-hire: You own everything. Highest control, highest risk.

STEP 4: BUILD YOUR INTERNAL ENTERTAINMENT CAPABILITY

- Assign an entertainment lead (CMO, head of content, or dedicated manager)
- Define your approval process — keep it short
- Set brand guardrails, not a script — let the creative team create
- Plan your amplification strategy across your own channels
- Budget for the full lifecycle (add 15–25% of production budget for launch)

STEP 5: FIND THE RIGHT PRODUCING PARTNER

Look for:
- Real entertainment experience (series on actual platforms, not just corporate videos)
- Story-first philosophy (not brand prominence promises)
- Distribution thinking from day one
- Transparent deal structures
- Operational infrastructure
- Strategy-first conversations, not sales pitches

STEP 6: PLAN DISTRIBUTION BEFORE YOU PRODUCE

Answer these before cameras roll:
- Where does the content premiere?
- What is the windowing strategy?
- How does the brand amplify through its own channels?
- What territories will the content reach?
- What is the social and PR strategy around launch?

================================

READY TO TALK THROUGH YOUR BRAND'S PATH TO SCREEN?

Book a free 30-minute strategy call: ${SCHEDULE_URL}

We will discuss your goals, the right format, realistic budgets, and concrete next steps. No pitch, no commitment.

—
Pillar Productions
Tampa · Abuja · McAllen · Jackson
${SITE_URL}`;

  return { subject, html, text };
}
