import { Button, Card, Form } from "react-bootstrap";
import AdminLayout from "../../../components/AdminLayout/AdminLayout";
import { useState } from "react";

const AdminAddTempUser = () => {
  const [email, setEmail] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tempUser = {
      email: email,
      expirationDate: expiryDate,
      verificationCode: "00000000",
    };

    fetch(`${process.env.REACT_APP_API_URL}/tempuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempUser),
    }).then(() => {
      setEmail("");
      setExpiryDate("");
    });
  };
  return (
    <AdminLayout centered={true}>
      <h1 className="my-5 blue-text">Verificatie code sturen</h1>
      <Card className="shadow-lg">
        <Card.Body className="p-4">
          <Form
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex flex-column"
          >
            <Form.Label htmlFor="emailInput">Email</Form.Label>
            <Form.Control
              type="email"
              id="emailInput"
              placeholder="voorbeeld@mail.nl"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Label htmlFor="expiryInput" className="mt-3">
              Verloopdatum
            </Form.Label>
            <Form.Control
              type="date"
              id="expiryInput"
              placeholder=""
              aria-describedby="expiryContext"
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <Form.Text id="expiryContext" className="px-1" muted>
              Dit is de datum waarop de verificatie code verloopt.
            </Form.Text>

            <Button type="submit" className="mt-3">
              Verstuur
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default AdminAddTempUser;
