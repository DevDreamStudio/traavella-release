<template lang="html">
    <div class="events__bloc container">
        <div class="events__bloc-item">
            <p class="events__bloc-item-descr">
                Уточнение события
            </p>
            <h5 class="events__bloc-item-title">
                Название тура
            </h5>
            <button class="events__bloc-item-btn">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.39541 26.6046C9.92261 27.1318 10.7774 27.1318 11.3046 26.6046L24.3 13.6092V23.85C24.3 24.5956 24.9044 25.2 25.65 25.2C26.3956 25.2 27 24.5956 27 23.85V10.35C27 9.60442 26.3956 9 25.65 9H12.15C11.4044 9 10.8 9.60442 10.8 10.35C10.8 11.0956 11.4044 11.7 12.15 11.7H22.3908L9.39541 24.6954C8.8682 25.2226 8.8682 26.0774 9.39541 26.6046Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <div class="events__bloc-item">
            <p class="events__bloc-item-descr">
                Уточнение события
            </p>
            <h5 class="events__bloc-item-title">
                Название тура
            </h5>
            <button class="events__bloc-item-btn">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.39541 26.6046C9.92261 27.1318 10.7774 27.1318 11.3046 26.6046L24.3 13.6092V23.85C24.3 24.5956 24.9044 25.2 25.65 25.2C26.3956 25.2 27 24.5956 27 23.85V10.35C27 9.60442 26.3956 9 25.65 9H12.15C11.4044 9 10.8 9.60442 10.8 10.35C10.8 11.0956 11.4044 11.7 12.15 11.7H22.3908L9.39541 24.6954C8.8682 25.2226 8.8682 26.0774 9.39541 26.6046Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <div class="events__bloc-item">
            <p class="events__bloc-item-descr">
                Уточнение события
            </p>
            <h5 class="events__bloc-item-title">
                Название тура
            </h5>
            <button class="events__bloc-item-btn">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.39541 26.6046C9.92261 27.1318 10.7774 27.1318 11.3046 26.6046L24.3 13.6092V23.85C24.3 24.5956 24.9044 25.2 25.65 25.2C26.3956 25.2 27 24.5956 27 23.85V10.35C27 9.60442 26.3956 9 25.65 9H12.15C11.4044 9 10.8 9.60442 10.8 10.35C10.8 11.0956 11.4044 11.7 12.15 11.7H22.3908L9.39541 24.6954C8.8682 25.2226 8.8682 26.0774 9.39541 26.6046Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <div class="events__bloc-item">
            <p class="events__bloc-item-descr">
                Уточнение события
            </p>
            <h5 class="events__bloc-item-title">
                Название тура
            </h5>
            <button class="events__bloc-item-btn">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.39541 26.6046C9.92261 27.1318 10.7774 27.1318 11.3046 26.6046L24.3 13.6092V23.85C24.3 24.5956 24.9044 25.2 25.65 25.2C26.3956 25.2 27 24.5956 27 23.85V10.35C27 9.60442 26.3956 9 25.65 9H12.15C11.4044 9 10.8 9.60442 10.8 10.35C10.8 11.0956 11.4044 11.7 12.15 11.7H22.3908L9.39541 24.6954C8.8682 25.2226 8.8682 26.0774 9.39541 26.6046Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </div>

</template>

<script lang="ts" setup>



</script>

<style lang="scss" scoped>
.events__bloc {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 360px;
    gap: 24px;

    @media (max-width:768px) {
        grid-template-columns: 1fr;
    }

    @media (max-width:576px) {
        grid-auto-rows: 260px;
    }

    @media (max-width:376px) {
        grid-auto-rows: 192px;
    }

    &-item {
        width: 100%;
        background: var(--gray-300);
        border-radius: 40px;
        padding: 24px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;

        &-descr {
            font-weight: 400;
            font-size: 20px;
            line-height: 125%;
            color: var(--white);

            @media (max-width:576px) {
                font-size: 14px;
            }
        }

        &-title {
            font-weight: 700;
            font-size: 36px;
            color: var(--white);

            @media (max-width:576px) {
                font-size: 24px;
            }
        }

        &-btn {
            position: absolute;
            top: 24px;
            right: 24px;
        }
    }
}
</style>