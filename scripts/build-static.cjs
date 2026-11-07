const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const assets = ['index.html', 'table-first.css', 'shell.js', 'styles.css', 'experience.css', 'tile-art.js', 'curriculum.js', 'charleston.js', 'teaching-visuals.js', 'practice-engine.js', 'learning-progress.js', 'app.js', 'guided-hand.js', 'analytics-config.js', 'learning-analytics.js', 'rack-arrange.js', 'table-engine.js', 'table-play.js', 'decision-practice.js', 'reference-guide.js'];
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
for (const asset of assets) fs.copyFileSync(path.join(root, asset), path.join(output, asset));
const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
fs.writeFileSync(path.join(output, 'version.json'), JSON.stringify({ commit }) + '\n');
console.log(`Published assets prepared: ${assets.length} files, version ${commit.slice(0, 7)}`);

if(process.env.MAHJONG_ANALYTICS_ENDPOINT==='https://bookblendapp.com/api/mahjong/event') fs.writeFileSync(path.join(output,'analytics-config.js'),'window.MAHJONG_ANALYTICS = '+JSON.stringify({endpoint:process.env.MAHJONG_ANALYTICS_ENDPOINT})+';\n');

// Version each runtime URL by its content so an older page cannot reuse stale scripts.
const crypto = require('node:crypto');
const htmlPath=path.join(output,'index.html');
const html=fs.readFileSync(htmlPath,'utf8').replace(/((?:src|href)=")([^"?]+\.(?:js|css))(?:\?[^" ]*)?"/g,(_match,prefix,file)=>{const hash=crypto.createHash('sha256').update(fs.readFileSync(path.join(output,file))).digest('hex').slice(0,10);return prefix+file+'?v='+hash+'"';});
fs.writeFileSync(htmlPath,html);
