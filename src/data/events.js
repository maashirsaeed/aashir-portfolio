/**
 * Event gallery data.
 * When a photograph is ready, place it at `image` and set `hasPhoto: true`.
 * Until then, the gallery renders an editorial placeholder — not stock imagery.
 */
export const eventsIntro = {
  eyebrow: 'Industry engagement',
  heading: 'Beyond the Office',
  subheading:
    'Building relationships where students, universities and education partners meet.',
}

export const events = [
  {
    id: 'hr-consultants-islamabad',
    title: 'HR Consultants Expo',
    location: 'Islamabad',
    image: '/assets/events/hr-consultants-islamabad.jpg',
    hasPhoto: false,
    caption:
      'Representing the University of Portsmouth and reconnecting with education partners while engaging prospective students and families.',
  },
  {
    id: 'fes-gujranwala',
    title: 'Study Abroad FEST',
    location: 'Gujranwala',
    image: '/assets/events/fes-gujranwala.jpg',
    hasPhoto: false,
    caption:
      'Engaging students, counsellors and education partners at a regional study-abroad event.',
  },
  {
    id: 'smart-expo',
    title: 'Smart Expo',
    location: 'Pakistan',
    image: '/assets/events/smart-expo.jpg',
    hasPhoto: false,
    caption:
      'University representation and networking with international education professionals and prospective students.',
  },
  {
    id: 'fes-rawalpindi',
    title: 'FES Consultants',
    location: 'Rawalpindi',
    image: '/assets/events/fes-rawalpindi.jpg',
    hasPhoto: false,
    caption:
      'Participation in a study-abroad event alongside university and education-sector representatives.',
  },
]
