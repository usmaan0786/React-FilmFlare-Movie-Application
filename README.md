# FilmFlare-Movie-Application

## Abstract:

The project is a React-based web application that leverages The Movie Database (TMDB) API to provide users with a comprehensive platform for exploring movies, actors, and genres. The application offers features such as browsing popular movies, top-rated movies, upcoming releases, and searching for specific titles. Users can also discover detailed information about movies, including cast members, genres, and recommendations. The platform incorporates dynamic pages for actors, showcasing their biographies and a selection of movies they have participated in. Additionally, users can explore movie trailers, websites, and IMDb links. The project utilizes Redux for state management, enabling seamless interaction between different components. Tailwind CSS ensures an aesthetically pleasing and responsive user interface, while React Router facilitates smooth navigation across the application. The result is an engaging and user-friendly movie exploration platform with detailed actor profiles and a visually appealing interface.

## Navbar:

- The project's navigation begins with a minimalist Navbar featuring the developer's name and profile picture.
- Search option dynamically appears exclusively on the main or movies page, enhancing user interaction. The Search functionality utilizes an event handler that processes user queries and displays corresponding results. This is facilitated by a Redux setup, including the implementation of a searchMovie action creator, a corresponding reducer, and the integration with the Redux store.

- The Sidebar component, on the other hand, employs custom hooks to seamlessly handle genre and category attributes. Through user interactions with the sidebar, the application dynamically showcases results based on the selected actions. 
- This responsive design approach enhances the user experience, allowing for convenient, streamlined and user-friendly interface.

## Sidebar
- Custom hooks are employed to invoke actions related to genre and category attributes.
- As a user interacts with the Sidebar, the application dynamically presents results based on the selected actions, providing a responsive and tailored browsing experience.

## Main Movies Component Overview:

- The code defines a React component named "Movies" responsible for displaying a list of movies based on the selected genre or category.

- It utilizes the useState hook to manage the current page (Page) of movie results, allowing for efficient pagination.

- The useSelector hook retrieves the genreOrCategoryName and searchQuery from the Redux store's currentGenreOrCategory slice, ensuring accurate data retrieval.

- The useGetMoviesQuery hook from the TMDB API fetches movies based on the selected genre or category, the current page, and any specified search query.

- If data is still being fetched (isFetching is true), a loading message is displayed, providing a seamless user experience.

- Error Handling: In the event of an error during the API call, an error message is displayed, enhancing user awareness and transparency.

- Multiple Rendered Components: The component renders various elements, including a search bar for querying movies, a featured movie section, a list of movies, and a Pagination component for easy navigation between pages.

- Each movie component within the list includes a poster, name, and rating, offering users key information at a glance.


## ovie Information Page Overview:

- The Movie Information page is accessed by clicking on any movie card, providing users with in-depth details about the selected movie.

- Components Displayed:

  * Movie Poster
  * Movie Title
  * Overview
  * Rating
  * IMDb Rating
  * Language
  * Top Cast Members
  * Movie Official Website
  * IMDb Official Website
  * Trailer Link
- The useGetMovieByIDQuery hook from the TMDB API is employed to fetch comprehensive details about the movie using the provided id parameter.

- The page delivers relevant and comprehensive information about the selected movie, including its key attributes and top cast members.

- Additionally, the page provides relevant movie recommendations, enhancing the user experience by suggesting related content.

- Users have the option to explore the official website of the movie, visit the IMDb page, and watch the trailer directly from the Movie Information page.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
