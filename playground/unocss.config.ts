import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss';

export default defineConfig({
  shortcuts: {
    available: 'bg-lime-200 dark:bg-lime-600/50',
    unavailable: 'bg-zinc-200 dark:bg-zinc-700',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        serif: 'Varela Round',
        chinese: 'Noto Sans Simplified Chinese',
        display: 'Baloo 2',
        mono: 'DM Mono',
      },
    }),
  ],
});
