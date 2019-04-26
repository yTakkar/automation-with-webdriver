const { join } = require('path');

const BASE_URL = 'https://marathi.sangam.com';

exports.URLS = {
  LOGIN: `${BASE_URL}/login`,
  MATCHES: `${BASE_URL}/profiles/unviewed-matches`,
  INTERACTION: `${BASE_URL}/interaction`,
  PREVIEW_PROFILE: `${BASE_URL}/preview-profile`,
  HOME: `${BASE_URL}/`,
};

exports.resolvePath = path => join(process.cwd(), path);
