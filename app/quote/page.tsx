'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles, Send } from 'lucide-react'

const serviceOptions = [
  'Commercial Cleaning',
  'Office Cleaning',
  'House Cleaning',
  'One-Off Cleaning',
  'Regular Cleaning',
  'Deep Cleaning',
  'Move-Out Cleaning',
  'Airbnb / Holiday Rental Cleaning',
  'High-Pressure Water Blasting',
  'Window Cleaning',
  'General / Custom Cleaning',
]

const frequencyOptions = [
  'One-off',
  'Weekly',
  'Fortnightly',
  'Monthly',
  'To be discussed',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function QuotePage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    services: [] as string[],
    frequency: '',
    details: '',
    hearAbout: '',
  })
  const [state, setState] = useState<FormState>('idle')

  function handleService(s: string) {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || form.services.length === 0) return
    setState('submitting')

    // Simulate submission (replace with your API endpoint or email service)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setState('success')
      // In production: POST to /api/quote, send email via Resend/Nodemailer, etc.
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div style={{ background: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)' }} className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 max-w-lg w-full text-center shadow-xl">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)' }}>
            <CheckCircle size={36} className="text-white" />
          </div>
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
            Request Sent!
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Thanks, <strong>{form.name}</strong>! We&apos;ve received your request and will be in touch within 24 hours with your personalised estimate.
          </p>
          <div className="bg-gray-100 rounded-2xl p-4 mb-6 text-left">
            <p className="text-sm text-slate-600"><span className="font-semibold">Services requested:</span> {form.services.join(', ')}</p>
          </div>
          <Link href="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)' }}>
            Back to Home <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(15,23,42,0.04)', color: '#1B4332', border: '1px solid rgba(27,67,50,0.08)' }}>
            <Sparkles size={13} /> Free Estimate
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}>
            Get Your Free Estimate
          </h1>
          <p className="text-green-200 text-lg max-w-md mx-auto">
            Tell us about your cleaning needs and we&apos;ll get back to you with a personalised estimate — no obligation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: 'linear-gradient(135deg, #F8F7FF, #F3F4F6)' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Main form */}
              <div className="lg:col-span-2 space-y-6">

                {/* Personal info */}
                <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
                  <h2 className="font-bold text-lg mb-5" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
                    Your Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm border bg-slate-50 transition-all"
                        style={{ borderColor: '#D1D5DB', color: '#1B4332' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@email.com"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm border bg-slate-50 transition-all"
                        style={{ borderColor: '#D1D5DB', color: '#1B4332' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+64 21 000 000"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm border bg-slate-50 transition-all"
                        style={{ borderColor: '#D1D5DB', color: '#1B4332' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                        Property Address
                      </label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={e => setForm({ ...form, address: e.target.value })}
                        placeholder="123 Main St, Suburb"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm border bg-slate-50 transition-all"
                        style={{ borderColor: '#D1D5DB', color: '#1B4332' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
                  <h2 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
                    Service(s) Required <span className="text-red-400 text-sm font-normal">*</span>
                  </h2>
                  <p className="text-slate-400 text-xs mb-5">Select all that apply</p>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map(s => {
                      const selected = form.services.includes(s)
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleService(s)}
                          className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                          style={selected
                            ? { background: 'linear-gradient(135deg, #1B4332, #84CC16)', color: 'white', transform: 'scale(1.03)' }
                            : { background: '#F3F4F6', color: '#1B4332', border: '1px solid #E5E7EB' }
                          }
                        >
                          {selected && '✓ '}{s}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Frequency */}
                <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
                  <h2 className="font-bold text-lg mb-5" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
                    How Often?
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {frequencyOptions.map(f => {
                      const selected = form.frequency === f
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setForm({ ...form, frequency: f })}
                          className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                          style={selected
                            ? { background: 'linear-gradient(135deg, #1B4332, #84CC16)', color: 'white' }
                            : { background: '#F3F4F6', color: '#1B4332', border: '1px solid #E5E7EB' }
                          }
                        >
                          {f}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Details */}
                <div className="bg-white rounded-2xl p-7 shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
                  <h2 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
                    Project Details
                  </h2>
                  <p className="text-slate-400 text-xs mb-4">
                    Tell us more — property size, number of rooms, specific areas of concern, preferred timing, etc.
                  </p>
                  <textarea
                    rows={5}
                    value={form.details}
                    onChange={e => setForm({ ...form, details: e.target.value })}
                    placeholder="e.g. 3 bedroom house, 2 bathrooms, kitchen needs deep clean, available weekday mornings..."
                    className="form-input w-full px-4 py-3 rounded-xl text-sm border bg-slate-50 transition-all resize-none"
                    style={{ borderColor: '#D1D5DB', color: '#1B4332' }}
                  />
                </div>

                {/* Submit */}
                {state === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-red-600 text-sm">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === 'submitting' || !form.name || !form.email || form.services.length === 0}
                  className="w-full py-4 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-3 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)' }}
                >
                  {state === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending your request...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Booking Request
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
                  <h3 className="font-bold text-base mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
                    What Happens Next?
                  </h3>
                  {[
                    { step: '1', text: 'Submit your request with your details and service needs.' },
                    { step: '2', text: 'We review your request and prepare a personalised estimate.' },
                    { step: '3', text: 'We contact you within 24 hours with your estimate.' },
                    { step: '4', text: 'Confirm and we schedule your clean!' },
                  ].map(item => (
                    <div key={item.step} className="flex gap-3 mb-4 last:mb-0">
                      <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)' }}>
                        {item.step}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #1B4332, #2D6A4F)' }}>
                  <Sparkles size={24} className="text-green-200 mb-3" />
                  <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    100% Free, No Obligation
                  </h3>
                  <p className="text-green-200 text-sm leading-relaxed">
                    Our estimates are completely free and come with no pressure to commit. We&apos;re confident you&apos;ll love what you hear.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid rgba(45,106,79,0.1)' }}>
                  <h3 className="font-bold text-sm mb-3" style={{ color: '#1B4332' }}>Prefer to reach us directly?</h3>
                  <a
                    href="https://www.facebook.com/share/18qsxHhZXN/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium w-full justify-center transition-all hover:scale-105"
                    style={{ background: '#1877F2' }}
                  >
                    Message us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
