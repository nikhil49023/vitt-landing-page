/* ─────────────────────────────────────────────────────────────
   VITT Web Landing Page — 60 FPS Micro-Interactions & Live Feed
   ───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('liveFeedContainer');
  if (!container) return;

  const sampleNotifications = [
    { title: 'Paid ₹420 at Starbucks Indiranagar', source: 'Google Pay · Notification Listener', category: 'Food & Dining', amount: '- ₹420.00', type: 'debit' },
    { title: 'Salary Credited ₹1,45,000', source: 'HDFC Bank Notification', category: 'Income', amount: '+ ₹1,45,000.00', type: 'credit' },
    { title: 'CRED Card Bill Paid ₹18,450', source: 'CRED App Notification', category: 'Utility Bill', amount: '- ₹18,450.00', type: 'debit' },
    { title: 'Zomato Order ₹380', source: 'Paytm Notification', category: 'Food & Dining', amount: '- ₹380.00', type: 'debit' },
    { title: 'SIP Mutual Fund Installed ₹5,000', source: 'Zerodha Coin Notification', category: 'Investments', amount: '- ₹5,000.00', type: 'debit' }
  ];

  let currentFeed = [...sampleNotifications.slice(0, 3)];

  function renderFeed() {
    container.innerHTML = currentFeed.map(item => `
      <div class="feed-item">
        <div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge-tag ${item.type === 'credit' ? 'badge-credit' : 'badge-debit'}">${item.type.toUpperCase()}</span>
            <strong style="font-size: 0.95rem;">${item.title}</strong>
          </div>
          <div class="mono" style="font-size: 0.75rem; color: var(--text-faint); margin-top: 4px;">
            ${item.source} · Auto: ${item.category}
          </div>
        </div>
        <div class="mono" style="font-weight: 700; color: ${item.type === 'credit' ? 'var(--emerald)' : 'var(--text-main)'}">
          ${item.amount}
        </div>
      </div>
    `).join('');
  }

  renderFeed();

  // Rotate feed every 3 seconds for active kinetic visual feel
  let itemIndex = 3;
  setInterval(() => {
    const nextItem = sampleNotifications[itemIndex % sampleNotifications.length];
    currentFeed.unshift(nextItem);
    if (currentFeed.length > 3) currentFeed.pop();
    renderFeed();
    itemIndex++;
  }, 3000);

  // Typewriter Animation for Vector Search Widget
  const queries = [
    '"Where did I spend money on coffee?"',
    '"Show total Swiggy & Zomato spend last month"',
    '"Calculate my 60-day cashflow runway"',
    '"Find all SIP mutual fund deductions"'
  ];

  const target = document.getElementById('typewriterTarget');
  if (target) {
    let qIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentQuery = queries[qIdx];
      
      if (isDeleting) {
        target.innerHTML = currentQuery.substring(0, charIdx--) + '<span class="cursor-blink"></span>';
      } else {
        target.innerHTML = currentQuery.substring(0, charIdx++) + '<span class="cursor-blink"></span>';
      }

      let speed = isDeleting ? 30 : 60;

      if (!isDeleting && charIdx === currentQuery.length + 1) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        qIdx = (qIdx + 1) % queries.length;
        speed = 400;
      }

      setTimeout(typeLoop, speed);
    }

    typeLoop();
  }
});
