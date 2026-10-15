import LegalPage from "@/components/LegalPage";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("/terms");

export default function TermsPage() {
  return <LegalPage title="Website Terms">
    <section><h2 className="text-xl font-bold text-slate-950">Information and enquiries</h2><p>This website presents Royal Stone Construction services, design packages and project information. Submitting an enquiry asks the team to discuss your requirements; it does not confirm a booking, project start date or construction agreement.</p></section>
    <section><h2 className="text-xl font-bold text-slate-950">Package prices and estimates</h2><p>Package inclusions and rates are shown for the selected city. The calculator multiplies the entered design area by the selected package rate. This is an estimate. Final quotation depends on confirmed billing area, project scope and applicable charges. Construction with material is priced separately.</p></section>
    <section><h2 className="text-xl font-bold text-slate-950">Scope confirmation</h2><p>Confirm the applicable area, drawings, deliverables, revisions, timeline and charges with the team before agreeing to proceed. Any project-specific quotation or agreement should record the confirmed scope.</p></section>
    <section><h2 className="text-xl font-bold text-slate-950">Projects and external links</h2><p>Images labelled Illustrative Concept represent design ideas and do not claim completed customer work. External profile and map links lead to services outside this website.</p></section>
  </LegalPage>;
}
