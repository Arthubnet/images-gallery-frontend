import React from "react";
import "./welcome.styles.css";

const Welcome = () => (
  <div className="bg-light p-5 rounded-lg m-3">
    <h1 className="display-4">Images Gallery</h1>
    <p className="lead">
      This is a simple full stack Application that retrieves photos from&nbsp;
      <a href="http://www.unsplash.com" target="__blank">
        Unsplash
      </a>
      &nbsp;with help of my Express REST API. In order to start, enter any
      search term in the input field and get the&nbsp;
      <span className="random">random</span> photo. After saving("save" button)
      a picture, it's going to be stored in our cloud database MongoDB Atlas, in
      order to delete it simply press "Delete" button. "Remove" button removes
      the picture only from the state and current session, if the picture was
      saved, page reloading will return it due to useEffect hook that Fetches
      images from our database.
      <br />
      <br />
      <span className="attention">Attention:</span> all the found images depend
      on&nbsp;
      <a href="http://www.unsplash.com" target="__blank">
        Unsplash
      </a>
      &nbsp;search engine, Images Gallery app is only responsible for
      communication between endpoints.
    </p>
  </div>
);

export default Welcome;
