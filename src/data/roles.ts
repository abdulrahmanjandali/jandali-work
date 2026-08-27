/**
 * THE MERGED RESUME.
 *
 * One record, marketing framing as the base, the sales version's stronger verbs
 * folded in as bullets. Corrections already applied:
 *   - "Marketing Cooredinator" -> "Marketing Coordinator"
 *   - "Bachelors of Business"  -> "Bachelor of Business"
 *   - "Junior" / "Junior Talks" -> "Junior Talk" everywhere
 *   - Reveal Interactive is Part time, not Full time (resolves the 2021 overlap)
 *   - Reveal and Reeeel are marked remote from the Doha move onward
 *   - Q-Auto reads "presented 20 recommendations" (delivered), not "informed 20 improvements"
 *   - 12,000 CAD -> 21,000+ CAD in combined grants and prizes
 *   - Al Jazeera keeps its second bullet, rewritten so it makes a claim
 *
 * draft: true keeps a role out of the built site. Fill in the TODOs, flip the
 * flag to false, and it appears. `npm run build` prints a list of what is still drafted.
 */

export type Role = {
  id: string;
  org: string;
  title: string;
  commitment: 'Full time' | 'Part time' | 'Internship' | 'Founder';
  city: string;
  remoteNote?: string;
  start: string;
  end: string;
  bullets: string[];
  link?: string;
  draft?: boolean;
};

export const roles: Role[] = [
  {
    id: 'ottawa-web-studio',
    org: 'Ottawa Web Studio',
    title: 'Founder',
    commitment: 'Founder',
    city: 'Ottawa, Canada',
    start: 'TODO', // TODO: month and year you started
    end: 'Present',
    bullets: [
      'Run a freelance web design studio building complete sites for small businesses, priced at a flat 400 CAD launch with no add-ons.',
      'Handle the whole engagement end to end: intake, design, build, deploy, and handover.',
      'TODO: how many clients, what kinds of businesses, any result you can point to.',
    ],
    link: 'https://ottawa-web-studio.vercel.app',
    draft: true, // TODO: add the start date and the client bullet, then set to false
  },
  {
    id: 'flourish-clips',
    org: 'Flourish Clips',
    title: 'TODO',
    commitment: 'Part time',
    city: 'Ottawa, Canada',
    start: 'TODO',
    end: 'TODO',
    bullets: ['TODO: what the business is, what you did, one number if you have one.'],
    draft: true,
  },
  {
    id: 'pattern',
    org: 'Pattern',
    title: 'TODO',
    commitment: 'Part time',
    city: 'TODO',
    start: 'TODO',
    end: 'TODO',
    bullets: ['TODO: what the business is, what you did, one number if you have one.'],
    draft: true,
  },
  {
    id: 'junior-talk',
    org: 'Junior Talk',
    title: 'Founder and CEO',
    commitment: 'Founder',
    city: 'Doha, Qatar',
    start: 'Jan 2023',
    end: 'Jun 2026',
    bullets: [
      'Founded Junior Talk, a platform connecting undergraduates with internship opportunities, reaching 7,000+ students.',
      'Pitched to judges, investors, and university partners, securing 21,000+ CAD in combined grants and prizes.',
      'Ran discovery conversations with students and employers across 3 universities to find the gap between student readiness and what employers actually hire for.',
      'Drove 250+ applications and 200,000+ LinkedIn impressions in a single month from 100+ posts.',
    ],
    link: 'https://junior-talk.com',
  },
  {
    id: 'q-auto',
    org: 'Q-Auto',
    title: 'Marketing Intern',
    commitment: 'Internship',
    city: 'Doha, Qatar',
    remoteNote: 'Audi, Volkswagen, Škoda, Q Mobility, QRates',
    start: 'Apr 2026',
    end: 'Jun 2026',
    bullets: [
      'Created social and LinkedIn content for Audi, Volkswagen, and Škoda, producing 10+ pieces a month inside a five-brand retail group.',
      'Filmed, edited, and ran live coverage for 3 brand events, working the floor alongside customers.',
      'Audited every brand channel and presented 20 recommendations, including to Audi Middle East leadership.',
    ],
  },
  {
    id: 'uhub',
    org: 'Student Central Services and UHUB, University of Doha',
    title: 'Student Assistant',
    commitment: 'Part time',
    city: 'Doha, Qatar',
    start: 'Apr 2025',
    end: 'Apr 2026',
    bullets: [
      'First point of contact for walk-in inquiries, appointments, and service questions across multiple departments.',
      'Explained university services and processes to students at every level of familiarity, resolving most issues at the desk.',
      'Ran registration and floor support for events, workshops, and entrepreneurship activities reaching 300+ students.',
      'Built the digital content, presentations, and support materials other departments went on to use.',
    ],
  },
  {
    id: 'qatar-scientific-club',
    org: 'Qatar Scientific Club, Ministry of Sports and Youth',
    title: 'Public Relations and Media Coordinator',
    commitment: 'Part time',
    city: 'Doha, Qatar',
    start: 'May 2023',
    end: 'Feb 2025',
    bullets: [
      'Represented the organization at 30+ public events, dealing directly with attendees, partners, and press.',
      'Built and held the external partner relationships that produced 10 joint initiatives.',
      'Produced the social content that carried the club into new platforms and lifted engagement.',
    ],
  },
  {
    id: 'al-jazeera',
    org: 'Al Jazeera Media Institute',
    title: 'Marketing Intern',
    commitment: 'Internship',
    city: 'Doha, Qatar',
    start: 'Jun 2023',
    end: 'Sep 2024',
    bullets: [
      'Coordinated internal teams and outside contributors across 6 media projects.',
      'Worked inside professional broadcast production, from shoot planning through to delivery.',
    ],
  },
  {
    id: 'reeeel',
    org: 'Reeeel Animation',
    title: 'Account Manager',
    commitment: 'Full time',
    city: 'Ottawa, Canada',
    remoteNote: 'Remote from 2021',
    start: 'Jan 2021',
    end: 'Sep 2021',
    bullets: [
      'Managed client accounts end to end, keeping content and design projects on brief and on deadline.',
      'Presented performance reports to clients and recommended the next move on each account.',
    ],
  },
  {
    id: 'reveal',
    org: 'Reveal Interactive',
    title: 'Marketing Coordinator',
    commitment: 'Part time',
    city: 'Ottawa, Canada',
    remoteNote: 'Remote from 2021',
    start: 'Jun 2019',
    end: 'Sep 2021',
    bullets: [
      'Ran content and campaign delivery for client brands, holding each one to its own identity.',
      'Presented monthly performance reports to clients and internal stakeholders.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Business in Digital Marketing',
  school: 'University of Doha for Science and Technology',
  start: 'Jan 2021',
  end: 'Apr 2026',
  gpa: '3.1',
};

export const certificates = [
  { name: 'HubSpot Reporting', year: '2026' },
  { name: 'HubSpot Inbound Marketing', year: '2026' },
  { name: 'Google Analytics', year: '2026' },
  { name: 'Business Gateway', year: '2020, 2022, 2024' },
];

export const skills = [
  'Social media strategy and content',
  'Consultative selling and needs assessment',
  'Event coordination and live coverage',
  'Front-line service and de-escalation',
  'Video editing and graphic design',
  'Analytics and reporting',
];

export const liveRoles = roles.filter((r) => !r.draft);
export const draftRoles = roles.filter((r) => r.draft);
