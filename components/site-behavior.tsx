"use client";

import { useEffect } from "react";
import { gaMeasurementId, isRealGaId, isSiteEvent, type SiteEventName } from "@/lib/config";

let pageViewSent = false;
let loadedGaId = "";

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

function loadAnalytics() {
  if (!isRealGaId(gaMeasurementId) || loadedGaId === gaMeasurementId) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  window.gtag("js", new Date());
  window.gtag("config", gaMeasurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`;
  document.head.appendChild(script);
  loadedGaId = gaMeasurementId;
}

function trackClick(name: "whatsapp_click" | "download_click") {
  if (!isRealGaId(gaMeasurementId)) return;
  loadAnalytics();
  window.gtag?.("event", name, { transport_type: "beacon" });
}

function storeEvent(name: SiteEventName) {
  const body = JSON.stringify({ event: name });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/events", new Blob([body], { type: "application/json" }));
    return;
  }
  void fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  });
}

export function SiteBehavior() {
  useEffect(() => {
    loadAnalytics();
    if (!pageViewSent) {
      pageViewSent = true;
      storeEvent("page_view");
    }

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const tracked = target.closest<HTMLElement>("[data-track]")?.dataset.track;
      if (tracked && isSiteEvent(tracked) && tracked !== "page_view") {
        trackClick(tracked);
        storeEvent(tracked);
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
