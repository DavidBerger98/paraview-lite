import { generateComponentWithServerBinding } from 'paraview-lite/src/proxyHelper';

import module from './module';

export default generateComponentWithServerBinding(
  'Box',
  'Source',
  {},
  {
    name: 'Box',
    data() {
      return {
        module,
        color: 'grey darken-2',
      };
    },
  }
);
