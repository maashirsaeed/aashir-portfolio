import { asset } from './site'

export const profile = {
  name: 'Aashir Saeed',
  firstName: 'Aashir',
  monogram: 'AS',
  eyebrow: 'International Higher Education',
  title: 'Student Recruitment Manager',
  organisation: 'University of Portsmouth',
  headline:
    'Helping universities grow through student recruitment, trusted partnerships and meaningful engagement across Pakistan.',
  summary:
    'Aashir is an international education professional with 6+ years of experience across student recruitment, admissions, counselling, university representation and partner development, with a strong focus on the UK higher education sector.',
  location: 'Lahore, Pakistan',
  locationFull: 'Lahore, Punjab, Pakistan',
  focus: ['International Higher Education', 'Student Recruitment', 'Partnerships'],
  portrait: {
    src: asset('assets/aashir-saeed.jpg'),
    alt: 'Professional portrait of Aashir Saeed, Student Recruitment Manager',
    width: 900,
    height: 1125,
  },
  contact: {
    email: 'saashir8@gmail.com',
    phone: '+92 301 5422714',
    phoneHref: 'tel:+923015422714',
    linkedin: 'https://www.linkedin.com/in/aashir-saeed-a07la1205/',
    linkedinLabel: 'linkedin.com/in/aashir-saeed-a07la1205',
  },
  about: {
    heading: 'Building meaningful connections between universities, partners and students.',
    paragraphs: [
      'Aashir Saeed is a results-driven student recruitment professional with more than six years of experience across international education, student admissions and university recruitment.',
      'His experience spans student counselling, admissions management, recruitment strategy, education-agent relationships and university representation, with particular exposure to UK higher education.',
      'Throughout his career, he has worked directly with students, counsellors, education partners and institutional stakeholders, helping improve recruitment processes, strengthen relationships and support sustainable student conversion.',
      'Today, as Student Recruitment Manager at the University of Portsmouth, he works across Pakistan to develop university partnerships, engage prospective students and support regional recruitment initiatives.',
    ],
  },
  stats: [
    { value: '6+', label: 'Years in International Education' },
    { value: 'UK', label: 'Higher Education Focus' },
    { value: 'Pakistan', label: 'Recruitment Market' },
    { value: '2019 → Present', label: 'International Education Career' },
  ],
}
