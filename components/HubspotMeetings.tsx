import Script from "next/script";

// HubSpot Meetings-embed. De div met class `meetings-iframe-container` + data-src
// wordt door het HubSpot-script omgezet naar een booking-iframe. Script via
// next/script (afterInteractive), niet als los <script> in JSX.
export default function HubspotMeetings({
  src = "https://meetings-eu1.hubspot.com/sjoerd-beljon/discovery-meeting?embed=true",
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="meetings-iframe-container" data-src={src} style={{ minHeight: 640 }} />
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
