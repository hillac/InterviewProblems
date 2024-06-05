const denseMats: Array<number[][]> = [
  [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0],
  ],
  [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
  ],
  [
    [0, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 1, 0],
  ],
  [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1, 0],
  ],
];

function compareMats(a: number[][], b: number[][]): boolean {
  if (a.length !== b.length) return false;
  a.every((row, i) => {
    if (row.length !== b[i].length) return false;
    return row.every((val, j) => val === b[i][j]);
  })
  return true;
}

const tests = [
  {
    input: [
      [1, 2, 3],
      [0, 2],
      [0, 1, 3],
      [0, 2],
    ],
    expected: false,
  },
  {
    input: [
      [1, 3],
      [0, 2],
      [1, 3],
      [0, 2],
    ],
    expected: true,
  },
  {
    input: [
      [2, 3, 5, 6, 7, 8, 9],
      [2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 6, 9],
      [0, 1, 2, 3, 7, 8, 9],
      [0, 1, 2, 3, 4, 7, 8, 9],
      [0, 1, 2, 3, 5, 6, 8, 9],
      [0, 1, 2, 3, 5, 6, 7],
      [0, 1, 2, 3, 4, 5, 6, 7],
    ],
    expected: false,
  },
  {
    input: [
      [1, 2],
      [0, 3],
      [0, 3, 4],
      [1, 2, 6],
      [2, 5],
      [4, 6],
      [5, 3],
    ],
    expected: false,
  },
  {
    input: [
      [1, 2],
      [0, 3],
      [0, 3, 4],
      [1, 2, 5],
      [2, 5],
      [4, 3],
    ],
    expected: true,
  },
];

// Convert the representation to a dense boolean matrix
// where the value at [i][j] is true if there is an edge between i and j.
function convertToDense(graph: number[][]): number[][] {
  return [[1]]
}

// Check if the graph is bipartite. Use the original representation (not dense).
function isBipartite(graph: number[][]): boolean {
  return true;
}

tests.forEach((test, index) => {
  const result = convertToDense(test.input);
  console.log("Test dense:", index, " Success:", compareMats(result, denseMats[index]));
});

tests.forEach((test, index) => {
  const result = isBipartite(test.input);
  console.log("Test bipartitie:", index, " Success:", result === test.expected);
});
console.log("All tests run.");
