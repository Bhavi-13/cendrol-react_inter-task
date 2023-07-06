import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ChuckNorrisCard = ({ category, content }) => {
  const [showModal, setShowModal] = useState(false);
  const [joke, setJoke] = useState('');

  const handleCardClick = async () => {
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      const data = await response.json();
      setJoke(data.value);
      setShowModal(true);
    } catch (error) {
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setJoke('');
  };
  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const handleNextJoke = async () => {
    await fetchJoke();
  };

  return (
    <>
        <Card className="mb-3 p-2 shadow p-3 bg-body-tertiary rounded" onClick={handleCardClick} style={{cursor:"pointer"}}>
                <Card.Body>
                <Card.Title>
                    <h3 className='text-center fw-bold mb-0 mt-2' style={{color:"darkslateblue"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <p className='text-center fw-normal mb-5' style={{color:"blueviolet",fontSize:"14px"}}>{content} {category.charAt(0).toUpperCase() + category.slice(1)} </p>
                </Card.Title>
                </Card.Body>
        </Card>

        <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header className="bg-info" closeButton>
                <Modal.Title className="text-center fw-bold px-5 text-light fs-3" centered> {category.charAt(0).toUpperCase() + category.slice(1)} </Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-center border border-dark m-3 bg-info text-light rounded-4">
                    {joke ? <p className='fs-3 fw-semibold'>"{joke}"</p> : <p>Loading joke...</p>}
                    <Button variant="primary" onClick={handleNextJoke} style={{ width: '75%', color: "black" }} className="fw-bold">Next Joke</Button>
                </Modal.Body>
        </Modal>
    </>
  );
};

export default ChuckNorrisCard;

 

