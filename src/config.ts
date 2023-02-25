import type { WebApi, WebApiMapper } from './types';

export const webApiMapper: Record<WebApi, WebApiMapper> = {
  Accelerometer: { source: 'window', path: 'Accelerometer' },
  AmbientLightSensor: { source: 'window', path: 'AmbientLightSensor' },
  BarcodeDetector: { source: 'window', path: 'BarcodeDetector' },
  Battery: { source: 'navigator', path: 'getBattery' },
  Bluetooth: { source: 'navigator', path: 'bluetooth' },
  BroadcastChannel: { source: 'window', path: 'BroadcastChannel' },
  Clipboard: { source: 'navigator', path: 'clipboard' },
  ContactPicker: { source: 'navigator', path: 'contacts' },
  ContentIndex: {
    checker: async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.ready;
          return 'index' in registration;
        } catch {
          return false;
        }
      }
      return false;
    },
  },
  CookieStore: { source: 'window', path: 'CookieStore' },
  DigitalGoods: { source: 'window', path: 'getDigitalGoodsService' },
  EyeDropper: { source: 'window', path: 'EyeDropper' },
  File: { source: 'window', path: 'File' },
  FileSystemHandle: { source: 'window', path: 'FileSystemHandle' },
  Fullscreen: {
    checker: () => document?.fullscreenEnabled !== undefined || (document as any)?.webkitFullscreenEnabled !== undefined,
  },
  Gamepad: { source: 'window', path: 'Gamepad' },
  Geolocation: { source: 'navigator', path: 'geolocation' },
  GravitySensor: { source: 'window', path: 'GravitySensor' },
  Gyroscope: { source: 'window', path: 'Gyroscope' },
  History: { source: 'window', path: 'history' },
  Sanitizer: { source: 'window', path: 'Sanitizer' },
  ImageCapture: { source: 'window', path: 'ImageCapture' },
  IndexedDB: { source: 'window', path: 'indexedDB' },
  IntersectionObserver: { source: 'window', path: 'IntersectionObserver' },
  LargestContentfulPaint: { source: 'window', path: 'LargestContentfulPaint' },
  LayoutShift: { source: 'window', path: 'LayoutShift' },
  LinearAccelerationSensor: { source: 'window', path: 'LinearAccelerationSensor' },
  Magnetometer: { source: 'window', path: 'Magnetometer' },
  Connection: { source: 'navigator', path: 'connection' },
  Notification: { source: 'window', path: 'Notification' },
  OrientationSensor: { source: 'window', path: 'OrientationSensor' },
  PaymentRequest: { source: 'window', path: 'PaymentRequest' },
  Performance: { source: 'window', path: 'performance' },
  Permissions: { source: 'navigator', path: 'permissions' },
  PictureInPictureWindow: {
    checker: () => Boolean(document?.pictureInPictureEnabled),
  },
  ReportingObserver: { source: 'window', path: 'ReportingObserver' },
  Orientation: { source: 'screen', path: 'orientation' },
  WakeLock: { source: 'navigator', path: 'wakeLock' },
  Selection: { source: 'window', path: 'Selection' },
  Storage: { source: 'navigator', path: 'storage' },
  Touch: { source: 'window', path: 'Touch' },
  Vibration: { source: 'navigator', path: 'vibrate' },
  VirtualKeyboard: { source: 'navigator', path: 'virtualKeyboard' },
  VirtualViewport: { source: 'window', path: 'virtualViewport' },
  WebAnimations: { source: 'window', path: 'Animation' },
  WebAudio: {
    checker: () => window?.AudioContext !== undefined || (window as any)?.webkitAudioContext !== undefined,
  },
  WebAuthentication: { source: 'navigator', path: 'credentials' },
  WebCrypto: { source: 'window', path: 'crypto' },
  WebMIDI: { source: 'navigator', path: 'requestMIDIAccess' },
  WebShare: { source: 'navigator', path: 'canShare' },
  WebSpeech: {
    checker: () => {
      try {
        return (window as any)?.SpeechRecognition !== undefined || (window as any)?.webkitSpeechRecognition !== undefined;
      } catch {
        return false;
      }
    },
  },
  WebStorage: { source: 'window', path: 'Storage' },
  WebUSB: { source: 'navigator', path: 'usb' },
  WebWorker: { source: 'window', path: 'Worker' },
  WebCodecs: {
    checker: () => (window as any)?.AudioDecoder !== undefined && (window as any)?.VideoDecoder !== undefined,
  },
  WebGL: {
    checker: () => {
      try {
        const canvas = document?.createElement('canvas');
        return !!(canvas && !!window?.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (error) {
        return false;
      }
    },
  },
  WebGPU: { source: 'navigator', path: 'gpu' },
  WebHID: { source: 'navigator', path: 'hid' },
  WebRTC: { source: 'window', path: 'RTCPeerConnection' },
  WebSocket: { source: 'window', path: 'WebSocket' },
  WebVTT: {
    checker: () => window?.VTTCue !== undefined && window?.VTTRegion !== undefined,
  },
  WebXR: { source: 'navigator', path: 'xr' },
  WindowControlsOverlay: { source: 'navigator', path: 'windowControlsOverlay' },
  XMLHttpRequest: { source: 'window', path: 'XMLHttpRequest' },
};
