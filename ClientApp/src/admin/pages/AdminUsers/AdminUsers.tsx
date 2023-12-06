import { useEffect, useState } from "react";
import IProfile from "../../../interfaces/IProfile";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { Button, Card, Form, Table } from "react-bootstrap";

const AdminUsers = () => {
  const [profiles, setProfiles] = useState<IProfile[]>([]);
  const [selected, setSelected] = useState<IProfile[]>([]);
  const [timedOut, setTimedOut] = useState<IProfile[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/profile`)
      .then((response) => response.json())
      .then((data) => setProfiles(data as IProfile[]));
  }, []);

  const handleRowClick = (profile: IProfile) => {
    if (!selected.includes(profile)) {
      setSelected([...selected, profile]);
    } else {
      setSelected(
        selected.filter((selectedProfile) => selectedProfile.id !== profile.id)
      );
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTimedOut(timedOut.concat(selected));
    setSelected([]);
  };

  return (
    <AdminLayout>
      <h1 className="my-5 blue-text">Alle gebruikers</h1>
      <Card className="shadow-lg">
        <Card.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Button type="submit" disabled={selected.length == 0}>
              Time-out
            </Button>
          </Form>
          <Table striped={true} borderless={true} responsive={true}>
            <thead>
              <tr>
                <th className="blue-text">Naam</th>
                <th className="blue-text">Functie</th>
                <th className="blue-text">Email</th>
                <th className="blue-text">Lid sinds</th>
                <th className="blue-text">Afdeling</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr
                  key={profile.id}
                  onClick={() => {
                    if (!timedOut.includes(profile)) handleRowClick(profile);
                  }}
                  className={(timedOut.includes(profile)
                    ? "bg-secondary "
                    : "hover-pointer "
                  ).concat(selected.includes(profile) ? "bg-info" : "")}
                >
                  <td className="blue-text">{profile.fullName}</td>
                  <td className="blue-text">{profile.role}</td>
                  <td className="blue-text">{profile.email}</td>
                  <td className="blue-text">{profile.memberSince}</td>
                  <td className="blue-text">{profile.department}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default AdminUsers;
