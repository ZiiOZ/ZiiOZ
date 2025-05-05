const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());

// ✅ Test Route
app.get('/api/hello', (req, res) => {
  res.send('Hello from the backend');
});

app.listen(PORT, () => {
  console.log(`ZiiOZ backend is live on port ${PORT}`);
});
