export const site = {
  title: 'Aashir Saeed | Student Recruitment & International Education',
  description:
    'Aashir Saeed is a Student Recruitment Manager and international education professional with 6+ years of experience in university recruitment, admissions, partnerships and UK higher education across Pakistan.',
  url: 'https://maashirsaeed.github.io/aashir-portfolio',
  ogImage: '/assets/og-image.jpg',
  lang: 'en',
}

export const asset = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  const clean = String(path).replace(/^\//, '')
  return `${base}${clean}`
}

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'impact', label: 'Impact' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
