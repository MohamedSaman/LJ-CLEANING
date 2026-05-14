import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Facebook, Shield, Star, Clock, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | LJ Cleaning & Maintenance',
  description: 'Learn about LJ Cleaning & Maintenance — our story, values, and commitment to delivering exceptional cleaning services for homes and businesses.',
}

const storyGalleryImages = [
  'commercial_cleaning.jpeg',
  'office_cleaning.jpg',
  'house_cleaning.jpeg',
  'deep_cleaning.jpeg',
  'move_out_cleaning.jpeg',
  'airbnb_cleaning.jpeg',
  'pressure_water_blasting.jpeg',
  'window_cleaning.jpg',
  'general_cleaning.jpg',
  'professional_cleaing.jpeg',
]

const values = [
  {
    icon: <Shield size={24} />,
    title: 'Quality You Can Count On',
    desc: 'We never rush. Every job is done thoroughly, consistently, and to the highest standard — every single time.',
  },
  {
    icon: <Star size={24} />,
    title: 'Customer-First Approach',
    desc: 'Your satisfaction drives everything we do. We listen, adapt, and always follow up to make sure you\'re happy.',
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Reliability & Trust',
    desc: 'We show up when we say we will. You can trust us with your home or business — no shortcuts, no excuses.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Flexible & Accommodating',
    desc: 'We work around your schedule. Early mornings, evenings, weekends — we find a time that works for you.',
  },
]

const faqs = [
  {
    q: 'How do I get a quote?',
    a: 'Simply fill in our quote request form or reach out via Facebook. Tell us what you need and we\'ll provide a personalised estimate within 24 hours — no obligation.',
  },
  {
    q: 'Are your cleaning products safe for children and pets?',
    a: 'Yes. We use eco-friendly, non-toxic cleaning products that are safe for families, kids, and pets. If you have specific sensitivities or preferences, just let us know.',
  },
  {
    q: 'Do I need to be home during the clean?',
    a: 'Not necessarily. Many of our clients leave us a key or provide entry instructions. We\'re fully trustworthy and insured, so you can feel confident leaving us to it.',
  },
  {
    q: 'What if I\'m not satisfied with the clean?',
    a: 'We stand behind our work. If you\'re not happy with any aspect of the service, let us know and we\'ll come back to make it right — at no extra charge.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Pricing varies depending on the type of service, property size, and frequency. We provide personalised quotes based on your specific needs — get in touch and we\'ll work it out together.',
  },
  {
    q: 'Do you offer regular cleaning contracts?',
    a: 'Absolutely. We offer weekly, fortnightly, and monthly schedules for both residential and commercial clients. Regular clients often receive preferential rates.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(30,27,75,0.92) 0%, rgba(49,46,129,0.92) 100%), url('/images/bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(167,139,250,0.15)', color: '#c4b5fd', border: '1px solid rgba(167,139,250,0.2)' }}>
            <Sparkles size={13} /> About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-5"
            style={{ fontFamily: 'var(--font-display)' }}>
            Who We Are
          </h1>
          <p className="text-purple-300 text-lg max-w-lg mx-auto">
            LJ Cleaning &amp; Maintenance is a dedicated cleaning service committed to delivering spotless results for every client.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(248,247,255,0.96), rgba(238,242,255,0.96)), url('/images/bg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>
                A Clean Space is<br />
                <span className="gradient-text">A Happy Space</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                LJ Cleaning &amp; Maintenance was built on a simple belief: that everyone deserves to live and work in a clean, healthy environment. We started as a small residential cleaning service and have grown through word-of-mouth and referrals — a testament to the quality and care we bring to every job.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Today, we serve a wide range of clients — from busy homeowners and landlords to offices, commercial businesses, and short-term rental hosts. Whatever the space, whatever the challenge, we show up prepared, professional, and ready to deliver.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We believe cleaning is a craft. It requires attention to detail, the right products, proper technique, and genuine care. Our team takes pride in leaving every space in better condition than we found it.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)' }}>
                  Book my cleaning <ArrowRight size={16} />
                </Link>
                <a
                  href="https://www.facebook.com/share/18qsxHhZXN/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105"
                  style={{ background: '#1877F2', color: 'white' }}>
                  <Facebook size={16} />
                  Find Us on Facebook
                </a>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative hidden lg:block">
              <div className="relative h-[520px] overflow-hidden rounded-3xl shadow-2xl" style={{ background: 'rgba(107,70,193,0.1)' }}>
                <div className="service-gallery-track flex h-full w-max">
                  {[...storyGalleryImages, ...storyGalleryImages].map((imageName, index) => (
                    <div key={`${imageName}-${index}`} className="relative h-full w-[500px] flex-shrink-0">
                      <Image
                        src={`/images/our_services/${imageName}`}
                        alt={`Cleaning service gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="500px"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ background: '#EDE9FE', color: '#6B46C1' }}>
              Our Values
            </span>
            <h2 className="text-4xl font-black" style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="service-card rounded-2xl p-7"
                style={{ background: '#F8F7FF', border: '1px solid rgba(107,70,193,0.1)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)', color: 'white' }}>
                  {v.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#1E1B4B', fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(238,242,255,0.96), rgba(221,214,254,0.96)), url('/images/bg.png')" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ background: 'rgba(107,70,193,0.1)', color: '#6B46C1' }}>
              FAQ
            </span>
            <h2 className="text-4xl font-black" style={{ fontFamily: 'var(--font-display)', color: '#1E1B4B' }}>
              Answers to Your<br />
              <span className="gradient-text">Common Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm"
                style={{ border: '1px solid rgba(107,70,193,0.1)' }}>
                <h3 className="font-bold text-base mb-2.5" style={{ color: '#1E1B4B' }}>{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-600 mb-4">Still have questions?</p>
              <Link href="/quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6B46C1, #4F46E5)' }}>
              <Sparkles size={16} />
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(30,27,75,0.92), rgba(49,46,129,0.92)), url('/images/bg.png')" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Get In Touch
          </h2>
          <p className="text-purple-300 mb-10 text-lg">
            Ready to book, have a question, or just want to say hi? We&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}>
              <Sparkles size={18} />
              Book my cleaning
            </Link>
            <a
              href="https://www.facebook.com/share/18qsxHhZXN/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all hover:scale-105"
              style={{ background: '#1877F2' }}>
              <Facebook size={18} />
              Message on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
