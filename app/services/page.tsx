import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cleaning Services | LJ Cleaning & Maintenance',
  description: 'Explore all our professional cleaning services: commercial cleaning, house cleaning, deep cleaning, Airbnb turnover, pressure washing, window cleaning, and more.',
}

const services = [
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    tagline: 'Keep your business environment pristine',
    description:
      'We provide comprehensive commercial cleaning solutions for offices, retail stores, showrooms, warehouses, and more. Our trained teams work efficiently to minimise disruption to your business operations.',
    includes: [
      'General vacuuming and mopping',
      'Dusting surfaces and fixtures',
      'Kitchen and breakroom cleaning',
      'Restroom sanitation',
      'Bin emptying and waste disposal',
      'Glass and window wiping',
    ],
    frequency: 'Daily, weekly, fortnightly, or custom schedule',
    color: '#F3F4F6',
    accent: '#1B4332',
  },
  {
    icon: '💼',
    title: 'Office Cleaning',
    tagline: 'A clean office is a productive office',
    description:
      'Tailored office cleaning packages designed for small offices, co-working spaces, and large corporate environments. We understand the sensitivity of office spaces and work with discretion.',
    includes: [
      'Desk and workstation cleaning',
      'Monitor and equipment wipe-downs',
      'Meeting room preparation',
      'Kitchen and coffee station cleaning',
      'Sanitising high-touch areas',
      'Floor care and vacuuming',
    ],
    frequency: 'Before/after hours or weekend sessions available',
    color: '#F3F4F6',
    accent: '#84CC16',
  },
  {
    icon: '🏡',
    title: 'House Cleaning',
    tagline: 'Your home, spotlessly maintained',
    description:
      'Whether you need a one-off freshen-up or ongoing regular cleaning, our residential cleaning service is thorough, reliable, and customised to your home. We treat your space with the same care we would give our own.',
    includes: [
      'All rooms vacuumed and mopped',
      'Kitchen benches, stovetop, and sink',
      'Bathroom and toilet scrubbing',
      'Bed making (on request)',
      'Dusting furniture and surfaces',
      'Interior window sills and ledges',
    ],
    frequency: 'One-off, weekly, or fortnightly available',
    color: '#F0FDF4',
    accent: '#059669',
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    tagline: 'When good enough isn\'t good enough',
    description:
      'Our deep clean is a thorough, intensive service that goes far beyond a standard clean. Perfect for spring cleaning, move-in preparation, post-renovation, or properties that have not been cleaned in a while.',
    includes: [
      'Inside oven, fridge, and appliances',
      'Behind and under furniture',
      'Grout and tile scrubbing',
      'Light switches and door handles',
      'Skirting boards and ceiling fans',
      'Inside cupboards and drawers',
    ],
    frequency: 'Recommended once or twice a year',
    color: '#FFF7ED',
    accent: '#EA580C',
  },
  {
    icon: '📦',
    title: 'Move-Out Cleaning',
    tagline: 'Leave it spotless, get your bond back',
    description:
      'Moving out is stressful enough — let us handle the cleaning. Our move-out clean is designed to meet the expectations of landlords and property managers, giving you the best chance of a full bond refund.',
    includes: [
      'Full kitchen and appliance clean',
      'All bathrooms and toilets',
      'Interior window cleaning',
      'Carpet vacuuming and spot treatment',
      'Wall marks and scuff removal',
      'Garage and storage areas',
    ],
    frequency: 'One-off service — booked around your move date',
    color: '#FFF1F2',
    accent: '#E11D48',
  },
  {
    icon: '🛏️',
    title: 'Airbnb & Holiday Rental Cleaning',
    tagline: 'Five-star turnovers for five-star reviews',
    description:
      'Fast, reliable, and consistent cleaning between guest stays. We understand the pressure of Airbnb turnovers and deliver a guest-ready space every time — on schedule, no matter the timing.',
    includes: [
      'Full linen change and bed making',
      'Bathroom and kitchen deep clean',
      'Restocking amenities (if supplied)',
      'Rubbish removal and recycling',
      'Vacuuming and mopping throughout',
      'Checklist-based quality control',
    ],
    frequency: 'Synced with your booking calendar',
    color: '#F0F9FF',
    accent: '#0284C7',
  },
  {
    icon: '💧',
    title: 'High-Pressure Water Blasting',
    tagline: 'Blast away years of built-up grime',
    description:
      'Our professional pressure washing service restores exterior surfaces to like-new condition. From driveways to decks, we use the right pressure and technique for each surface type to achieve exceptional results safely.',
    includes: [
      'Driveways and concrete paths',
      'Decks, patios, and timber surfaces',
      'Fencing and boundary walls',
      'Building exteriors and cladding',
      'Gutters and roof moss removal',
      'Carparks and commercial surfaces',
    ],
    frequency: 'One-off or seasonal maintenance packages',
    color: '#F0FDFA',
    accent: '#0D9488',
  },
  {
    icon: '🪟',
    title: 'Window Cleaning',
    tagline: 'Crystal-clear views, inside and out',
    description:
      'Professional window cleaning for residential and commercial properties. We remove stubborn marks, water stains, and built-up dirt to leave every pane streak-free and sparkling — inside and out.',
    includes: [
      'Interior and exterior windows',
      'Sliding doors and glass panels',
      'Window sills and tracks cleaned',
      'Flyscreen washing',
      'Multi-storey via extension poles',
      'Commercial shopfronts',
    ],
    frequency: 'One-off or regular schedule',
    color: '#F5F3FF',
    accent: '#2D6A4F',
  },
  {
    icon: '🧹',
    title: 'General Cleaning Work',
    tagline: 'Got something specific? We can help',
    description:
      'Not sure which service fits your needs? We also take on general and custom cleaning jobs. Whether it\'s a garage clear-out, construction clean, event cleanup, or something more unusual — just get in touch and we\'ll work it out together.',
    includes: [
      'Post-construction cleaning',
      'Event setup and pack-down cleaning',
      'Garage and storage area cleaning',
      'New build or renovation clean',
      'Commercial kitchen cleaning',
      'Any other custom cleaning job',
    ],
    frequency: 'Tailored to your specific requirements',
    color: '#F8F7FF',
    accent: '#1B4332',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(6,26,20,0.82) 0%, rgba(6,26,20,0.68) 100%), url('/images/abuj2.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5"
            style={{ fontFamily: 'var(--font-display)', textShadow: '0 3px 18px rgba(0,0,0,0.55)' }}>
            Everything We Offer
          </h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            From one-off deep cleans to ongoing commercial contracts — we&apos;ve got the right service for every space and situation.
          </p>
          <Link href="/quote"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #2D6A4F, #84CC16)' }}>
            <Sparkles size={16} /> Book my cleaning <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {services.map((s, i) => {
              const imageName =
                s.title === 'Commercial Cleaning'
                  ? 'commercial_cleaning.jpeg'
                  : s.title === 'Office Cleaning'
                    ? 'office_cleaning.jpg'
                    : s.title === 'House Cleaning'
                      ? 'house_cleaning.jpeg'
                      : s.title === 'Deep Cleaning'
                        ? 'deep_cleaning.jpeg'
                        : s.title === 'Move-Out Cleaning'
                          ? 'move_out_cleaning.jpeg'
                          : s.title === 'Airbnb & Holiday Rental Cleaning'
                            ? 'airbnb_cleaning.jpeg'
                            : s.title === 'High-Pressure Water Blasting'
                              ? 'pressure_water_blasting.jpeg'
                              : s.title === 'Window Cleaning'
                                ? 'window_cleaning.jpg'
                                : 'general_cleaning.jpg'

              return (
                <div
                  key={i}
                  className="service-card rounded-2xl overflow-hidden border bg-cover bg-center bg-no-repeat"
                  style={{
                    borderColor: 'rgba(45,106,79,0.1)',
                    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.50) 100%), url('/images/our_services/${imageName}')`,
                  }}
                >
                  <div className="p-6">
                    <div className="text-4xl mb-3">{s.icon}</div>
                    <h2 className="text-xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
                      {s.title}
                    </h2>
                    <p className="text-sm font-medium" style={{ color: s.accent }}>{s.tagline}</p>
                  </div>

                  <div className="p-6 bg-white/88 backdrop-blur-[2px]">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{s.description}</p>

                    <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#1B4332' }}>
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2 mb-5">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: s.accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-xl px-4 py-3 text-xs font-medium"
                      style={{ background: s.color, color: s.accent }}>
                      ⏱ {s.frequency}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(238,242,255,0.96), rgba(221,214,254,0.96)), url('/images/bg.png')" }}
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B4332' }}>
            Not Sure Which Service<br />
            <span className="gradient-text">You Need?</span>
          </h2>
          <p className="text-slate-600 mb-8">
            No problem. Tell us about your situation and we&apos;ll recommend the right service and provide a personalised quote.
          </p>
          <Link href="/quote"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-bold text-base transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1B4332, #84CC16)' }}>
            <Sparkles size={18} />
            Book my cleaning
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
