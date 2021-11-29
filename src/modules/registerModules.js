import Sources from 'paraview-lite/src/modules/Sources';
import sourcesModule from 'paraview-lite/src/modules/Sources/module';

import Files from 'paraview-lite/src/modules/Files';
import filesModule from 'paraview-lite/src/modules/Files/module';

// Sources

import Box from 'paraview-lite/src/modules/Box';
import boxModule from 'paraview-lite/src/modules/Box/module';

import Cone from 'paraview-lite/src/modules/Cone';
import coneModule from 'paraview-lite/src/modules/Cone/module';

import Cylinder from 'paraview-lite/src/modules/Cylinder';
import cylinderModule from 'paraview-lite/src/modules/Cylinder/module';

import Sphere from 'paraview-lite/src/modules/Sphere';
import sphereModule from 'paraview-lite/src/modules/Sphere/module';

import TextComponent from 'paraview-lite/src/modules/Text';
import textModule from 'paraview-lite/src/modules/Text/module';

import Wavelet from 'paraview-lite/src/modules/Wavelet';
import waveletModule from 'paraview-lite/src/modules/Wavelet/module';

// Filters

import Clip from 'paraview-lite/src/modules/Clip';
import clipModule from 'paraview-lite/src/modules/Clip/module';

import Contour from 'paraview-lite/src/modules/Contour';
import contourModule from 'paraview-lite/src/modules/Contour/module';

import Slice from 'paraview-lite/src/modules/Slice';
import sliceModule from 'paraview-lite/src/modules/Slice/module';

import StreamTracer from 'paraview-lite/src/modules/StreamTracer';
import streamTracerModule from 'paraview-lite/src/modules/StreamTracer/module';

import Threshold from 'paraview-lite/src/modules/Threshold';
import thresholdModule from 'paraview-lite/src/modules/Threshold/module';

import DefaultComponent from 'paraview-lite/src/modules/Default';
import defaultModule from 'paraview-lite/src/modules/Default/module';

export default function registerModules(store) {
  // --------------------------------------------------------------------------
  // Widget registering
  // --------------------------------------------------------------------------

  store.commit('PVL_MODULES_ADD', { ...sourcesModule, component: Sources });
  store.commit('PVL_MODULES_ADD', { ...filesModule, component: Files });
  // Sources
  store.commit('PVL_MODULES_ADD', { ...boxModule, component: Box });
  store.commit('PVL_MODULES_ADD', { ...coneModule, component: Cone });
  store.commit('PVL_MODULES_ADD', { ...cylinderModule, component: Cylinder });
  store.commit('PVL_MODULES_ADD', { ...sphereModule, component: Sphere });
  store.commit('PVL_MODULES_ADD', { ...textModule, component: TextComponent });
  store.commit('PVL_MODULES_ADD', { ...waveletModule, component: Wavelet });
  // Filters
  store.commit('PVL_MODULES_ADD', { ...clipModule, component: Clip });
  store.commit('PVL_MODULES_ADD', { ...sliceModule, component: Slice });
  store.commit('PVL_MODULES_ADD', { ...contourModule, component: Contour });
  store.commit('PVL_MODULES_ADD', { ...thresholdModule, component: Threshold });
  store.commit('PVL_MODULES_ADD', {
    ...streamTracerModule,
    component: StreamTracer,
  });

  // --------------------------------------------------------------------------
  // Proxy to UI mapping
  // --------------------------------------------------------------------------

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'BoxSource',
    module: 'Box',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'ConeSource',
    module: 'Cone',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'CylinderSource',
    module: 'Cylinder',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'SphereSource',
    module: 'Sphere',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'TextSource',
    module: 'Text',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'WaveletSource',
    module: 'Wavelet',
  });
  
  // Filters

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'Clip',
    module: 'Clip',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'Cut',
    module: 'Slice',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'Contour',
    module: 'Contour',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'Threshold',
    module: 'Threshold',
  });

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'StreamTracer',
    module: 'StreamTracer',
  });

  // --------------------------------------------------------------------------
  // Fallback mapping
  // --------------------------------------------------------------------------

  store.commit('PVL_MODULES_ADD', {
    ...defaultModule,
    component: DefaultComponent,
    name: 'default',
  });

  // --------------------------------------------------------------------------

  store.commit('PVL_PROXY_MODULE_BIND', {
    name: 'default',
    module: 'default',
  });
}
