import { subscribe } from '../bus/index.js';

subscribe(pulse => {
  // يترك أثرًا بصريًا خفيفًا
  // دون تغيير حالة خارجية
});
