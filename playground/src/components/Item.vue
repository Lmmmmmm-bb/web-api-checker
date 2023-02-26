<script setup lang="ts">
import type { WebAPI } from 'web-api-checker';
import { isWebAPISupport } from 'web-api-checker';

const props = defineProps<{ api: WebAPI }>();

const disabled = computed(() => !(isWebAPISupport(props.api)));

const icon = computed(() => (disabled.value ? 'i-ph:x-bold text-red-500' : 'i-ph:check-bold text-green-500'));
</script>

<template>
  <div
    class="flex-row px-3 py-2.5 text-zinc-800 dark:text-white md:rounded-md hover:(filter brightness-97 dark:brightness-90)"
    :class="disabled ? 'unavailable' : 'available'"
  >
    <h2 class="flex items-center h-5 flex-1 text-lg font-black truncate leading-none">
      {{ props.api }}
    </h2>
    <div mt-5 flex items-center gap-1>
      <div :class="icon" />
      {{ disabled ? 'Not available' : 'Available' }}
    </div>
  </div>
</template>
