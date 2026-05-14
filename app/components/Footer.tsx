import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Mail, Phone, Sparkles, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#191970' }}>
      {/* CTA Banner */}
      <div
        className="border-b border-purple-700/40"
        style={{ background: '#ffffff' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#1E1B4B] text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              Ready for a Spotless Space?
            </h3>
            <p className="text-slate-600 text-sm">Join hundreds of happy clients across residential and commercial properties.</p>
          </div>
          <Link
            href="/quote"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}
          >
            <Sparkles size={16} />
            Book my cleaning
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.jpg" alt="LJ Cleaning logo" width={36} height={36} className="w-9 h-9 rounded-xl object-cover" />
              <div>
                <span className="text-white font-bold text-lg block" style={{ fontFamily: 'var(--font-display)' }}>LJ Cleaning</span>
                <span className="text-purple-300 text-xs tracking-widest uppercase">& Maintenance</span>
              </div>
            </Link>
            <p className="text-purple-300 text-sm leading-relaxed mb-5">
              Professional cleaning and maintenance services for homes and businesses. We take pride in every detail.
            </p>
            {/* Social */}
            <a
              href="https://www.facebook.com/share/18qsxHhZXN/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
              style={{ background: '#1877F2' }}
            >
              <Facebook size={16} />
              Follow on Facebook
            </a>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Open Hours</h4>
            <ul className="space-y-2 text-sm text-purple-300">
              <li>Monday 7:00 AM - 10:00 PM</li>
              <li>Tuesday 7:00 AM - 5:00 PM</li>
              <li>Wednesday 7:00 AM - 10:00 PM</li>
              <li>Thursday 7:00 AM - 10:00 PM</li>
              <li>Friday 7:00 AM - 10:00 PM</li>
              <li>Saturday 7:00 AM - 10:00 PM</li>
              <li>Sunday 7:00 AM - 10:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-purple-300 text-sm">
                <Phone size={15} className="mt-0.5 shrink-0 text-purple-400" />
                <span>+64 22 692 0695</span>
              </li>
              <li className="flex items-start gap-3 text-purple-300 text-sm">
                <Mail size={15} className="mt-0.5 shrink-0 text-purple-400" />
                <span>ljcleaningsandmaintenance@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-purple-300 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0 text-purple-400" />
                <span>Burswood Drive, Auckland, New Zealand</span>
              </li>
            </ul>
            <Link
              href="/quote"
              className="mt-5 inline-block px-5 py-2.5 rounded-full border border-purple-500 text-purple-200 text-sm hover:bg-purple-700/30 transition-colors"
            >
              Book my cleaning →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-purple-400 text-xs">
          <p>© {new Date().getFullYear()} LJ Cleaning &amp; Maintenance. All rights reserved.</p>
          <p>Built with care for a spotless experience.</p>
        </div>
      </div>
    </footer>
  )
}
