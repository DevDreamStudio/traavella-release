<template lang="html">
    <button @click="scrollToTop">
        <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15.0004 33.7998C14.0063 33.7998 13.2004 32.9939 13.2004 31.9998L13.2004 6.4688L3.69788 16.4474C3.00886 17.164 1.86938 17.1863 1.15279 16.4973C0.436201 15.8083 0.413859 14.6688 1.10289 13.9522L13.7029 0.752214C14.0423 0.39927 14.5108 0.199808 15.0004 0.199807C15.49 0.199807 15.9585 0.39927 16.2979 0.752214L28.8979 13.9522C29.5869 14.6688 29.5646 15.8083 28.848 16.4973C28.1314 17.1863 26.9919 17.164 26.3029 16.4474L16.8004 6.4688L16.8004 31.9998C16.8004 32.9939 15.9945 33.7998 15.0004 33.7998Z"
                fill="#FF5722" />
        </svg>
    </button>
</template>

<script lang="ts" setup>

import { ref, onMounted, onUnmounted } from 'vue';
const showButton = ref(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const handleScroll = () => {
    showButton.value = window.scrollY > 100;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
