'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-3 left-3 right-3 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
      } md:left-6 md:right-6 lg:left-8 lg:right-8`}
    >
      <div className="mx-auto rounded-2xl border border-black/5 bg-white/90 px-6 py-1 backdrop-blur-[10px] shadow-[0_12px_30px_rgba(15,23,42,0.10)] sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0 min-w-fit">
            <span className="flex items-center gap-3 text-[22px] font-black tracking-tight text-gray-950 sm:text-[24px]">
              <Image
                src="/images/logo3.png"
                alt="LJ Cleaning logo"
                width={180}
                height={600}
                className=" rounded-full object-cover"
                priority
              />
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
            {NAV_LINKS.map(link => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 ${isActive ? 'text-[#6B46C1]' : 'text-black hover:text-[#6B46C1]'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden flex-shrink-0 md:flex">
            <Link
              href="tel:7752293115"
              className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#6B46C1] to-[#7C3AED] px-4 py-2 text-white shadow-[0_10px_22px_rgba(107,70,193,0.28)] transition-shadow hover:shadow-[0_15px_30px_rgba(107,70,193,0.35)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Phone size={18} className="text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-medium text-white/85">Call Now</p>
                <p className="text-[14px] font-extrabold tracking-tight text-white">775-229-3115</p>
              </div>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-[#6B46C1] transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-0 mt-3 rounded-2xl border border-black/5 bg-white/90 px-5 py-4 backdrop-blur-[10px] shadow-[0_12px_30px_rgba(15,23,42,0.10)] md:hidden">
          <div className="space-y-1">
            {NAV_LINKS.map(link => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-[#f2efff] text-[#6B46C1]' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="mt-3 border-t border-gray-100 pt-3">
              <Link href="tel:7752293115" className="flex items-center gap-3 rounded-lg bg-[#f2efff] p-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#6B46C1]">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs leading-tight text-gray-600">Call Now</p>
                  <p className="text-sm font-bold leading-tight text-gray-900">775-229-3115</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
