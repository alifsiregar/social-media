# Social Media Dashboard

"Social Media Dashboard" is a website to manage and overview users made in React JS with Typescript. This project is made in order to complete one of the recruitment stage of Kumparan.

## About
This project is made in React JS with typescript with several other libraries. There are 8 main features of this website:

1. View list of users.
2. View list of posts of each user
3. View list of albums of each user
4. View the detail of each post and its' comment
5. View list of photos from an album
6. View the detail of photo
7. Add, edit, and delete post
8. Add, edit, and delete comment

There are 6 pages in this website:

1. Home
2. User Detail
3. Post Detail
4. Comment Detail
5. Album Detail
6. Photo Detail

In order to view all available users, navigate to the home page. To see the detail of each user, click the `DETAILS` button on the user card. This will bring you to the user detail page. In here, you can see all the posts and albums that the user currently have. You can also add additional posts by clicking the `Add New Post` button and filling in the required fields. To delete a post, click the `DELETE` button on the post card. To see the details of a post, click the `DETAILS` button to navigate to the post detail page. Here, you can edit the post if you'd like by filling in the required fields and clicking the `SUBMIT` button. You can also see the comments of the post and also add additional comments. To delete a comment, simply click the `DELETE` button on the comment card. To edit a comment, click the `DETAILS` button and fill in the required fields. Finally, to see the photos inside the album that the user have, click the `DETAILS` button on the album card in the user detail page. This will bring you to the album detail page. To see the detail of a photo, click on the card of the photo you'd like to see. This will bring you to the photo detail page, where the title and a bigger resolution image is available.

All data are provided by the JSONPlaceholder [website](https://jsonplaceholder.typicode.com/).

## Tech Stack

* React JS
* Typescript
* Styled Components
* Axios
* React Router
* React Icons

## Structure

Most of the important folders and files are inside the `src` folder. Inside, you will find 4 __files__:

1. `App.tsx`
2. `index.tsx`
3. `routes.tsx`
4. `Global.styles.ts`

`App.tsx` is the root file where all the components are placed. `routes.tsx` is where the routes are placed, and ``Global.styles.ts` is the file for global styles.

Aside from the files, you will also find 4 __folders__:

1. `components`
2. `interfaces`
3. `pages`
4. `services`

All of the pages are stored in `pages`. Inside, there is an `index.ts` file where all the pages are exported to make importing pages easier in other components. `interfaces` folder contains all the typescript types needed for this project, and `components` folder is where the components are placed. Each component has its' own test inside the `__test__` folder. Last, all the HTTP requests needed are located in `services` folder.

## Deployment and Workflow

This project is deployed to github pages and can be accessed [here](https://alifsiregar.github.io/social-media/). The workflow consists of 4 steps:

1. `Install Dependencies`
2. `Run Test`
3. `Build Project`
4. `Deploy Project`

To deploy the project, I am using JamesIves's [Github Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action).

## Documentation

In order to start the app in development mode,  you can run this syntax in the project directory:

### `npm start`

By default, the app will open in [http://localhost:3000](http://localhost:3000). The page also has hot reload, which means that it will refresh if you make any edits.

If you want to build the app for production,  you can run this syntax in the project directory:

### `npm run build`

This will bundle the React in production mode and optimizes the build for the best performance.

The build is then minified and the app is ready to be deployed!
