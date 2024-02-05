import ListGroup from 'react-bootstrap/ListGroup';
import Tarea from './Color';

const ListaTarea = ({listColor, borrarcolor}) => {
    return (
        <ListGroup>
            {

listColor.map((color,i)=><Tarea key={i} color={color} borrarcolor={borrarcolor} ></Tarea>)

            }

      </ListGroup>
    );
};

export default ListaTarea;