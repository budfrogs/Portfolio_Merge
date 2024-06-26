import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

function EditModal(props) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ movie: null });

  function handleChange(event) {
    setFormData((prevFormData) => {
      const name = event.target.name;
      return {
        ...prevFormData,
        [event.target.name]: name === "genres" || name === "cast" ? event.target.value.split(",") : event.target.value,
      };
    });
  }

  const openModal = (_id, obj) => {
    setFormData({ ...obj });
    setShow(true); // Show the modal
  };

  const handleClose = () => setShow(false);
  const handleSave = async () => {
    //add update call here!
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch("https://budfrogsdev.me:5005/movie/updateOne", requestOptions);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    window.location.reload(true);
    //setFormData("");
    return response.json();
  };

  return (
    <>
      <Button
        className="btn-animate"
        variant="primary"
        onClick={() => openModal(props.movieId, props.editProps)}
      >
        Edit Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="title"
                className="create-label"
              >
                Title
              </InputGroup.Text>
              <Form.Control
                id="formTitle"
                placeholder="Movie Title"
                aria-label="Title"
                aria-describedby="title"
                value={formData.title}
                onChange={handleChange}
                name="title"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="year"
                className="create-label"
              >
                Year
              </InputGroup.Text>
              <Form.Control
                id="formYear"
                placeholder="Movie Release Year"
                aria-label="Year"
                aria-describedby="year"
                value={formData.year}
                onChange={handleChange}
                name="year"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="cast"
                className="create-label"
              >
                Cast
              </InputGroup.Text>
              <Form.Control
                id="formCast"
                as="textarea"
                title="Comma delimited list of cast names"
                placeholder="Movie Cast"
                aria-label="Cast"
                aria-describedby="cast"
                value={formData.cast}
                rows="4"
                onChange={handleChange}
                name="cast"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="genres"
                className="create-label"
              >
                Genre
              </InputGroup.Text>
              <Form.Control
                id="formGenre"
                as="textarea"
                title="Comma delimited list of genres names"
                placeholder="Movie Genre"
                aria-label="Genre"
                aria-describedby="Genre"
                value={formData.genres}
                rows="3"
                onChange={handleChange}
                name="genres"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-animate"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="btn-animate"
            variant="primary"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
