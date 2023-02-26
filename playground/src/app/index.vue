<script setup lang="ts">
import { webAPI } from './config';
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-1 py-1 md:p-1">
    <Item
      v-for="item in webAPI"
      :key="item"
      :api="item"
    />
  </div>
</template>
