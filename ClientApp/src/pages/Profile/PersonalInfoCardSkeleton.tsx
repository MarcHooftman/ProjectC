import { Card, Col, Placeholder, Row, Table } from "react-bootstrap";

const PersonalInfoCardSkeleton = () => {
  const pfp = require("../../assets/profile-icon.svg");
  return (
    <Card className={"personalia shadow-lg"}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <img className="pfp" src={pfp} alt="profile picture" />
          <Placeholder as={Table} animation="glow">
            <tbody className="d-flex flex-column gap-2 me-5 mt-4">
              <Row as="tr" className="d-flex justify-content-end">
                <Placeholder as="th" xs={3} bg="secondary" />
                <Placeholder as="td" xs={2} bg="secondary" />
              </Row>
              <Row as="tr" className="d-flex justify-content-end">
                <Placeholder as="th" xs={3} bg="secondary" />
                <Placeholder as="td" xs={2} bg="secondary" />
              </Row>
              <Row as="tr" className="d-flex justify-content-end">
                <Placeholder as="th" xs={3} bg="secondary" />
                <Placeholder as="td" xs={2} bg="secondary" />
              </Row>
              <Row as="tr" className="d-flex justify-content-end">
                <Placeholder as="th" xs={3} bg="secondary" />
                <Placeholder as="td" xs={2} bg="secondary" />
              </Row>
              <Row as="tr" className="d-flex justify-content-end">
                <Placeholder as="th" xs={3} bg="secondary" />
                <Placeholder as="td" xs={2} bg="secondary" />
              </Row>
              <Row as="tr" className="d-flex justify-content-end">
                <Placeholder as="th" xs={3} bg="secondary" />
                <Placeholder as="td" xs={2} bg="secondary" />
              </Row>
            </tbody>
          </Placeholder>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PersonalInfoCardSkeleton;
