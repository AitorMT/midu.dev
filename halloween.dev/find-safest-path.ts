function findSafestPath(dream) {
  const rows = dream.length,
    cols = dream[0].length;
  const dp = new Array(cols);

  dp[0] = dream[0][0];
  for (let j = 1; j < cols; j++) {
    dp[j] = dp[j - 1] + dream[0][j];
  }

  for (let i = 1; i < rows; i++) {
    dp[0] += dream[i][0];

    for (let j = 1; j < cols; j++) {
      const minPrev = dp[j] < dp[j - 1] ? dp[j] : dp[j - 1];

      dp[j] = dream[i][j] + minPrev;
    }
  }

  return dp[cols - 1];
}
