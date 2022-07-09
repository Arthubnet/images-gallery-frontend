This is a simple full stack Application that retrieves photos from Unsplash with help of my Express REST API

In order to start:

1. Enter any search term in the input field and get the random photo
2. After saving a picture, it's going to be stored in our own MongoDB
3. In order to delete it, simply press "Delete" button
4. "Remove" button removes the picture only from the state and current session
5. If reload an app, all "removed" pictures will show up again due to useEffect hook that Fetches them from our DB
6. Clicking a picture opens it in a full size

Attention: all the found images depend on Unsplash.com search engine, Images Gallery app is only responsible for communication between endpoints.
