const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const assets = ['index.html', 'styles.css', 'experience.css', 'tile-art.js', 'curriculum.js', 'charleston.js', 'teaching-visuals.js', 'practice-engine.js', 'learning-progress.js', 'app.js', 'guided-hand.js', 'analytics-config.js', 'learning-analytics.js', 'rack-arrange.js', 'reference-guide.js'];
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
for (const asset of assets) fs.copyFileSync(path.join(root, asset), path.join(output, asset));
const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
fs.writeFileSync(path.join(output, 'version.json'), JSON.stringify({ commit }) + '\n');
console.log(`Published assets prepared: ${assets.length} files, version ${commit.slice(0, 7)}`);

const token=process.env.POSTHOG_PROJECT_TOKEN;
const host=process.env.POSTHOG_API_HOST||'https://us.i.posthog.com';
if(token&&['https://us.i.posthog.com','https://eu.i.posthog.com'].includes(host)) fs.writeFileSync(path.join(output,'analytics-config.js'),'window.MAHJONG_ANALYTICS = '+JSON.stringify({token,host})+';\n');
