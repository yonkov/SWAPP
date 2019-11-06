Open-source React Web Application that explores some interesting Star Wars data from GraphQL server.

## Data

### 1. Data is fetched from GraphQL Server via Apollo client

### 2. There is only one user available:
Email: demo@st6.io Password: demo1234

### 3. Authenticating GraphQL queries

Authenticating the queries happens by adding Authorization header (jwt token) to the request with value Bearer <token>

## Routes

Routes are implemented via react-router-dom.

### 1. Routes that don't require authentication :/login

If the user is not registered, he is always redirected to the login page.

### 2. Routes that require authentication: :/episodes, :/episodes/id, :/characters, :/characters/id

## UI/UX
### 1. Clicking on the SWAPP logo changes the theme from dark to light and vice versa.
The selected theme is stored across sessions, i.e. if the user opted for
the dark theme and closes the window, once she reopens it, the dark theme
is be applied.
### 2. If there is some kind of an error during login, an appropriate info message is shown on the frontend (‘Invalid Credentials’)
### 3. The app is fully responsive. Without the use of any frameworks
### 4. Pagination is applied wherever applicable (List characters page and in Single episode page)
