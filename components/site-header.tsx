"use client";

import { useState } from "react";
import { downloadHref, whatsappHref, whatsappNumber } from "@/lib/config";

const links = [
  ["#does", "What it does"],
  ["#start", "How it starts"],
  ["#who", "Who uses it"],
  ["#faq", "Questions"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="logo-block" href="#top" onClick={close}>
        <img src="/images/logo-mark.png" width={512} height={512} alt="" />
        <span>Agri Soft Pro</span>
      </a>
      <div className="header-bar">
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Page">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="nav-extra" data-track="whatsapp_click" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp {whatsappNumber}
          </a>
          <a className="nav-extra btn btn-amber" data-track="download_click" href={downloadHref} target="_blank" rel="noopener noreferrer">
            Download for Windows
          </a>
        </nav>
        <a className="header-phone" data-track="whatsapp_click" href={whatsappHref} target="_blank" rel="noopener noreferrer">
          WhatsApp {whatsappNumber}
        </a>
        <a className="btn btn-amber btn-small header-download" data-track="download_click" href={downloadHref} target="_blank" rel="noopener noreferrer">
          Download for Windows
        </a>
        <button
          type="button"
          className={open ? "menu-btn open" : "menu-btn"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-icon" />
          <span className="sr">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
    </header>
  );
}
