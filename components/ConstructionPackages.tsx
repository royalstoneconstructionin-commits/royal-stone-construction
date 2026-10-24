import Link from "next/link";
import styles from "./ConstructionPackages.module.css";
import { constructionCategories, constructionEnquiryHref, constructionPackages, constructionSpecificationNote } from "@/lib/construction-packages";

export default function ConstructionPackages() {
  return (
    <section id="construction-packages" aria-labelledby="construction-packages-heading" className={`${styles.section} min-w-0 scroll-mt-24 py-12 sm:py-16`}>
      <div className="site-container min-w-0">
        <div className="rounded-t-xl bg-[#282828] px-5 py-7 text-white sm:px-8 sm:py-9">
          <h2 id="construction-packages-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">Our Construction Packages</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-200">Compare our Silver, Gold and Platinum packages to choose the right specifications for your home.</p>
        </div>
        <p id="construction-packages-scroll-hint" className="bg-gray-100 px-4 py-3 text-sm text-gray-700 lg:hidden">Swipe to compare packages.</p>
        <div className={`${styles.scroll} overflow-x-auto overscroll-x-contain border border-gray-200`} role="region" aria-labelledby="construction-packages-heading" aria-describedby="construction-packages-scroll-hint" tabIndex={0}>
          <table className={`${styles.table} table-fixed border-separate border-spacing-0 text-left text-sm leading-6 text-gray-800`}>
            <caption className="sr-only">Construction package rates and full specification comparison</caption>
            <colgroup><col className={styles.featureColumn} />{constructionPackages.map(pkg => <col key={pkg.name} className={styles.packageColumn} />)}</colgroup>
            <thead>
              <tr className="bg-brand-400 text-gray-950">
                <th scope="col" className={`${styles.cell} ${styles.stickyCell} sticky left-0 z-20 border-b border-r border-brand-500 bg-brand-400 font-bold`}>Features</th>
                {constructionPackages.map(pkg => <th key={pkg.name} scope="col" className={`${styles.cell} border-b border-r border-brand-500 last:border-r-0`}><span className="block text-lg font-bold">{pkg.name}</span><span className="mt-1 block text-base font-semibold">{pkg.rate}</span></th>)}
              </tr>
            </thead>
            {constructionCategories.map((category, categoryIndex) => (
              <tbody key={category.name} aria-labelledby={`construction-category-${categoryIndex}`}>
                <tr><th id={`construction-category-${categoryIndex}`} scope="rowgroup" colSpan={4} className="border-b border-gray-300 bg-gray-200 p-0"><div className={styles.categoryContent}><span className="font-bold">{category.name}</span>{category.note && <span className={styles.categoryNote}>{category.note}</span>}</div></th></tr>
                {category.rows.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className={`${styles.cell} ${styles.stickyCell} sticky left-0 z-10 border-b border-r border-gray-200 align-top font-bold ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>{row.feature}</th>
                    {row.specifications.map((specification, packageIndex) => <td key={packageIndex} className={`${styles.cell} border-b border-r border-gray-200 align-top last:border-r-0`}>{specification}</td>)}
                  </tr>
                ))}
              </tbody>
            ))}
            <tfoot><tr className="bg-white"><th scope="row" className={`${styles.cell} ${styles.stickyCell} sticky left-0 z-10 border-r border-gray-200 bg-white align-top font-bold`}>Enquire</th>{constructionPackages.map(pkg => <td key={pkg.name} className={`${styles.cell} border-r border-gray-200 align-top last:border-r-0`}><Link href={constructionEnquiryHref(pkg.name)} className={`${styles.quote} inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700`}>Get {pkg.name} Quote</Link></td>)}</tr></tfoot>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{constructionSpecificationNote}</p>
      </div>
    </section>
  );
}
