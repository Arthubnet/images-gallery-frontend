import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

const ImageCard = ({ image, deleteImage, saveImage, removeImage }) => {
  const authorName = image.user?.name || "No author name";
  const authorPortfoliURL = image.user?.portfolio_url;

  return (
    <Card style={{ width: "18rem" }}>
      <Nav.Link href={image.urls.full} target="_blank">
        <Card.Img variant="top" src={image.urls.small} />
      </Nav.Link>
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text style={{ textTransform: "capitalize" }}>
          {image.description || image.alt_description}
        </Card.Text>
        {image && (
          <Button variant="warning" onClick={() => removeImage(image.id)}>
            Remove
          </Button>
        )}
        {image.saved && (
          <Button variant="danger" onClick={() => deleteImage(image)}>
            Delete
          </Button>
        )}
        {!image.saved && (
          <Button variant="success" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {authorPortfoliURL && (
          <Nav.Link target="_blank" href={authorPortfoliURL}>
            {authorName}
          </Nav.Link>
        )}
        {!authorPortfoliURL && authorName}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
