import { Button } from 'react-bootstrap';

const BtnComp = (anything) => {
    const handleClickEvent = () => anything.onClick(anything.message)
    return (
        <Button variant="dark" onClick={handleClickEvent}>
            {anything.message}
        </Button>
    )
}
export default BtnComp;