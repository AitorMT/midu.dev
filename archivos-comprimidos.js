function getCompromisedFiles(lastSafeDownload, droneLogs) {
    const compromised = new Set();
  
    for (const [id, timestamp] of droneLogs) {
      if (timestamp > lastSafeDownload) {
        compromised.add(id);
      }
    }
  
    return [...compromised].sort((a, b) => a - b);
  }
  