const express = require('express');
const app = express();
const port = 3000;

// Endpoint GET /feature/:code
app.get('/feature/:code', (req, res) => {
  const featureCode = req.params.code;
  res.json({
    code: featureCode,
    enabled: true
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
