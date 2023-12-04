import React from "react";
import { Carousel, Image, Modal } from "react-bootstrap";
import useGraphData from "../../../hooks/useGraphData";
import useFetch from "../../../hooks/useFetch";
import HomeImage from "../../../assets/home-tutorial-page.png";
import ForumImage from "../../../assets/forum-tutorial-page-arrow.png";
import "./Tutorial.scss";

interface Props {
  show: boolean;
  onHide: () => void;
}

const Tutorial = ({ show, onHide }: Props) => {

  return (
    <Modal
      show={show}
      centered={true}
      size="lg"
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Welkom bij Antes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <Image src={HomeImage} className="carousel-image" />
            <Carousel.Caption>
              <h3>Welkom bij de onboarding app van Antes!</h3>
              <p>
                Laten we even door de functionaliteiten van deze app heenlopen.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ForumImage} className="carousel-image" />
            <Carousel.Caption>
              <h3>Op het forum kun je je meningen delen met je collega's</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={HomeImage} className="carousel-image" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default Tutorial;
