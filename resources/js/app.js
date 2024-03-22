import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
import { createApp } from 'vue';
import router from './router'

import Try from './components/Try.vue';
import CompaniesIndex from './components/companies/CompaniesIndex.vue';

createApp({
    components: {
        Try,
        CompaniesIndex

    }
}).use(router).mount('#app')
