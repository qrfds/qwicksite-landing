"use client";

import { useEffect } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
const STORAGE_KEY = "qs_landing_utm";
const APP_HOST = "app.qwicksite.com";

function readStored(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

/**
 * Remembers the campaign values (utm_*) the visitor landed with and adds them to every link to the app
 * (app.qwicksite.com), so a sign-up from a reel, post or video is stored with its source even when the
 * visitor browses other pages first. The app only reads utm_* off its own landing URL, so without this
 * the plain "Register" buttons would lose the source.
 */
export default function CampaignLinks() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fresh: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) fresh[key] = value;
    }
    // A new campaign on this visit replaces the old one (last touch within the session).
    const utm = Object.keys(fresh).length ? fresh : readStored();
    if (Object.keys(fresh).length) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
      } catch {
        // storage blocked: links on this page are still decorated below
      }
    }
    if (!Object.keys(utm).length) return;

    const decorate = () => {
      document.querySelectorAll<HTMLAnchorElement>(`a[href*="${APP_HOST}"]`).forEach((a) => {
        try {
          const url = new URL(a.href);
          if (url.hostname !== APP_HOST) return;
          let changed = false;
          for (const [key, value] of Object.entries(utm)) {
            if (!url.searchParams.has(key)) {
              url.searchParams.set(key, value);
              changed = true;
            }
          }
          if (changed) a.href = url.toString();
        } catch {
          // malformed href: leave as is
        }
      });
    };

    decorate();
    const observer = new MutationObserver(decorate);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
