import { Card, Table } from "react-bootstrap";
import IProfile from "../../../../interfaces/IProfile";
import React from "react";

interface Props {
  profiles: IProfile[];
  filter?: string;
}

const EmployeeTable = ({ profiles, filter = "" }: Props) => {
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
    <Card className="shadow-lg">
      <Card.Body>
        <Table striped={true} borderless={true} responsive={true}>
          <thead>
            <tr>
              <th className="blue-text">Naam</th>
              <th className="blue-text">Functie</th>
              <th className="blue-text">Email</th>
              <th className="blue-text">Lid sinds</th>
              <th className="blue-text">Afdeling</th>
              {filter &&
                !["Tijdelijk", "Personeel", "Beheerders"].includes(filter) && (
                  <th className="blue-text">Overeenkomst:</th>
                )}
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td className="blue-text">{profile.fullName}</td>
                <td className="blue-text">{profile.role}</td>
                <td className="blue-text">{profile.email}</td>
                <td className="blue-text">{profile.memberSince}</td>
                <td className="blue-text">{profile.department}</td>
                {filter &&
                  !["Tijdelijk", "Personeel", "Beheerders"].includes(
                    filter
                  ) && (
                    <td className="blue-text">
                      {BoldSubstring(
                        `${Object.values(profile).find((_) =>
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

export default EmployeeTable;
