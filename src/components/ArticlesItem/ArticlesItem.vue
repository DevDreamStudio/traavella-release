<template lang="html">
    <div class="articles__item before-bg">
        <img src="../../assets/images/article.webp" alt="article" loading="lazy">
        <div class="articles__item-content">
            <h4 class="articles__item-title">
                Дополнительный багаж
            </h4>
            <p class="articles__item-descr">
                Выгоднее всего оплачивать отдельно
            </p>
            <button class="articles__item-btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.263604 11.7364C0.615076 12.0879 1.18492 12.0879 1.5364 11.7364L10.2 3.07279V9.9C10.2 10.3971 10.6029 10.8 11.1 10.8C11.5971 10.8 12 10.3971 12 9.9V0.9C12 0.402944 11.5971 0 11.1 0H2.1C1.60294 0 1.2 0.402944 1.2 0.9C1.2 1.39706 1.60294 1.8 2.1 1.8H8.92721L0.263604 10.4636C-0.087868 10.8151 -0.087868 11.3849 0.263604 11.7364Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.articles__item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgb(0, 0, 0, .3);
    }

    &:hover {
        & img {
            transform: scale(1.1);
        }
    }

    & img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: -1;
        transition: .5s;
    }

    &-content {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px;
        height: 100%;
    }

    &-title {
        font-weight: 700;
        font-size: 20px;
        color: var(--white);

    }

    &-descr {
        font-weight: 400;
        font-size: 16px;
        color: var(--white);
        max-width: 230px;
        max-width: 180px;
    }

    &-btn {
        position: absolute;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(20px);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
        background: rgba(255, 255, 255, 0.2);
        width: 40px;
        height: 40px;
        right: 24px;
        bottom: 30px;
    }
}
</style>