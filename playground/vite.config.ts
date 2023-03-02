import { resolve } from 'path';
import unocss from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import autoImport from 'unplugin-auto-import/vite';
import vueComponents from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss(),
    autoImport({
      imports: ['vue'],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true,
    }),
    vueComponents({ dts: './src/typings/components.d.ts' }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      'web-api-checker': resolve(__dirname, '../src/index.ts'),
    },
  },
});
