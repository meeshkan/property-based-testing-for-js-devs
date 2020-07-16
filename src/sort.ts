/*
A custom sort function written in TypeScript from the fast-check documentation.
Copied here for experimentation and a potential future TypeScript article... 😏

Does that sound interesting to you? Let us know!
*/

const sortInternal = <T>(
  tab: T[],
  start: number,
  end: number,
  cmp: (a: T, b: T) => boolean
): T[] => {
  if (end - start < 2) return tab;

  let pivot = start;
  for (let idx = start + 1; idx < end; ++idx) {
    if (!cmp(tab[start], tab[idx])) {
      let prev = tab[++pivot];
      tab[pivot] = tab[idx];
      tab[idx] = prev;
    }
  }
  let prev = tab[pivot];
  tab[pivot] = tab[start];
  tab[start] = prev;

  sortInternal(tab, start, pivot, cmp);
  sortInternal(tab, pivot + 1, end, cmp);
  return tab;
};

export const sort = <T>(tab: T[]): T[] => {
  return sortInternal([...tab], 0, tab.length, (a, b) => a < b);
};
