import { generateComponentWithServerBinding } from 'paraview-lite/src/proxyHelper';
import module from './module';

export default generateComponentWithServerBinding(
  'Glyph',
  'Source',
  {
    glyphType: {
      name: 'GlyphType',
      autoApply: true,
      clientToServer: Number,
      default: '',
    },
    scaleArray: {
      name: 'ScaleArray',
      autoApply: true,
      default: '',
    },
    scaleFactor: {
      name: 'ScaleFactor',
      autoApply: true,
      clientToServer: Number,
      default: 0,
    },
  },
  {
    name: 'GlyphFilter',
    data() {
      return {
        module,
        color: 'grey darken-2',
        normalMode: 3,
      };
    },
  }
);
