import {
    Home,
    UserDetail
} from './pages';

export const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
    },
    {
        name: 'User Detail',
        path: '/user/:id',
        exact: false,
        component: UserDetail,
    },

]