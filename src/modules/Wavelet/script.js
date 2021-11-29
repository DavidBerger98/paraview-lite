import { generateComponentWithServerBinding } from 'paraview-lite/src/proxyHelper';

import module from './module';

export default generateComponentWithServerBinding(
  'Wavelet',
  'Source',
  {},
  {
    name: 'Wavelet',
    data() {
      return {
        module,
        color: 'grey darken-2',
      };
    },
  }
);
