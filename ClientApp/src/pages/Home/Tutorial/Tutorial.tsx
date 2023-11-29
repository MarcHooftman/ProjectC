import React from "react";
import { Carousel, Image, Modal } from "react-bootstrap";
import useGraphData from "../../../hooks/useGraphData";
import useFetch from "../../../hooks/useFetch";
import HomeImage from "../../../assets/home-tutorial-page.png";
import ForumImage from "../../../assets/forum-tutorial-page-arrow.png";
import "./Tutorial.scss";

const Tutorial = () => {
  const [showTutorial, setShowTutorial] = React.useState<boolean>(true);
  const { graphData } = useGraphData();
  const { data } = useFetch(
    `https://localhost:7185/api/profile/by-email/${graphData?.mail}`
  );
  console.log(data);

  const isToday = (isoString: string): boolean => {
    const today = new Date();
    const date = new Date(isoString);

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <Modal
      show={isToday(data?.memberSince) && showTutorial}
      centered={true}
      size="lg"
      onHide={() => setShowTutorial(false)}
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
