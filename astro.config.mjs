// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Prints anything still unfinished at the end of every build, so a TODO
 * cannot quietly ship. Reads the data files as text rather than importing
 * them, which keeps the check dependency-free.
 */
function todoReport() {
  return {
    name: 'todo-report',
    hooks: {
      'astro:build:done': async () => {
        const { readFileSync, readdirSync } = await import('node:fs');
        const dir = new URL('./src/data/', import.meta.url);
        const found = [];
        for (const file of readdirSync(dir)) {
          const text = readFileSync(new URL(file, dir), 'utf8');
          const hits = text.split('\n').filter((l) => l.includes('TODO')).length;
          if (hits) found.push(`  ${file}: ${hits} TODO line(s)`);
        }
        const config = readFileSync(new URL('./src/site.config.ts', import.meta.url), 'utf8');
        if (/formAccessKey:\s*''/.test(config)) {
          found.push('  site.config.ts: contact form has no access key, submissions will not send');
        }
        if (found.length) {
          console.log('\n\x1b[33mStill unfinished:\x1b[0m');
          found.forEach((f) => console.log(f));
          console.log('');
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://jandali-work.vercel.app',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [todoReport()],
});
