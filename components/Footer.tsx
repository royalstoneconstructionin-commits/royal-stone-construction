import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d1728] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-black">Royal Stone Construction</h2>
            <p className="mt-5 max-w-sm leading-7 text-slate-300">Architecture, construction with material, interior design and project planning for residential and commercial spaces.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3 text-slate-300">
              <Link href="#home" className="hover:text-red-400">Home</Link>
              <Link href="#services" className="hover:text-red-400">Services</Link>
              <Link href="#why-us" className="hover:text-red-400">Why Us</Link>
              <Link href="#lead-form" className="hover:text-red-400">Get Quote</Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Services</h3>
            <div className="mt-5 flex flex-col gap-3 text-slate-300">
              <span>Architecture</span>
              <span>Construction with Material</span>
              <span>Interior Design</span>
              <span>Turnkey Projects</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="mt-5 space-y-4 text-slate-300">
              <div className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-red-500" /><span>Patna, Bihar, India</span></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-red-500" /><a href="tel:+919876543210">+91 98765 43210</a></div>
              <div className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-red-500" /><a href="mailto:info@royalstoneconstruction.com" className="break-all">info@royalstoneconstruction.com</a></div>
            </div>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition hover:bg-red-500"><Icon className="h-5 w-5" /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400">© {new Date().getFullYear()} Royal Stone Construction. All Rights Reserved.</div>
      </div>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"><MessageCircle /></a>
    </footer>
  );
}
