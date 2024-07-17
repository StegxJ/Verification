const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

// Endpoint to generate access token
app.post('/api/get-access-token', async (req, res) => {
  try {
    const response = await axios.post('https://api.nexera.id/kyc/auth/access-token', {
      address: req.body.address,
      blockchainNamespace: req.body.blockchainNamespace || 'eip155',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`,
      },
    });
    res.json({ accessToken: response.data.accessToken });
  } catch (error) {
    res.status(500).send('Error generating access token');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
