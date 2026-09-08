process.env.SITE_URL = process.env.SITE_URL || 'https://surveyjs-io.azurewebsites.net';

const { spawnSync } = require('child_process');

const result = spawnSync('npx', ['playwright', 'test', '--project=site', ...process.argv.slice(2)], {
  stdio: 'inherit',
  shell: true
});

process.exit(result.status === null ? 1 : result.status);
