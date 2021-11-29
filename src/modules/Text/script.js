import { generateComponentWithServerBinding } from 'paraview-lite/src/proxyHelper';

import module from './module';

export default generateComponentWithServerBinding(
  'Text',
  'Source',
  {},
  {
    name: 'TextModule',
    data() {
      return {
        module,
        color: 'grey darken-2',
      };
    },
  }
);
