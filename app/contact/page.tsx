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
        style={{ backgroundImage: "linear-gradient(135deg, rgba(11,61,46,0.92) 0%, rgba(24,79,54,0.92) 100%), url('/images/bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(15,23,42,0.04)', color: '#1B4332', border: '1px solid rgba(27,67,50,0.08)' }}>
            <Sparkles size={13} /> Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Let&apos;s Talk Clean Spaces
          </h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Reach out for a quote, a quick question, or to discuss the right cleaning plan for your home or business.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <a href="tel:7752293115" className="service-card rounded-2xl p-6 bg-[#F8F7FF] border border-[rgba(45,106,79,0.1)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)', color: 'white' }}>
                <Phone size={22} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>Call Us</h2>
              <p className="text-slate-600 text-sm mb-4">Speak directly with our team.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#1B4332]">775-229-3115 <ArrowRight size={16} /></span>
            </a>

            <Link href="/quote" className="service-card rounded-2xl p-6 bg-[#F8F7FF] border border-[rgba(45,106,79,0.1)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)', color: 'white' }}>
                <Sparkles size={22} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>Request a Quote</h2>
              <p className="text-slate-600 text-sm mb-4">Use the quote form and we&apos;ll reply within 24 hours.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#1B4332]">Open Quote Form <ArrowRight size={16} /></span>
            </Link>

            <div className="service-card rounded-2xl p-6 bg-[#F8F7FF] border border-[rgba(45,106,79,0.1)]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)', color: 'white' }}>
                <MapPin size={22} />
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>Service Area</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">Burswood Drive, Auckland, New Zealand</p>
              <p className="text-slate-600 text-sm leading-relaxed">We provide cleaning services for homes and businesses across the local area.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-white p-6 text-left shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
              <div className="flex items-center gap-2 text-[#1B4332] font-semibold mb-3"><Clock3 size={16} /> Open Hours</div>
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
            <a href="tel:+64226920695" className="rounded-2xl bg-white p-6 text-left shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
              <div className="flex items-center gap-2 text-[#1B4332] font-semibold mb-3"><Phone size={16} /> Contact</div>
              <p className="text-sm text-slate-600 mb-2">+64 22 692 0695</p>
              <p className="text-sm text-slate-600">ljcleaningsandmaintenance@gmail.com</p>
            </a>
            <Link href="/quote" className="rounded-2xl bg-white p-6 text-left shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
              <div className="flex items-center gap-2 text-[#1B4332] font-semibold mb-3"><Sparkles size={16} /> Book Now</div>
              <p className="text-sm text-slate-600 mb-3">Use our quote form for a quick response.</p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#1B4332]">Open Quote Form <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}