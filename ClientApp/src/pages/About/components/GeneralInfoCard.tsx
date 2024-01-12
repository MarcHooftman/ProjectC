import { Card, Table } from "react-bootstrap";

const GeneralInfoCard = () => {
  return (
    <Card
      className="p-4 general-info-card shadow bg-antes-primary"
      role="general-info-card"
    >
      <Card.Title className="fs-2">Algemene informatie</Card.Title>
      <Table className="my-2">
        <tbody>
          <tr>
            <th className="no-border p-1 text-light" scope="row">
              Telefoon
            </th>
            <td className="no-border p-1 text-light">010 12 34 567</td>
          </tr>
          <tr>
            <th className="no-border p-1 text-light" scope="row">
              Noodnummer
            </th>
            <td className="no-border p-1 text-light">06 12 34 56 78</td>
          </tr>
          <tr>
            <th className="no-border p-1 text-light" scope="row">
              Adres
            </th>
            <td className="no-border p-1 text-light">
              Loremstraat 123a, Rotterdam
            </td>
          </tr>
          <tr>
            <th className="no-border p-1 text-light" scope="row">
              Postadres
            </th>
            <td className="no-border p-1 text-light">
              Postbus 1234, 3000 AB Rotterdam
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default GeneralInfoCard;
