import {
    Home,
    UserDetail,
    PostDetail,
    AlbumDetail
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
        exact: true,
        component: UserDetail,
    },
    {
        name: 'Post Detail',
        path: '/user/:id/post/:postId',
        exact: false,
        component: PostDetail,
    },
    {
        name: 'Album Detail',
        path: '/user/:id/album/:albumId',
        exact: false,
        component: AlbumDetail,
    },
]