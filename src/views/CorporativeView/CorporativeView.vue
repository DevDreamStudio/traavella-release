<template>
    <header class="comrporative__header">
        <MainNavBar class="container" :page="true" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog"
            :showModal="showLanguageDialog" />
    </header>

</template>


<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import MainNavBar from '../../components/MainNavBar/MainNavBar.vue';
import AdaptiveMainNavBar from '../../components/MainNavBar/AdaptiveMainNavBar.vue';
import LanguagePicker from '../../components/LanguagePicker/LanguagePicker.vue';

const showAdaptiveNav: Ref<boolean> = ref(false);
const showLanguageDialog = ref(false);
const toggleShowAdaptiveNav: Function = (value: boolean): void => {
    showAdaptiveNav.value = value;
    if (showAdaptiveNav.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }
}

let lang = localStorage.lang;
const setLang = (langData: string) => {
    localStorage.lang = langData;
    lang = langData;
    toggleLanguageDialog(false);
}
const toggleLanguageDialog = (value: boolean) => {
    showLanguageDialog.value = value;
    if (showLanguageDialog.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }
}
</script>

<style lang="scss" scoped></style>