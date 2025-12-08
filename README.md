# NetFlix GPT 

- Create React App
- Configured Tailwind CSS
- Routing
- Login Form
- SignUp Form
- Form Validation
- useRef Hook
- firebase setup
- deployed a prod build
- Integrated SignIn/SignUp/SignOut Api
- Created Redux store with user Slice
- Implemented Update Profile
- Refactored Code with routing in App and child routes in Body
- Unsubscribed onAuthStateChanged
- Register TMDB api & create an app & get access token
- Get Data from TMDB now playing movies list api 
- Created Custom Hook for now playing movies
- Created MoviesSlice and updated movies data in the store
- UI Planning for Main and Secondary container
- Fetch Data for trailer videos in Custom Hook and update store
- Embeded the Youtube Video and made it autoPlay and mute
- Changed Css to make it similar to netflix
- Built Secondary Component
- Built Movie list and Movie Card
- TMDB Image CDN url
- Made custom Hooks for different APIs : usePopularMovies , useTopRatedMovies , useUpcomingMovies
- GPT Search Page
- GPT Search Bar
- Multilingual Support to our app
- Made an account in Platforms.openAI
- Integrated Search with OpenAi Api
- Made Search Suggestion component , reused movieList component
- Added a env file and secured the api keys , But while deploying we have to add the env setting in server
- Added .env in git ignore file
- Implemented memoization while fetching movie Lists in browse page
- Made app responsive for mobile view
- Made app responsive for all devices

- Added Autoplay Feature in Video
- Added Bypass SignIn
- Added new feature of Trailer Pop up in center of screen
- Integrated Search with Gemini AI
- Made seperate components for trailer PopUP
- Made the Trailer Pop up responsive

- Provided Offline experience using Service Worker Cache
- Shimmer Ui
- Optimized LightHouse score from 71 to 85
    By increasing CLS score from 5 to 25 by adding Shimmer UI and decreasing the layout shift


# To DO
- Optimize Shimmer UI of cards (height precise)
- Add multiLingual Support
- Video Reels Section

# Features 

- Login/SignUp Page
    - Sign In/Sign Up Form
    - Redirect to Browse Page
- Browse Page (After Authentication)
    - Header
    - Main Movie
        - Trailer in BackGround
        - Title & Description
        - Movie Suggestions 
            - Movie Lists *  N
- NetFlix GPT
    - Search Bar
    - Movie Suggestions

# Deployed in firebase
    - firebase login
    - npm run build
    - firebase deploy

# CI/CD using GitHub Actions
    - Install Firebase tools : npm install -g firebase-tools

    - Login to firebase : firebase login

    - As GitHub Actions cannot log in; you need a token.So generate a token using 
       ** DEPRECATED ** firebase login:ci   (It will output a long token)

    - As the above method is deprecated , so use future proof method
        - Create Service Account
            Google Cloud Console → IAM → Service Accounts → Create service account
            Give it Role -> Firebase Admin , Firebase Hosting Admin
            Then generate a JSON key and download it
        - Save service account JSON in GitHub Secrets
            Open GitHub → Your Repo → Settings → Secrets → Actions
            Create NEW SECRET -> FIREBASE_SERVICE_ACCOUNT and paste the whole downloaded JSON content

    - Create github actions workflows in root folder of project
        .github/workflows/firebase-deploy.yml (in VS code)

    - Also enable firebase api option. As github action uses the firebase apis to deploy using firebase tools
        Google Cloud Console -> APIs & Services -> enable api and wait for 2 minutes

    - Add env variables as well inside github repo secret key, they will be injected during the build time

# End to End Testing using Cypress
    - Install cypress : npm install cypress --save-dev

    - Open Cypress app : npx cypress open
        This will open the cypress app from which select
            end to end testing -> Chrome -> this will open the chrome browser
            After that select the cypress to automatically set up the scafold folder structure.
            This will create the folder cypress
            Inside cypress -> We will write all our test suites inside e2e folder.

    - After installation of cypress and folder creation lets start writing the test suites
    
    - After writing the test suites we have 2 options to run the test suites 
        1. Run the test suit in terminal itself : npx cypress run
            for headed use : npx cypress run --headed (this will open theh browser)
        2. Run the test in cypress app
            npx cypress open -> select the spec folder to run test