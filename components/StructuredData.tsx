import { absoluteUrl, siteName, siteUrl } from "@/lib/seo";
import { businessContact } from "@/lib/business-contact";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: `${siteUrl}/`,
        logo: absoluteUrl("/logo.png"),
        telephone: businessContact.phoneDisplay,
        email: businessContact.email,
        sameAs: [businessContact.instagramHref, businessContact.linkedinHref],
        description: "Architecture, construction with material and interior design services based in Patna, Bihar, India.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: `${siteUrl}/`,
        inLanguage: "en-IN",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
