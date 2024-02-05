import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./css/App.css";
import Footer from "./component/footer";
import FormularioTarea from "./component/FormularioColor";



function App() {
  
  

  return (
    <>
      
    <Container className="my-4 mainpage">
      <h5 className="text-center display-6">Selecciona y guarda tus colores</h5>
    <FormularioTarea/>
   
    </Container>
    <Footer/>
     
    </>
    
  )
}

export default App
