const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('perplexityApp', {
  // API futura
});

