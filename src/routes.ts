import {
    Home,
    UserDetail,
    PostDetail,
    AlbumDetail,
    PhotoDetail,
    CommentDetail
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
        exact: true,
        component: PostDetail,
    },
    {
        name: 'Album Detail',
        path: '/user/:id/album/:albumId',
        exact: true,
        component: AlbumDetail,
    },
    {
        name: 'Photo Detail',
        path: '/user/:id/album/:albumId/photo/:photoId',
        exact: false,
        component: PhotoDetail,
    },
    {
        name: 'Comment Detail',
        path: '/user/:id/post/:postId/comment/:commentId',
        exact: false,
        component: CommentDetail,
    },
]