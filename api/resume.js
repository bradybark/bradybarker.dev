import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Load the JSON using require (Node.js compatible)
const profileData = require('../src/data/profile.json');

export default function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  response.status(200).json(profileData);
}