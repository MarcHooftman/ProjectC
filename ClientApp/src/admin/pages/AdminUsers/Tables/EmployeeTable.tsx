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
    <Card className="shadow-lg bg-antes-primary">
      <Card.Body>
        <Table striped={true} borderless={true} responsive={true}>
          <thead>
            <tr>
              <th className="text-light">Naam</th>
              <th className="text-light">Functie</th>
              <th className="text-light">Email</th>
              <th className="text-light">Lid sinds</th>
              <th className="text-light">Afdeling</th>
              {filter &&
                !["Tijdelijk", "Personeel", "Beheerders"].includes(filter) && (
                  <th className="text-light">Overeenkomst:</th>
                )}
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td className="text-light">{profile.fullName}</td>
                <td className="text-light">{profile.role}</td>
                <td className="text-light">{profile.email}</td>
                <td className="text-light">{profile.memberSince}</td>
                <td className="text-light">{profile.department}</td>
                {filter &&
                  !["Tijdelijk", "Personeel", "Beheerders"].includes(
                    filter
                  ) && (
                    <td className="text-light">
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
