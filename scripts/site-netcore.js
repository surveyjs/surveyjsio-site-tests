process.env.SITE_URL = process.env.SITE_URL || 'https://surveyjs-io-test-hybfhueebfhmf4hy.southcentralus-01.azurewebsites.net';

const { spawnSync } = require('child_process');

const result = spawnSync('npx', ['playwright', 'test', '--project=site', '--max-failures=0', ...process.argv.slice(2)], {
  stdio: 'inherit',
  shell: true
});

process.exit(result.status === null ? 1 : result.status);
