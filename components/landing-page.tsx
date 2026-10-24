import { Faq } from "@/components/faq";
import { SiteHeader } from "@/components/site-header";
import { downloadHref, whatsappHref, whatsappNumber } from "@/lib/config";

function WhatsAppLink({ className = "btn btn-line", children = "WhatsApp" }: { className?: string; children?: string }) {
  return (
    <a className={className} data-track="whatsapp_click" href={whatsappHref} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function DownloadLink({ className = "btn btn-amber", children = "Download for Windows" }: { className?: string; children?: string }) {
  return (
    <a className={className} data-track="download_click" href={downloadHref} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Mark({ name }: { name: string }) {
  const paths: Record<string, string> = {
    bill: "M7 3h7l3 3v15H7zM14 3v4h4M9 12h6M9 16h6",
    box: "M3 8l9-4 9 4-9 4zM3 8v8l9 4 9-4V8M12 12v8",
    grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
    people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3.5 19c.6-2.4 2.6-4 5.5-4s4.9 1.6 5.5 4M14 15c1.8.2 3.3 1.3 4 3.2",
    cash: "M3 7h18v10H3zM3 11h18M7 14h4",
    move: "M7 8H4v12h12v-3M9 4h11v11H9z",
    chart: "M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6",
    lang: "M4 6h9M8.5 6c0 6-3 9-5 10M7 10c.8 1.6 2.2 3.2 4.2 4.2M13 18l3.2-8L19.5 18M14.2 16h4.2",
    pc: "M4 5h16v10H4zM8 19h8M12 15v4",
    screens: "M3 5h11v8H3zM14 9h7v8h-7zM6 17h5M16.5 17h2",
    roles: "M12 3l7 3v6c0 4.2-2.8 7.2-7 8-4.2-.8-7-3.8-7-8V6z",
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const checks = [
  "Sales, returns, and printed bills",
  "Purchases, stock, and packs",
  "Cash, bank, and ledgers",
  "Owner, cashier, and accountant",
];

const features: [string, string, string][] = [
  ["bill", "Sales and sale returns", "Sell, record a return, and print on thermal 80mm or A4."],
  ["box", "Purchases and purchase returns", "Record purchases and purchase returns."],
  ["grid", "Products, packs, and stock", "Keep products, packs, and stock."],
  ["people", "Customers and vendors", "Keep customers and vendors for the shop."],
  ["cash", "Cash, bank, and ledgers", "Cash, bank, and ledgers for the shop."],
  ["move", "Receive, pay, expense, and income", "Record money received, money paid, expenses, and income."],
  ["chart", "Dashboard and reports", "A dashboard, and reports for sales, purchases, profit, and stock."],
  ["lang", "English and Urdu", "Use the app in English or Urdu."],
  ["pc", "Works when the internet is slow", "The shop keeps working on the PC when the internet is slow."],
  ["screens", "A second PC", "A second PC can join the same shop with the shop code."],
  ["roles", "Roles", "Owner, cashier, and accountant. Each person sees the screens their role allows."],
];

const steps = [
  ["Install on Windows", "Download Agri Soft Pro and install it on the shop computer. The installed program updates itself from that public download. This website only links there. It does not host the installer file."],
  ["Use it on that PC", "Use the shop on that computer. A new install can be tried, then activated as Pro. Plans are monthly, yearly, or forever. Activation is done inside the app by contacting SoftPro on WhatsApp. This website does not sell plans or take payment."],
  ["Add a second computer", "A new empty computer can join the same shop once, using an 8-character shop code. After that, people sign in with a username and password only."],
];

const roles: [string, string, string][] = [
  ["roles", "Owner", "Sees the full shop."],
  ["bill", "Cashier", "Can sell, handle customers, and see allowed reports."],
  ["chart", "Accountant", "Can see accounts, vouchers, and reports."],
];

export function LandingPage() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>

      <SiteHeader />

      <main id="content">
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <p className="kicker">SoftPro</p>
              <h1>Shop billing, stock, and accounts for agri businesses.</h1>
              <p className="lede">
                Agri Soft Pro is a Windows desktop app for an agri shop, and it runs on the shop computer.
              </p>
              <div className="hero-actions">
                <DownloadLink />
                <WhatsAppLink className="btn btn-ghost" />
              </div>
              <p className="fine">Agri Soft Pro is a product of SoftPro.</p>
            </div>
            <aside className="hero-panel">
              <img src="/images/logo-mark.png" width={512} height={512} alt="" />
              <p className="panel-title">One shop. One set of records.</p>
              <ul className="checks">
                {checks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="about-band" id="about" aria-labelledby="about-title">
          <div className="wrap about-grid">
            <div className="about-panel">
              <img src="/images/logo-mark.png" width={512} height={512} alt="" />
              <p>Built in Pakistan for agri shops.</p>
            </div>
            <div className="about-copy">
              <p className="kicker kicker-dark">About</p>
              <h2 id="about-title">About SoftPro</h2>
              <p>
                SoftPro makes Agri Soft Pro for agri shops — billing, stock, and accounts in one desktop app, built in Pakistan.
              </p>
              <ul className="ticks">
                <li>Windows desktop app</li>
                <li>One shop, one set of records</li>
                <li>Records stay on the PC</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="does" aria-labelledby="does-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker kicker-dark">The work</p>
              <h2 id="does-title">What it does</h2>
              <p>For the daily work of one agri shop.</p>
            </div>
            <ul className="card-grid">
              {features.map(([icon, title, body]) => (
                <li key={title}>
                  <span className="mark-line"><Mark name={icon} /></span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="start" aria-labelledby="start-title">
          <div className="wrap">
            <div className="section-head">
              <p className="kicker kicker-dark">Start</p>
              <h2 id="start-title">How a shop starts</h2>
              <p>Three steps. No payment on this website.</p>
            </div>
            <ol className="step-grid">
              {steps.map(([title, body], index) => (
                <li key={title}>
                  <span className="step-no">{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
            <div className="hero-actions">
              <DownloadLink />
              <WhatsAppLink className="btn btn-line" />
            </div>
          </div>
        </section>

        <section className="section section-tint" id="who" aria-labelledby="who-title">
          <div className="wrap who-grid">
            <div>
              <p className="kicker kicker-dark">People</p>
              <h2 id="who-title">Who uses it</h2>
              <p>
                Shop owners, cashiers, and accountants in Pakistan use one shop and one set of records.
                Each person signs in and sees only the screens their role allows. A cashier does not get a private copy of the bills.
              </p>
            </div>
            <ul className="role-list">
              {roles.map(([icon, title, body]) => (
                <li key={title}>
                  <span className="mark-box"><Mark name={icon} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="data-band" id="data" aria-labelledby="data-title">
          <div className="wrap">
            <p className="kicker">Your data</p>
            <h2 id="data-title">Records stay on the shop computer.</h2>
            <p>
              The owner can take a backup from inside the app. SoftPro does not sell or share shop data.
            </p>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-wrap">
            <p className="kicker kicker-dark">Questions</p>
            <h2 id="faq-title">Questions shop owners ask</h2>
            <Faq />
          </div>
        </section>

        <section className="close">
          <div className="wrap close-inner">
            <h2>Ready to put it on the shop PC?</h2>
            <p>Download Agri Soft Pro for Windows, or message SoftPro on WhatsApp.</p>
            <div className="hero-actions">
              <DownloadLink />
              <WhatsAppLink className="btn btn-ghost" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <p className="footer-brand">SoftPro</p>
            <p>© 2026 SoftPro. All rights reserved.</p>
            <p className="analytics-note">This site counts visits with Google Analytics.</p>
          </div>
          <div className="footer-contact">
            <WhatsAppLink className="btn btn-amber" />
            <DownloadLink className="btn btn-ghost" />
            <p>WhatsApp {whatsappNumber}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
