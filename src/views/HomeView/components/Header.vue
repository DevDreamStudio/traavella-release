<template lang="html">
    <header class="header">
        <MainNavBar :page="false" :lang="lang" :toggleLanguageDialog="toggleLanguageDialog"
            :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <AdaptiveMainNavBar :toggleShowAdaptiveNav="toggleShowAdaptiveNav" :showAdaptiveNav="showAdaptiveNav" />
        <div class="header__content container">
            <h1 class="header__content-title">
                <span>Лучшие Туры для Вас:</span>
                Путешествуйте с Комфортом и Безопасностью
            </h1>
            <h2 class="header__content-subtitle">
                Индивидуальные маршруты,
                эксклюзивные предложения и полная поддержка на
                каждом шагу вашего путешествия
            </h2>
        </div>
        <LanguagePicker :setLang="setLang" :toggleLanguageDialog="toggleLanguageDialog"
            :showModal="showLanguageDialog" />
    </header>
</template>

<script lang="ts" setup>
import { ref, type Ref, onMounted } from 'vue';

import AdaptiveMainNavBar from '../../../components/MainNavBar/AdaptiveMainNavBar.vue';
import MainNavBar from '../../../components/MainNavBar/MainNavBar.vue';
import LanguagePicker from '../../../components/LanguagePicker/LanguagePicker.vue';

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

onMounted(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            showAdaptiveNav.value = false;
        }
    });
});

const toggleLanguageDialog = (value: boolean) => {
    showLanguageDialog.value = value;
    if (showLanguageDialog.value) {
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
</script>
