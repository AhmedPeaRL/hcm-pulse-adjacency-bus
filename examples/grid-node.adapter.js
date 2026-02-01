import { subscribe } from '../bus/index.js';

subscribe(pulse => {
  // يهتز محليًا
  // دون فرض تزامن على الآخرين
});
