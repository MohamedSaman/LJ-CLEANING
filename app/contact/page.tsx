import Link from 'next/link'
import { ArrowRight, Clock3, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | LJ Cleaning & Maintenance',
  description: 'Contact LJ Cleaning & Maintenance to request a quote, ask a question, or book a cleaning service.',
}

export default function ContactPage() {
  return (
    <>
      <section
        className="pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(30,27,75,0.92) 0%, rgba(49,46,129,0.92) 100%), url('/images/bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(167,139,250,0.15)', color: '#c4b5fd', border: '1px solid rgba(167,139,250,0.2)' }}>
            <Sparkles size={13} /> Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Let&apos;s Talk Clean Spaces
          </h1>
          <p className="text-purple-300 text-lg max-w-xl mx-auto">
            Reach out for a quote, a quick question, or to discuss the right cleaning plan for your home or business.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <a href="tel:7752293115" className="service-card rounded-2xl p-6 bg-[#F8F7FF] border border-[rgba(107,70,193,0.1)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)', color: 'white' }}>
                <Phone size={22} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>Call Us</h2>
              <p className="text-slate-600 text-sm mb-4">Speak directly with our team.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#6B46C1]">775-229-3115 <ArrowRight size={16} /></span>
            </a>

            <Link href="/quote" className="service-card rounded-2xl p-6 bg-[#F8F7FF] border border-[rgba(107,70,193,0.1)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)', color: 'white' }}>
                <Sparkles size={22} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>Request a Quote</h2>
              <p className="text-slate-600 text-sm mb-4">Use the quote form and we&apos;ll reply within 24 hours.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#6B46C1]">Open Quote Form <ArrowRight size={16} /></span>
            </Link>

            <div className="service-card rounded-2xl p-6 bg-[#F8F7FF] border border-[rgba(107,70,193,0.1)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)', color: 'white' }}>
                <MapPin size={22} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>Service Area</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">Burswood Drive, Auckland, New Zealand</p>
              <p className="text-slate-600 text-sm leading-relaxed">We provide cleaning services for homes and businesses across the local area.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-white p-6 text-left shadow-sm" style={{ border: '1px solid rgba(107,70,193,0.1)' }}>
              <div className="flex items-center gap-2 text-[#6B46C1] font-semibold mb-3"><Clock3 size={16} /> Open Hours</div>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>Monday 7:00 AM - 10:00 PM</li>
                <li>Tuesday 7:00 AM - 5:00 PM</li>
                <li>Wednesday 7:00 AM - 10:00 PM</li>
                <li>Thursday 7:00 AM - 10:00 PM</li>
                <li>Friday 7:00 AM - 10:00 PM</li>
                <li>Saturday 7:00 AM - 10:00 PM</li>
                <li>Sunday 7:00 AM - 10:00 PM</li>
              </ul>
            </div>
            <a href="tel:+64226920695" className="rounded-2xl bg-white p-6 text-left shadow-sm" style={{ border: '1px solid rgba(107,70,193,0.1)' }}>
              <div className="flex items-center gap-2 text-[#6B46C1] font-semibold mb-3"><Phone size={16} /> Contact</div>
              <p className="text-sm text-slate-600 mb-2">+64 22 692 0695</p>
              <p className="text-sm text-slate-600">ljcleaningsandmaintenance@gmail.com</p>
            </a>
            <Link href="/quote" className="rounded-2xl bg-white p-6 text-left shadow-sm" style={{ border: '1px solid rgba(107,70,193,0.1)' }}>
              <div className="flex items-center gap-2 text-[#6B46C1] font-semibold mb-3"><Sparkles size={16} /> Book Now</div>
              <p className="text-sm text-slate-600 mb-3">Use our quote form for a quick response.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#6B46C1]">Open Quote Form <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}