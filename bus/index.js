import { createPulse } from './pulse.js';
import { silence } from './silence.js';

const subscribers = new Set();

export function subscribe(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}

export function emit(payload = {}) {
  const pulse = createPulse(payload);
  subscribers.forEach(fn => {
    try {
      fn(pulse);
    } catch {
      silence();
    }
  });
}
