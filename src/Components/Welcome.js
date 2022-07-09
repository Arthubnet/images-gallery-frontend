import React from "react";

const Welcome = () => (
  <div className="bg-light p-5 rounded-lg m-3">
    <h1 className="display-4">Images Gallery</h1>
    <p className="lead">
      This is a simple full stack Application that retrieves photos from&nbsp;
      <a href="http://www.unsplash.com" target="__blank">
        Unsplash
      </a>
      &nbsp;with help of my Express REST API. In order to start, enter any
      search term in the input field and get the random photo. After
      saving("save" button) a picture, it's going to be stored in our cloud
      database MongoDB Atlas(there is another version of the&nbsp;
      <a href="https://github.com/Arthubnet/images-gallery" target="__blank">
        app
      </a>
      &nbsp;on my&nbsp;
      <a href="https://github.com/Arthubnet" target="__blank">
        GitHub
      </a>
      &nbsp;, with Docker containers and local MongoDB), in order to delete it
      simply press "Delete" button. "Remove" button removes the picture only
      from the state and current session, if the picture was saved, page
      reloading will return it due to useEffect hook that Fetches images from
      our database.
      <br />
      <br />
      Attention: all the found images depend on&nbsp;
      <a href="http://www.unsplash.com" target="__blank">
        Unsplash
      </a>
      &nbsp;search engine, Images Gallery app is only responsible for
      communication between endpoints.
    </p>
  </div>
);

export default Welcome;
