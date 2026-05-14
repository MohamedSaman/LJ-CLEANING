import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, CheckCircle, Sparkles, Shield, Clock, ThumbsUp } from 'lucide-react'
import type { Metadata } from 'next'
import { SERVICES, STATS, TICKER, SERVICE_IMAGES, DEFAULT_SERVICE_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'LJ Cleaning & Maintenance | Professional Cleaning Services',
  description: 'Spotless homes and offices guaranteed. LJ Cleaning & Maintenance delivers expert residential and commercial cleaning. Get your free quote today.',
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 float-blob pointer-events-none z-10"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 float-blob pointer-events-none z-10"
          style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)', transform: 'translate(-30%, 30%)', animationDelay: '3s' }} />

        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-24 sm:px-6 lg:px-8 md:pt-28 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

            {/* Left: Copy */}
            <div>
              <div className="fade-up fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-12"
                style={{ background: 'rgba(107,70,193,0.1)', color: '#6B46C1', border: '1px solid rgba(107,70,193,0.2)' }}>
                <Sparkles size={14} />
                Spotless Spaces · Stress-Free Living
              </div>

              <h1 className="fade-up fade-up-2 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>
                Where Cleanliness Meets{' '}


                <span className="gradient-text"> Quality.</span>
              </h1>

              <p className="fade-up fade-up-3 text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                LJ Cleaning &amp; Maintenance delivers expert cleaning for homes, offices, and everything in between — on your schedule, to your standards.
              </p>

              <div className="fade-up fade-up-4 flex flex-wrap gap-4 mb-10">
                <Link
                  href="/quote"
                  className="btn-pulse inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-semibold text-base transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)' }}
                >
                  <Sparkles size={18} />
                  Book My Cleaning
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
                  style={{ background: 'white', color: '#6B46C1', border: '2px solid #6B46C1' }}
                >
                  View Services
                </Link>
              </div>

              {/* Social proof */}
              <div className="fade-up fade-up-5 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['🧑', '👩', '🧔', '👩‍🦱'].map((e, i) => (
                    <div key={i} className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 border-white"
                      style={{ background: `hsl(${260 + i * 15}, 70%, 88%)` }}>
                      {e}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">Trusted by 500+ happy clients</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block">
              <Image
                src="/images/abuj.jpg"
                alt="Services overview"
                width={500}
                height={400}
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────── */}
      <section className="overflow-hidden py-4" style={{ background: '#1E1B4B' }}>
        <div className="ticker-track flex gap-0 whitespace-nowrap w-max">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-bold tracking-widest text-purple-200">
              {item} <span className="text-purple-500">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section style={{ background: '#F8F7FF' }} className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black gradient-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
              <div className="text-slate-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ background: '#EDE9FE', color: '#6B46C1' }}>
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>
              Everything Clean,<br />
              <span className="gradient-text">Nothing Missed</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              From routine maintenance to intensive deep cleans, we handle it all with professionalism and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const imageSrc = SERVICE_IMAGES[s.title] || DEFAULT_SERVICE_IMAGE
              
              return (
                <div key={i} className="service-card rounded-2xl overflow-hidden shadow-sm"
                  style={{ border: '1px solid rgba(107,70,193,0.1)' }}>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={imageSrc}
                      alt={s.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6" style={{ background: '#F8F7FF' }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#1E1B4B', fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)' }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{ background: 'rgba(107,70,193,0.12)', color: '#6B46C1' }}>
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>
                A Clean Space Is a<br />
                <span className="gradient-text">Happy Space</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We&apos;re more than just cleaners — we&apos;re your partners in creating healthier, fresher environments. From homes to offices, our trained cleaning experts take pride in every detail.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Experienced, trained cleaning professionals',
                  'Eco-friendly and safe cleaning products',
                  'Flexible scheduling — one-off or regular',
                  'Quote-based pricing — no hidden surprises',
                  'Satisfaction guaranteed on every visit',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: '#6B46C1' }} />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)' }}>
                Book My Cleaning<ArrowRight size={16} />
              </Link>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: <Shield size={28} />, title: 'Fully Insured', desc: 'Peace of mind on every job.' },
                { icon: <Clock size={28} />, title: 'Flexible Hours', desc: 'We work around your schedule.' },
                { icon: <Star size={28} />, title: 'Top Rated', desc: '5-star service every time.' },
                { icon: <ThumbsUp size={28} />, title: 'Satisfaction Guarantee', desc: 'Not happy? We\'ll make it right.' },
              ].map((item, i) => (
                <div key={i} className="service-card bg-white rounded-2xl p-6 shadow-sm">
                  <div className="mb-3" style={{ color: '#6B46C1' }}>{item.icon}</div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: '#1E1B4B' }}>{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Sparkles size={36} className="mx-auto mb-5 text-purple-400" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}>
            Ready for a Spotless<br />
            <span className="text-purple-300">Home or Office?</span>
          </h2>
          <p className="text-purple-300 mb-8 text-lg">
            Get a personalised quote in minutes. No obligation, no hidden fees.
          </p>
          <Link
            href="/quote"
            className="btn-pulse inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}
          >
            <Sparkles size={20} />
            Book Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
