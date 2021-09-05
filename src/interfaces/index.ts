export interface IState {
    buttonCardComponent: {
        title: string; 
        body?: string; 
        link: string;
    },
    photosCardComponent: {
        image: string;
        title: string;
        link: string;
    },
    twoButtonsCardComponent: {
        title: string; 
        body: string; 
        link: string; 
        onClick : React.MouseEventHandler<HTMLDivElement>
    },
    albumDetailState: {
        userId: number;
        id: number;
        title: string;
    },
    albumPhotosState: {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }[],
    commentState: {
        postId: number;
        id: number;
        email: string;
        body: string;
    },
    userState: {
        id: number,
        username: string,
        name: string
    }[],
    photoState: {
        albumId: number;
        id: number;
        title: string;
        url: string;
    },
    postState: {
        userId: number;
        id: number;
        title: string;
        body: string;
    },
    commentsState: {
        postId: number;
        id: number;
        email: string;
        body: string;
    }[],
    userDetailState: {
        id: number;
        username: string;
        name: string;
        email: string;
        address:{
            city: string;
            zipcode: string
        };
        phone: string;
        website: string;
        company:{
            name: string
        }
    },
    postsState: {
        userId: number;
        id: number;
        title: string;
        body: string;
    }[],
    albumsState: {
        userId: number;
        id: number;
        title: string;
    }[]
}
