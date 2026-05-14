export const SERVICES = [
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    desc: 'Professional-grade cleaning for offices, retail spaces, and commercial properties.',
  },
  {
    icon: '🏡',
    title: 'House Cleaning',
    desc: 'Regular or one-off home cleaning tailored to your schedule and needs.',
  },
  {
    icon: '✨',
    title: 'Deep Cleaning',
    desc: 'Thorough top-to-bottom cleaning for those areas that need extra attention.',
  },
  {
    icon: '🏠',
    title: 'Move-Out Cleaning',
    desc: 'Leave your old place spotless and get your bond back with confidence.',
  },
  {
    icon: '🛏️',
    title: 'Airbnb Cleaning',
    desc: 'Fast, reliable turnovers to keep your guests happy and your ratings high.',
  },
  {
    icon: '💧',
    title: 'Pressure Water Blasting',
    desc: 'Blast away grime from driveways, decks, paths, and exterior surfaces.',
  },
]

export const STATS = [
  { value: '500+', label: 'Cleans Completed' },
  { value: '5.0★', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction Goal' },
  { value: '10+', label: 'Service Types' },
]

export const TICKER = [
  'COMMERCIAL CLEANING',
  'HOUSE CLEANING',
  'DEEP CLEANING',
  'AIRBNB TURNOVER',
  'PRESSURE WASHING',
  'WINDOW CLEANING',
  'MOVE-OUT CLEANING',
  'OFFICE CLEANING',
]

export const SERVICE_IMAGES: Record<string, string> = {
  'Commercial Cleaning': '/images/our_services/commercial_cleaning.jpeg',
  'House Cleaning': '/images/our_services/house_cleaning.jpeg',
  'Deep Cleaning': '/images/our_services/deep_cleaning.jpeg',
  'Move-Out Cleaning': '/images/our_services/move_out_cleaning.jpeg',
  'Airbnb Cleaning': '/images/our_services/airbnb_cleaning.jpeg',
  'Pressure Water Blasting': '/images/our_services/pressure_water_blasting.jpeg',
}

export const DEFAULT_SERVICE_IMAGE = '/images/our_services/professional_cleaing.jpeg'

export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]
