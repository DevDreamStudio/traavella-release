<template>
    <div class="lang__wrapper">
        <button class="lang__wrapper-btn" @click="props.toggleLanguageDialog(true)">
            <span>{{ lang }}</span>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
interface Props {
    toggleLanguageDialog: Function,
    lang: string,
}
const props: Props = defineProps<Props>();


</script>
<style lang="scss" scoped>
.lang__wrapper {
    &-btn {
        background: var(--primary-100);
        width: 70px;
        height: 70px;
        border-radius: 50%;

        & span {
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            color: var(--primary-500);
            text-transform: uppercase;
        }

        @media (max-width:1200px) {
            width: 56px;
            height: 56px;

            & span {
                font-size: 14px;
            }
        }
    }
}
</style>