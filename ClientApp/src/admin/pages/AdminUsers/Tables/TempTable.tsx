import ITempUser from "../../../../interfaces/ITempUser";
import { Card, Table } from "react-bootstrap";

interface Props {
  tempUsers: ITempUser[];
  filter?: string;
}

const TempTable = ({ tempUsers, filter = "" }: Props) => {
  function BoldSubstring(text: string, shouldBeBold: string) {
    let textArray = text.toUpperCase().split(shouldBeBold.toUpperCase());
    console.log(textArray.length);

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
              <th className="blue-text">Verloopdatum</th>
              {filter &&
                !["Tijdelijk", "Personeel", "Beheerders"].includes(filter) && (
                  <th className="blue-text">Overeenkomst:</th>
                )}
            </tr>
          </thead>
          <tbody>
            {tempUsers.map((user) => (
              <tr key={user.id}>
                <td className="blue-text">{user.email}</td>
                <td className="blue-text">{user.expirationDate}</td>
                {filter &&
                  !["Tijdelijk", "Personeel", "Beheerders"].includes(
                    filter
                  ) && (
                    <td className="blue-text">
                      {BoldSubstring(
                        `${Object.values(user).find((_) =>
                          `${_}`.toLowerCase().includes(filter.toLowerCase())
                        )}`,
                        filter
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

export default TempTable;
