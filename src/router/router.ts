
import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import ArticlesView from "../views/ArticlesView/ArticlesView.vue";
import ArticlesDetailView from "../views/ArticlesView/ArticlesDetailView.vue";
import ContactsView from "../views/ContactsView/ContactsView.vue";
import ProfileView from "../views/ProfileView/ProfileView.vue";
import AboutView from "../views/AboutView/AboutView.vue";
import ToursView from "../views/ToursView/ToursView.vue";
import CorporativeView from "../views/CorporativeView/CorporativeView.vue";
const routes: Array<RouteRecordRaw> = [
    { name: 'home', path: '/', component: HomeView },
    { name: 'articles', path: '/articles', component: ArticlesView },
    { name: 'contacts', path: '/contacts', component: ContactsView },
    { name: 'profile', path: '/profile', component: ProfileView },
    { name: 'about', path: '/about', component: AboutView },
    { name: 'tours', path: '/tours', component: ToursView },
    { name: 'corporative', path: '/corporative', component: CorporativeView },
    { name: 'articlesDetail', path: '/articles-detail/:slug', component: ArticlesDetailView },
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach(() => {
    document.body.style.overflow = 'scroll';
});


export default router;