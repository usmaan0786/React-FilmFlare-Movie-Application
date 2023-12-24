# FilmFlare-Movie-Application

Website Link: [https://filmflare.netlify.app/]

## Abstract:

🎬 Exciting News! 🚀 Just launched a React-based web application named leveraging the power of The Movie Database (TMDB) API! 🍿

### 🌟 Features:

- Browse popular, top-rated, and upcoming movies effortlessly.
- Dive into detailed movie information, including cast members, genres, and recommendations.
- Explore dynamic actor pages showcasing biographies and a curated selection of their filmography.
- Watch movie trailers, visit official websites, and access IMDb links with a click.
- Seamless search functionality for specific titles.

### 🚀 Tech Stack Highlights:

- Efficient use of React, React Router, and props for state management with Redux.
- Leverage the power of hooks like useState, useEffect, and useParams for a dynamic user experience.
- Stylishly crafted using Tailwind CSS for an aesthetically pleasing and responsive interface.
- The Movie Database (TMDB) API integration for real-time and comprehensive movie data.
### 💡 Why this project shines:

- Redux ensures efficient state management, fostering seamless interaction between components.
- React Router enables smooth navigation, enhancing user experience across different pages.
- Tailwind CSS brings a visually appealing and responsive design, making exploration a delight.

### 🚀 Why Netlify?

- Instantaneous deployment for quick and hassle-free updates.
- Reliable performance, ensuring a smooth user experience.
  
👀 Take a sneak peek and explore the cinematic world with our user-friendly platform! 🌐✨

## UI/Ux 
![image](https://github.com/usmaan0786/React-FilmFlare-Movie-Application/assets/72275107/0d461796-f567-46f0-9934-f89729ec5b4f)
![image](https://github.com/usmaan0786/React-FilmFlare-Movie-Application/assets/72275107/d74ee5ce-9d6d-4aec-b770-4955b4218afe)
![image](https://github.com/usmaan0786/React-FilmFlare-Movie-Application/assets/72275107/5c5d0085-52d1-46c1-9734-38f4ba59ee12)
![image](https://github.com/usmaan0786/React-FilmFlare-Movie-Application/assets/72275107/bbb0b6ef-033a-4bc9-9903-0235da8fbe6e)
![image](https://github.com/usmaan0786/React-FilmFlare-Movie-Application/assets/72275107/f0bb3397-c494-4d5a-a806-061d55c6c0a4)
![image](https://github.com/usmaan0786/React-FilmFlare-Movie-Application/assets/72275107/7e1ec3b8-440c-4d2f-b9a1-c11ade5def04)
![image](https://github.com/usmaan0786/React-FilmFlare-Movie-Application/assets/72275107/6a8a5a5f-97c9-4971-b8be-9b0185845295)


## Navbar Component Overview:

- The project's navigation begins with a minimalist Navbar featuring the developer's name and profile picture.
- Search option dynamically appears exclusively on the main or movies page, enhancing user interaction. The Search functionality utilizes an event handler that processes user queries and displays corresponding results. This is facilitated by a Redux setup, including the implementation of a searchMovie action creator, a corresponding reducer, and the integration with the Redux store.

- The Sidebar component, on the other hand, employs custom hooks to seamlessly handle genre and category attributes. Through user interactions with the sidebar, the application dynamically showcases results based on the selected actions. 
- This responsive design approach enhances the user experience, allowing for convenient, streamlined and user-friendly interface.

## Sidebar Component Overview:
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


## Movie Information Page Overview:

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

## Recommendations Component Overview:

- The Recommendations component complements the Movie Information page by displaying top movie recommendations based on the selected movie ID.

- Key Features
  * Utilizes the useGetMovieRecommendationsQuery hook from the TMDB API to fetch movie recommendations for the provided movie ID.
  * Presents a visually appealing layout with images, titles, and star ratings for each recommended movie.
  * Offers clickable links for users to explore more details about each recommended movie.
  * The component seamlessly integrates with the TMDB API to fetch relevant recommendations, enhancing the user's exploration of related content.

- The layout is designed to be visually engaging, providing users with a quick overview of recommended movies along with essential details such as titles and star ratings.

- Each movie recommendation is presented as a clickable link, enabling users to easily navigate to the details page for further exploration.

## Actor Page Overview:

- The Actor component is a React-based page designed to present detailed information about a specific actor, encompassing both personal details and the movies they have contributed to.

- Key Features:

   * Utilizes the useParams hook from React Router to extract the actor's ID parameter from the URL, facilitating dynamic content rendering.
   * Performs API Queries:
      * The useGetActorDetailsQuery hook from the TMDB API fetches comprehensive details about the actor based on the extracted ID.
      * The useGetMoviesByActorIdQuery hook is employed to retrieve movies associated with the actor, incorporating the actor's ID and a designated page number.
   * The component meticulously renders various details about the actor, including their name, birth year, and a comprehensive biography.

- Profile Information:
   * Displays an image of the actor, enhancing the visual appeal of the actor's profile information.
Movie Details:

- For each movie the actor has participated in, the component showcases an image, the movie title, and a star rating based on the movie's vote average.
Interactive Navigation:

- Each movie entry is a clickable link, providing users with a seamless transition to the detailed page of the respective movie.
Styling:

- The layout is crafted with a visually appealing design, ensuring an engaging and immersive exploration experience for users.

## Redux Slice:

- The provided code utilizes the createSlice function from the @reduxjs/toolkit library to define a Redux slice.

- Key Features:

   * Initial states are defined within the slice, establishing the foundation for managing state related to genres or categories.
   * Two reducers are implemented to update specific properties in response to corresponding actions.
   * The Redux slice focuses on managing state related to genres or categories, offering reducers for selecting a genre or category and searching for movies. These reducers facilitate the manipulation of these specific 
     pieces of state within a Redux store.

## Redux Store:

- The code sets up a Redux store, a crucial component for managing global state in a React application using Redux.

- Highlights:

   * Specific reducers are associated with keys in the store, organizing state management for different aspects of the application.
   * Middleware is included to handle asynchronous actions, leveraging the capabilities provided by the tmdbApi instance.
   * The resulting Redux store becomes a central hub for managing state across the application, ensuring consistency and efficiency in handling global state.

## API Configuration:

- The code configures an API interaction layer using the createApi function from @reduxjs/toolkit/query/react. This layer is designed to interact with The Movie Database (TMDB) API.

- Key Aspects:

   * The tmdbApi is created with createApi, specifying a reducerPath and a baseQuery that includes the base URL for the TMDB API.
   * Various endpoints are defined to fetch information about movies, genres, and actors, offering flexibility in querying different aspects of the TMDB database.






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
