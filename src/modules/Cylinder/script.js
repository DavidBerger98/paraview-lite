import { generateComponentWithServerBinding } from 'paraview-lite/src/proxyHelper';

import module from './module';

export default generateComponentWithServerBinding(
  'Cylinder',
  'Source',
  {},
  {
    name: 'Cylinder',
    data() {
      return {
        module,
        color: 'grey darken-2',
      };
    },
  }
);
