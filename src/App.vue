<template lang="html">
  <transition name="fade">
    <div class="wrapper" v-if="loaded">
      <router-view />
    </div>
    <Loader v-else />
  </transition>
</template>

<script lang="ts" setup>

import { ref, type Ref, onMounted } from 'vue';
import Loader from './components/Loader/Loader.vue';

const loaded: Ref<boolean> = ref(false);

onMounted(() => {
  loaded.value = true;
  if (!localStorage.lang) {
    localStorage.lang = 'ru';
  }
});


</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>