export function createPulse(data = {}) {
  return {
    t: performance.now(),
    intensity: Math.random(),
    data,
  };
}
