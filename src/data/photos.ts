/**
 * One gallery. Event and speaker coverage. No categories, no client and personal
 * split, no pricing. That was the decision, and under 30 images it is the right one.
 *
 * To add a photo:
 *   1. Drop the file in public/photos/ (JPEG, long edge around 2000px, quality 80)
 *   2. Add an entry below
 *   3. Caption it with the event and the year. Nothing else.
 *
 * Set orientation so the grid can lay it out. 'wide' images span two columns.
 */

export type Photo = {
  src: string;
  alt: string;
  event: string;
  year: string;
  orientation: 'wide' | 'tall' | 'square';
};

export const photos: Photo[] = [
  // TODO: replace all of these with your real frames. The placeholders exist so
  // you can see the layout before the photos land. Delete any you do not fill.
  { src: '/photos/placeholder-01.svg', alt: 'Placeholder frame, replace with a real photo', event: 'Add the event name', year: '20XX', orientation: 'wide' },
  { src: '/photos/placeholder-02.svg', alt: 'Placeholder frame, replace with a real photo', event: 'Add the event name', year: '20XX', orientation: 'tall' },
  { src: '/photos/placeholder-03.svg', alt: 'Placeholder frame, replace with a real photo', event: 'Add the event name', year: '20XX', orientation: 'square' },
  { src: '/photos/placeholder-04.svg', alt: 'Placeholder frame, replace with a real photo', event: 'Add the event name', year: '20XX', orientation: 'square' },
  { src: '/photos/placeholder-05.svg', alt: 'Placeholder frame, replace with a real photo', event: 'Add the event name', year: '20XX', orientation: 'wide' },
  { src: '/photos/placeholder-06.svg', alt: 'Placeholder frame, replace with a real photo', event: 'Add the event name', year: '20XX', orientation: 'tall' },
];

export const isPlaceholderGallery = photos.every((p) => p.src.includes('placeholder'));
