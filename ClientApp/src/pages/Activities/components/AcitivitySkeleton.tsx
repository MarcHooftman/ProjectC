import { Card, Placeholder } from 'react-bootstrap'

const AcitivitySkeleton = () => {
    return (
        <Card className="my-3 shadow-lg hover-pointer h-100">
            <Card.Header>
                <Placeholder as={Card.Title} animation='glow' ><Placeholder xs={6} bg="secondary" /></Placeholder>
                <Placeholder as={Card.Subtitle} animation="glow"><Placeholder xs={4} bg="secondary"></Placeholder></Placeholder>
            </Card.Header>
            <Placeholder as={Card.Body} animation="glow">
                <Placeholder xs={12} bg="secondary" />
                <Placeholder xs={12} bg="secondary" />
                <Placeholder xs={12} bg="secondary" />
                <Placeholder xs={5} bg="secondary" />
            </Placeholder>

            <Placeholder as={Card.Footer} animation="glow"><Placeholder xs={3} bg="secondary"></Placeholder></Placeholder>
        </Card>
    )
}

export default AcitivitySkeleton