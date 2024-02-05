import { Button, Form, Container } from "react-bootstrap";
import ListaTarea from "./ListaColor";
import { useState, useEffect } from "react";

const FormularioTarea = () =>{

  const[color , setcolor]=useState(" ");
  const listaLocalS=JSON.parse(localStorage.getItem("colorsKey"))||[];
  const [listColor, setlistColor] = useState(listaLocalS);

  useEffect(()=>{
    localStorage.setItem("colorsKey", JSON.stringify(listColor))
  
    }, [listColor,color])
    




  const handleSubmit =(e)=>{
      e.preventDefault();
    setlistColor([...listColor,color]);
    setcolor("")
  }
  


  const borrarcolor =(nombrecolor)=>{

    const borrar=listColor.filter((dcolor)=>dcolor!==nombrecolor);
    setlistColor(borrar); 
  }

  return (
    <section>
      <Container>
      <Form onSubmit={handleSubmit} className="flex-grow-1" >
        <Form.Group  controlId="exampleForm.ControlInput1" className="d-flex justify-content-evenly my-5" >
          
          <Form.Control
            type="text"
            minLength={3}
            maxLength={50}
            value={color}
            className="w-25"
            disabled
            />
          <Form.Control
            type="color"
            onChange={(e)=> {setcolor(e.target.value)}}
            className="w-75"
            value="#00000"           
            />
          <Button variant="warning" className="ms-2" type="submit">
            agregar
          </Button>
        
        </Form.Group>
      </Form>
      </Container>
      <ListaTarea listColor={listColor} borrarcolor={borrarcolor}/>
    </section>
  );
};

export default FormularioTarea;
