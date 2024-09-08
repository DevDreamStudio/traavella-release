<template lang="html">

    <header class="tours__header">


    </header>

    <main class="main">
        <section class="main__reviews">
            <SectionHeader title="Что о нас говорят " titleSpan="путешественники" top="Отзывы о компании" descr=""
                data-aos="fade-left" />
            <ReviewBloc />
        </section>
        <CorporativeBloc />
    </main>

    <Footer />

</template>

<script lang="ts" setup>
import CorporativeBloc from '../../components/CorporativeBloc/CorporativeBloc.vue';
import Footer from '../../components/Footer/Footer.vue';
import ReviewBloc from '../../components/ReviewsBloc/ReviewBloc.vue';
import SectionHeader from '../../components/SectionHeader/SectionHeader.vue';
</script>

<style lang="scss" scoped></style>