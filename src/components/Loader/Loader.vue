<template lang="html">
    <div class="loader-wrapper">
        <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background:
        radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
        conic-gradient(#0000 30%, #ffa516);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
    animation: l13 1s infinite linear;
}

@keyframes l13 {
    100% {
        transform: rotate(1turn)
    }
}

.loader-wrapper {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background: var(--whiteColor);
}
</style>