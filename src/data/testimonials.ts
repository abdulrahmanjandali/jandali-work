/**
 * Rule agreed for this site: only quotes that describe work you did.
 * Anything about your story, your speaking, or your character belongs on
 * abdulrahman-jandali.vercel.app instead. Do not run the same quote in both places.
 *
 * The section hides itself entirely while this array is empty, so the page
 * never shows an empty testimonial slot.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'I am proud of you and of your attitude towards learning and growth, you are going to big places buddy!',
    name: 'Wasim Al Kafarneh',
    role: 'General Manager',
    org: 'QRates',
  },
  {
    quote:
      'One of the most exceptional students I have encountered in my years of teaching, ranked at the top of an extraordinarily capable class, with a keen talent for public speaking, research, and content development.',
    name: 'Tarek Abu Asi',
    role: 'Senior Lecturer, Digital Marketing',
    org: 'UDST',
  },
];
