// api/resume.js
import profileData from '../src/data/profile.json';

export default function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  response.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  // Return the raw JSON data
  response.status(200).json(profileData);
}