import Script from "next/script";
import WebVitals from "./WebVitals";

// QwickSite's GA4 property, shared with the dashboard at app.qwicksite.com so one visitor is followed from the landing page into sign-up.
// The env var still overrides it; `next dev` sends nothing unless the env var is set.
const DEFAULT_GA_MEASUREMENT_ID = "G-5L0E8HPPKF";
const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ||
  (process.env.NODE_ENV === "production" ? DEFAULT_GA_MEASUREMENT_ID : undefined);
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();
// QwickSite's Meta Pixel (Meta ads), shared with the dashboard at app.qwicksite.com, which also sends CompleteRegistration on sign-up.
// Same rule as GA4: the env var overrides it, and `next dev` sends nothing unless the env var is set.
const DEFAULT_META_PIXEL_ID = "1671311454725306";
const metaPixelId =
  process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ||
  (process.env.NODE_ENV === "production" ? DEFAULT_META_PIXEL_ID : undefined);
const validMetaPixelId = metaPixelId && /^[0-9]+$/.test(metaPixelId);
const validGaId = gaMeasurementId && /^G-[A-Z0-9]+$/.test(gaMeasurementId);
const validClarityId = clarityProjectId && /^[a-z0-9]+$/i.test(clarityProjectId);

export default function Analytics() {
  if (!validGaId && !validClarityId && !validMetaPixelId) {
    return null;
  }

  return (
    <>
      {validGaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="qwicksite-ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
            `}
          </Script>
          <WebVitals />
        </>
      ) : null}

      {validMetaPixelId ? (
        <>
          <Script id="qwicksite-meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}

      {validClarityId ? (
        <Script id="qwicksite-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");
          `}
        </Script>
      ) : null}
    </>
  );
}

