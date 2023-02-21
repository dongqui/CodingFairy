import Script from 'next/script';

export default function GTagScript() {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-0S0356VG1T" />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0S0356VG1T');
          `,
        }}
      />
    </>
  );
}
