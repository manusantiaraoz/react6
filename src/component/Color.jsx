import { Button, ListGroup } from "react-bootstrap";


const Tarea = ({color, borrarcolor}) => {
    return (
        
            <ListGroup.Item className="d-flex justify-content-between"> <Button Style={`background:${color}`} size="lg" >   </Button> {color}   <Button variant="danger" onClick={()=>{borrarcolor(color)}}>eliminar</Button> </ListGroup.Item>
       
    );
};

export default Tarea;