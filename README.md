# jandali-work

Portfolio site. Astro, static, no CMS. Four pages: Home, Work, Photography, Contact.

Marketing and sales work leads. Photography is a single gallery of event and speaker
coverage. One contact form serves hiring managers, freelance clients, and shoot
inquiries. The personal site keeps the blog, the writing, and the SEO.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/ and prints anything still unfinished
```

## Deploy

1. Push this folder to a new GitHub repo.
2. On Vercel, import the repo. Astro is detected automatically, no settings to change.
3. Rename the project to `jandali-work` so it lands on `jandali-work.vercel.app`.
4. When the custom domain arrives, add it in Vercel and update `site` in
   `astro.config.mjs` and `url` in `src/site.config.ts`.

## What still needs you

`npm run build` prints this list every time, so it cannot quietly ship.

| Where | What |
|---|---|
| `src/site.config.ts` | Web3Forms access key. Free at web3forms.com. Without it the form shows an error instead of sending. |
| `src/data/proof.ts` | The grants and prizes that add up to 21,000+ CAD. The number renders alone until you fill this in, which is the weaker version. |
| `src/data/roles.ts` | Ottawa Web Studio start date, plus everything for Flourish Clips and Pattern. All three are `draft: true` and stay off the site until you flip the flag. |
| `src/data/testimonials.ts` | Work-focused quotes only. The section hides itself while the array is empty. |
| `src/data/photos.ts` | Your real frames. Six placeholders are in place so you can see the layout. |
| `public/resume/` | The merged resume PDF, named `AbdulRahman-Jandali-Resume.pdf`. |

## Adding a photo

1. Save the JPEG in `public/photos/`. Long edge around 2000px, quality 80.
2. Add an entry in `src/data/photos.ts` with the event name and year.
3. Set `orientation` to `wide`, `tall`, or `square`. Wide images span two columns.

Caption the event and the year. Nothing else. No categories, no client and personal
split, no pricing, until the library is big enough to need them.

## Corrections already applied

- `Marketing Cooredinator` to `Marketing Coordinator`
- `Bachelors of Business` to `Bachelor of Business`
- `Junior` and `Junior Talks` to `Junior Talk` throughout
- Reveal Interactive is Part time, which resolves the two-full-time-jobs overlap in 2021
- Reveal and Reeeel both marked remote from 2021
- Q-Auto reads "presented 20 recommendations", the delivered version
- 12,000 CAD replaced by 21,000+ CAD in combined grants and prizes
- Al Jazeera's second bullet rewritten so it makes a claim instead of describing exposure

## Still true elsewhere, still wrong

Neither of these is in this repo, but both were on the list:

- `junior-talk.com` says "Junior Talks" in its meta, hero copy, and linked LinkedIn page.
- `ottawa-web-studio.vercel.app` describes the personal site as a portfolio with contact
  on one page. Point that description at `jandali-work.vercel.app` instead and it becomes
  true.

## Design notes

Palette: ink `#0E0E12`, raised `#16161C`, rule `#2A2A33`, paper `#EDEDE7`,
muted `#8C8C96`, lime `#C6FF3D`.

Lime is structural only. It marks cues, rules, focus rings, and the one button. It never
sits behind a photograph, because a saturated accent competes with event lighting.

Type: Bricolage Grotesque for display at variable width, Instrument Sans for body,
IBM Plex Mono for cues, dates, and city codes. Poppins is deliberately absent, it belongs
to Junior Talk.

The signature is the run of show: a mono cue rail down the left edge of the work history
with lime cue marks, city codes, and commitment tags. Event production vernacular, because
that is what the work has mostly been. Swapping the accent is one variable in
`src/styles/global.css` if lime turns out to be wrong.
