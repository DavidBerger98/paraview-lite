import { generateComponentWithServerBinding } from 'paraview-lite/src/proxyHelper';
import module from './module';

export default generateComponentWithServerBinding(
  'Tube',
  'Source',
  {
    numberOfSides: {
      name: 'NumberOfSides',
      autoApply: true,
      clientToServer: Number,
      default: 6,
    },
    varyRadius: {
      name: 'VaryRadius',
      autoApply: true,
      clientToServer: Number,
      default: 1,
    },
    radiusFactor: {
      name: 'RadiusFactor',
      autoApply: true,
      clientToServer: Number,
      default: 0,
    },
  },
  {
    name: 'Tube',
    data() {
      return {
        module,
        color: 'grey darken-2',
        normalMode: 3,
      };
    },
  }
);
