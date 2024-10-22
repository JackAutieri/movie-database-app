# Movie Database Application

## Overview

This Movie Database Application is a sleek and stylish web application that allows users to search for movies and view detailed information about them. The app uses the [TMDb API](https://www.themoviedb.org/documentation/api) to fetch movie data, including titles, release dates, and poster images.

## Features

- **Search Functionality**: Users can search for movies by title.
- **Movie Details**: Display movie posters, titles, and release dates.
- **Responsive Design**: The app is designed to be responsive and looks great on all devices.
- **Styled Components**: Uses styled-components for styling, providing a modern and maintainable way to manage CSS in JavaScript.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Styled-Components**: For writing CSS in JS.
- **Axios**: For making HTTP requests.
- **TMDb API**: To fetch movie data.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.
- A TMDb API key. You can get one by creating an account on [TMDb](https://www.themoviedb.org/) and generating an API key from your account settings.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/movie-database-app.git
```

2. Navigate to the project directory:

```bash
cd movie-database-app
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add your TMDb API key:

```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```

5. Start the development server:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

## File Structure

```
movie-database-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   └── SearchForm.js
│   ├── services/
│   │   └── movieService.js
│   ├── styles/
│   │   └── globalStyles.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env
├── package.json
└── README.md
```

## Components

### MovieCard

Displays individual movie details including the poster, title, and release date.

### MovieList

Displays a list of movies in a flexible grid layout.

### SearchForm

Contains the search input field and button to submit a movie search query.

## Services

### movieService

Contains the function to fetch movie data from the TMDb API.

## Styles

### globalStyles

Defines global styles for the application using styled-components.

## Usage

1. **Search for Movies**: Enter a movie title in the search bar and click the "Search" button.
2. **View Movie Details**: Browse the search results and view movie details such as the poster, title, and release date.

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TMDb API](https://www.themoviedb.org/documentation/api) for providing movie data.
- [React](https://reactjs.org/) for the awesome library.
- [Styled-Components](https://styled-components.com/) for elegant styling solutions.

