"use client";

import { useState } from "react";

const items = [
  {
    q: "Is this a website I log into?",
    a: "No. Agri Soft Pro is a Windows desktop app. It installs on the shop computer and runs there.",
  },
  {
    q: "Where do the shop records stay?",
    a: "On that computer. The owner can take a backup from inside the app. SoftPro does not sell or share shop data.",
  },
  {
    q: "Can a second computer join the shop?",
    a: "A new empty computer can join the same shop once, using an 8-character shop code. After that, people sign in with a username and password only.",
  },
  {
    q: "How does Pro activation work?",
    a: "A new install can be tried, then activated as Pro inside the app by contacting SoftPro on WhatsApp. Plans are monthly, yearly, or forever. This website does not sell plans or take payment.",
  },
  {
    q: "What if the internet is slow?",
    a: "The shop keeps working on the PC when the internet is slow.",
  },
  {
    q: "Which languages are in the app?",
    a: "English and Urdu.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className={isOpen ? "faq-item open" : "faq-item"} key={item.q}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="faq-mark" aria-hidden="true">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <p className="faq-a">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
