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
  // TODO: pull the work-focused quotes off your existing testimonial wall.
  // { quote: '...', name: '...', role: '...', org: '...' },
];
