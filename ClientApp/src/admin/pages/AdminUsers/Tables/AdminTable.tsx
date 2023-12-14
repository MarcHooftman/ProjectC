import { Card, Table } from "react-bootstrap";
import IAdmin from "../../../../interfaces/IAdmin";

interface Props {
  admins: IAdmin[];
  filter?: string;
}

const AdminTable = ({ admins, filter = "" }: Props) => {
  function BoldSubstring(text: string, shouldBeBold: string) {
    if (!text) return;
    const textArray = text.split(shouldBeBold);
    return (
      <span>
        {textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && <b>{shouldBeBold}</b>}
          </>
        ))}
      </span>
    );
  }
  return (
    <Card className="shadow-lg">
      <Card.Body>
        <Table striped={true} borderless={true} responsive={true}>
          <thead>
            <tr>
              <th className="blue-text">Email</th>
              <th className="blue-text">Level</th>
              {filter &&
                !["Tijdelijk", "Personeel", "Beheerders"].includes(filter) && (
                  <th className="blue-text">Overeenkomst:</th>
                )}
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="blue-text">{admin.email}</td>
                <td className="blue-text">{admin.level}</td>
                {filter &&
                  !["Tijdelijk", "Personeel", "Beheerders"].includes(
                    filter
                  ) && (
                    <td className="blue-text">
                      {BoldSubstring(
                        `${Object.values(admin).find((_) =>
                          `${_}`.toLowerCase().includes(filter.toLowerCase())
                        )}`,
                        `${filter}`
                      )}
                    </td>
                  )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AdminTable;
