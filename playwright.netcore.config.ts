import config from './playwright.config';

process.env.SITE_URL = process.env.SITE_URL || 'https://surveyjs-io.azurewebsites.net';

export default config;
