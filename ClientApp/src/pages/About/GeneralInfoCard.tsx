import { Card, Table } from "react-bootstrap"

const GeneralInfoCard = () => {
    return (
        <Card className="p-4 my-5 general-info-card shadow">
            <Card.Title className="fs-2">Algemene informatie</Card.Title>
            <Table className="my-2">
                <tbody>
                    <tr>
                        <th className="no-border p-1" scope="row">
                            Telefoon
                        </th>
                        <td className="no-border p-1">010 12 34 567</td>
                    </tr>
                    <tr>
                        <th className="no-border p-1" scope="row">
                            Noodnummer
                        </th>
                        <td className="no-border p-1">06 12 34 56 78</td>
                    </tr>
                    <tr>
                        <th className="no-border p-1" scope="row">
                            Adres
                        </th>
                        <td className="no-border p-1">Nepstraat 123a, Rotterdam</td>
                    </tr>
                    <tr>
                        <th className="no-border p-1" scope="row">
                            Postadres
                        </th>
                        <td className="no-border p-1">
                            Postbus 8549, 3009 AM Rotterdam
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    )
}

export default GeneralInfoCard