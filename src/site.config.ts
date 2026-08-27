export const site = {
  name: 'AbdulRahman Jandali',
  url: 'https://jandali-work.vercel.app',
  title: 'AbdulRahman Jandali - Marketing, Sales, and Event Coverage',
  description:
    'Marketing and sales work across Canada and Qatar, plus event and speaker photography. Based in Ottawa.',
  email: 'abdul.jndli@gmail.com',
  phone: '+1 (613) 291-2621',
  location: 'Ottawa, ON, Canada',
  availability: 'Open to marketing and sales roles',

  // Resume file. Drop the merged PDF at public/resume/ and keep this path in sync.
  resumePath: '/resume/AbdulRahman-Jandali-Resume.pdf',

  links: {
    linkedin: 'https://www.linkedin.com/in/abdulrahman-jandali',
    personal: 'https://abdulrahman-jandali.vercel.app',
    juniorTalk: 'https://junior-talk.com',
    ottawaWebStudio: 'https://ottawa-web-studio.vercel.app',
  },

  // Web3Forms access key. Public by design - it identifies the endpoint and is
  // visible in the form markup on the live site. Spam controls live in the
  // Web3Forms dashboard, not in hiding this value.
  formAccessKey: '0beb21c3-8a1b-4770-a5e7-4e81f8cacb49',
};

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Photography', href: '/photography' },
  { label: 'Contact', href: '/contact' },
];
