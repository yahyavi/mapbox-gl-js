'use strict';

const test = require('mapbox-gl-js-test').test;
const window = require('../../../../src/util/window');
const createMap = require('../../../util').createMap;
const FullscreenControl = require('../../../../src/ui/control/fullscreen_control');

test('FullscreenControl appears when fullscreen is enabled', (t) => {
    window.document.fullscreenEnabled = true;

    const map = createMap(t);
    const fullscreen = new FullscreenControl();
    map.addControl(fullscreen);

    t.equal(map.getContainer().querySelectorAll('.mapboxgl-ctrl-fullscreen').length, 1);
    t.end();
});

test('FullscreenControl does not appears when fullscreen is not enabled', (t) => {
    window.document.fullscreenEnabled = false;

    const consoleWarn = t.stub(console, 'warn');

    const map = createMap(t);
    const fullscreen = new FullscreenControl();
    map.addControl(fullscreen);

    t.equal(map.getContainer().querySelectorAll('.mapboxgl-ctrl-fullscreen').length, 0);
    t.equal(consoleWarn.getCall(0).args[0], 'This device does not support fullscreen mode.');
    t.end();
});
