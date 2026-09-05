/**
 * Test for the Google Doc grid decoder against a live published document.
 */

const DOC_URL =
  'https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub';

function parseTableRows({ html }) {
  const rows = [];
  const rowMatches = html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi);

  for (const rowMatch of rowMatches) {
    const cells = [];
    const cellMatches = rowMatch[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi);

    for (const cellMatch of cellMatches) {
      cells.push(
        cellMatch[1]
          .replace(/<[^>]+>/g, '')
          .replace(/&nbsp;/g, ' ')
          .trim()
      );
    }

    if (cells.length > 0) {
      rows.push(cells);
    }
  }

  return rows;
}

async function fetchDocHtml({ url }) {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`fetch failed: ${resp.status}`);
  }
  return resp.text();
}

/** User's decode logic, fixed only enough to run so we can observe behavior. */
function decodeUserAttempt({ html }) {
  const rows = parseTableRows({ html });
  const points = [];

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i];
    if (cells.length >= 3) {
      const x = parseInt(cells[0], 10);
      const char = cells[1];
      const y = parseInt(cells[2], 10);

      if (!Number.isNaN({ x, y, char })) {
        // intentionally empty — mirrors user's snippet
      }
    }
  }

  if (points.length === 0) {
    throw new Error('error finding data');
  }

  const maximumX = Math.max(...points.map((point) => point.x));
  const maximumY = Math.max(...points.map((point) => point.y));

  const grid = Array.from({ length: maximumY + 1 }, () =>
    Array(maximumX + 1).fill(' ')
  );

  for (const { x, y, char } of points) {
    grid[y][x] = char;
  }

  const lines = [];
  for (let y = maximumY; y >= 0; y--) {
    lines.push(grid[y].join(''));
  }
  return lines.join('\n');
}

/** Corrected decode implementation. */
function decodeFixed({ html }) {
  const rows = parseTableRows({ html });
  const points = [];

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i];
    if (cells.length >= 3) {
      const x = parseInt(cells[0], 10);
      const char = cells[1];
      const y = parseInt(cells[2], 10);

      if (!Number.isNaN(x) && !Number.isNaN(y) && char.length > 0) {
        points.push({ x, y, char });
      }
    }
  }

  if (points.length === 0) {
    throw new Error('error finding data');
  }

  const maximumX = Math.max(...points.map((point) => point.x));
  const maximumY = Math.max(...points.map((point) => point.y));

  const grid = Array.from({ length: maximumY + 1 }, () =>
    Array(maximumX + 1).fill(' ')
  );

  for (const { x, y, char } of points) {
    grid[y][x] = char;
  }

  const lines = [];
  for (let y = maximumY; y >= 0; y--) {
    lines.push(grid[y].join(''));
  }
  return lines.join('\n');
}

function report({ name, passed, detail }) {
  console.log(`${passed ? 'PASS' : 'FAIL'}  ${name}`);
  if (detail) {
    console.log(`       ${detail}`);
  }
}

console.log('=== Google Doc decode test ===');
console.log(`URL: ${DOC_URL}\n`);

const html = await fetchDocHtml({ url: DOC_URL });
const rows = parseTableRows({ html });

report({
  name: 'fetch published document',
  passed: rows.length > 1,
  detail: `${rows.length} table rows parsed (including header)`,
});

let userFailed = false;
try {
  decodeUserAttempt({ html });
  report({ name: 'user attempt (logic as written, syntax fixed)', passed: false, detail: 'expected throw, but succeeded' });
} catch (error) {
  userFailed = error instanceof Error && error.message === 'error finding data';
  report({
    name: 'user attempt (logic as written, syntax fixed)',
    passed: userFailed,
    detail: userFailed
      ? 'throws "error finding data" because points is never populated'
      : String(error),
  });
}

const fixedOutput = decodeFixed({ html });
report({
  name: 'corrected decode on live document',
  passed: fixedOutput.trim().length > 0,
  detail: `decoded ${parseTableRows({ html }).length - 1} character entries`,
});

console.log('\n=== Secret message (corrected decode) ===\n');
console.log(fixedOutput);

console.log('\n=== Summary ===');
console.log(
  userFailed
    ? 'The submitted code does NOT achieve the goal on the live document.'
    : 'Unexpected user-attempt result — review output above.'
);
