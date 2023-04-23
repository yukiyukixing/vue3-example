import { createRouter, createWebHistory } from 'vue-router';
import List from '@/components/List.vue';
import Details from '@/components/Details.vue';
import NestedList from '@/components/NestedList.vue';
import NextLevelList from '@/components/NextLevelList.vue';

const routes = [
    {
        path: '/',
        name: 'List',
        component: List
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details
    },
    {
        path: '/details/:id/list',
        name: 'NestedList',
        component: NestedList
    },
    {
        path: '/details/:id/list/:id/newList',
        name: 'NextLevelList',
        component: NextLevelList
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
