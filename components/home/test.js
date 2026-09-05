const url =
  'https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub';

async function decode(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('fail on: ' + resp.status);

  const html = await resp.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const rows = doc.querySelectorAll('table tr');
  const points = [];

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll('td');
    if (cells.length < 3) continue;

    const x = parseInt(cells[0].textContent.trim(), 10);
    const char = cells[1].textContent.trim();
    const y = parseInt(cells[2].textContent.trim(), 10);

    if (!isNaN(x) && !isNaN(y) && char) {
      points.push({ x, y, char });
    }
  }

  if (!points.length) throw new Error('error finding data');

  const maxX = Math.max(...points.map((p) => p.x));
  const maxY = Math.max(...points.map((p) => p.y));
  const grid = [];

  for (let y = 0; y <= maxY; y++) {
    grid[y] = Array(maxX + 1).fill(' ');
  }

  for (const p of points) {
    grid[p.y][p.x] = p.char;
  }

  for (let y = maxY; y >= 0; y--) {
    console.log(grid[y].join(''));
  }
}

(async () => {
  if (typeof DOMParser === 'undefined') {
    const { parseHTML } = await import('linkedom');
    globalThis.DOMParser = parseHTML('').window.DOMParser;
  }

  decode(url);
})();
