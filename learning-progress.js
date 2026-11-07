/* Versioned local progress. Never stores photos, identity, or account data. */
const LearningProgress = (() => {
  const key = 'mahjongTableCoach.journey.v2';
  const integer = (n, max) => Number.isInteger(n) && n >= 0 && n <= max;
  function validate(value) {
    if (!value || value.version !== 2 || !integer(value.step, 9) || !integer(value.introIndex, 4) || !integer(value.questionIndex, 5) || !integer(value.transferIndex, 5)) return null;
    if (value.game) {
      const g = value.game;
      if (!Array.isArray(g.racks) || g.racks.length !== 4 || !g.racks.every(Array.isArray) || !Array.isArray(g.wall) || !Array.isArray(g.discards)) return null;
      if (!integer(g.step, 6) || !['passing','second','courtesyChoice','courtesy','done'].includes(g.phase) || !integer(g.courtesy, 3)) return null;
      if (g.racks[0].length !== (g.drawn ? 14 : 13) || g.racks.slice(1).some((rack, i) => rack.length !== (i === 2 ? 14 : 13))) return null;
      const all = g.racks.flat().concat(g.wall, g.discards).sort();
      if (all.join(',') !== GuidedEngine.supply().sort().join(',')) return null;
    } else if ([5,6].includes(value.step)) return null;
    if (!Array.isArray(value.results) || value.results.some(v => !Array.isArray(v) || typeof v[0] !== 'string' || typeof v[1] !== 'boolean')) return null;
    return value;
  }
  function read(storage) { try { return validate(JSON.parse(storage.getItem(key))); } catch { return null; } }
  function write(storage, value) { try { storage.setItem(key, JSON.stringify({ ...value, version: 2 })); return true; } catch { return false; } }
  return { key, validate, read, write };
})();
if (typeof module !== 'undefined') module.exports = LearningProgress;
