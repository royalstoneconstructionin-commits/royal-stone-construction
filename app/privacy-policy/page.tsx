import LegalPage from "@/components/LegalPage";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("/privacy-policy");

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy">
    <section><h2 className="text-xl font-bold text-slate-950">Enquiry information</h2><p>The enquiry form collects your name, mobile number, city and requirement. If you select a package or use the calculator, your chosen package and design area are included. Optional project details are included only when you provide them.</p></section>
    <section><h2 className="text-xl font-bold text-slate-950">How enquiries are handled</h2><p>The website sends enquiries to its server for validation and stores accepted enquiries in Supabase. The existing administration tools allow authorized staff to view and manage enquiries so the team can discuss your requirements.</p></section>
    <section><h2 className="text-xl font-bold text-slate-950">External services</h2><p>Phone, email, WhatsApp, Instagram, LinkedIn and Google Maps links open the relevant service. Information you send through those services is handled under their own policies. Administrator sign-in uses Supabase authentication.</p></section>
    <section><h2 className="text-xl font-bold text-slate-950">Questions about your information</h2><p>Contact the team using the details below to ask about an enquiry or request a correction or deletion. Please avoid sending sensitive documents through the initial enquiry form.</p></section>
  </LegalPage>;
}
