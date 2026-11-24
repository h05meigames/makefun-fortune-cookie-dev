// Fortune Cookie Wisdom for Developers — make.fun entry.
// Node 22, no dependencies, no network. The program writes one original
// line of fortune-cookie wisdom to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt locally): UTF-8, 1-120 characters, not
// only white space, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry line, written in this session. The idea: every developer has
// met code they wrote months ago and no longer recognise. The fortune
// turns that familiar dread into advice — the stranger who inherits your
// code is your future self, so leave a map instead of a maze. It reads
// like a real fortune cookie (a warning wrapped in a blessing), it is
// true about a developer's day (maintaining old code, including your
// own), and the map-not-maze turn is the fresh part.
//
// Revision round (reading the draft aloud): the first draft said "leave
// them good comments", which is flat advice, not a fortune. "Leave them
// a map, not a maze" keeps the same meaning but lands as an image a
// tired senior engineer would nod at. The em dash before it gives the
// line the fortune cookie's pause-and-punch rhythm.
const TEXT =
  'The stranger who will maintain your code is you, six months from now — leave them a map, not a maze.';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), TEXT, 'utf8');
