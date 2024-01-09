import { Carousel, Image, Modal } from "react-bootstrap";
import HomeImage from "../../../../assets/home-tutorial-page.png";
import ForumImage from "../../../../assets/forum-tutorial-page-arrow.png";
import ForumPageImage from "../../../../assets/forum-page-tutorial.png";
import ActivityPageImage from "../../../../assets/activity-page-tutorial.png";
import ProfilePageImage from "../../../../assets/profile-page-tutorial.png";
import TrainingPageImage from "../../../../assets/training-page-tutorial.png";
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
      onHide={onHide}
      dialogClassName="tutorial-modal"
      role="tutorial-modal"
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
              <h3>Hier vind je alle pagina's.</h3>
              <p>Bijvoorbeeld de forum pagina.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ForumPageImage} className="carousel-image" />
            <Carousel.Caption>
              <h3>Dit is de forum pagina.</h3>
              <p>
                Hier kun je jouw meningen, ideeën en ervarigen delen met je
                collega's.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ActivityPageImage} className="carousel-image" />
            <Carousel.Caption>
              <h3>Dit is de activiteiten pagina.</h3>
              <p>
                Hier kun je zien welke activiteiten gepland zijn en aangeven of
                je aanwezig zal zijn.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={ProfilePageImage} className="carousel-image" />
            <Carousel.Caption>
              <h3>Dit is jouw profiel.</h3>
              <p>
                Hier kun je jouw profiel bekijken en aanpassen. Ook kun je hier
                jouw posts bekijken.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={TrainingPageImage} className="carousel-image" />
            <Carousel.Caption>
              <h3>Dit is de Training pagina.</h3>
              <p>Hier kun je trainingen bekijken en afleggen.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default Tutorial;
