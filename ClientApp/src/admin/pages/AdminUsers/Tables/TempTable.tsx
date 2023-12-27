import React from "react";
import ITempUser from "../../../../interfaces/ITempUser";
import { Card, Table } from "react-bootstrap";

interface Props {
  tempUsers: ITempUser[];
  filter?: string;
}

const TempTable = ({ tempUsers, filter = "" }: Props) => {
  function BoldSubstring(text: string, shouldBeBold: string) {
    if (!text) return;
    const regex = new RegExp(`(${shouldBeBold})`, "gi");
    const textArray = text.split(regex);

    return (
      <span>
        {textArray.map((item, index) => (
          <React.Fragment key={index}>
            {regex.test(item) ? <b>{item}</b> : item}
          </React.Fragment>
        ))}
      </span>
    );
  }
  return (
    <Card className="shadow-lg bg-antes-primary">
      <Card.Body>
        <Table striped={true} borderless={true} responsive={true}>
          <thead>
            <tr>
              <th className="text-light">Email</th>
              <th className="text-light">Verloopdatum</th>
              {filter &&
                !["Tijdelijk", "Personeel", "Beheerders"].includes(filter) && (
                  <th className="text-light">Overeenkomst:</th>
                )}
            </tr>
          </thead>
          <tbody>
            {tempUsers.map((user) => (
              <tr key={user.id}>
                <td className="text-light">{user.email}</td>
                <td className="text-light">{user.expirationDate}</td>
                {filter &&
                  !["Tijdelijk", "Personeel", "Beheerders"].includes(
                    filter
                  ) && (
                    <td className="text-light">
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
