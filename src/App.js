import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
    <header className="mx-5">
      <Navbar bg="light" variant="light" w-100>
        <Container>
          <Navbar.Brand className='text-danger' href="#home">GOMYCODE</Navbar.Brand>
          <Nav className="px-10">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Courses" id="nav-dropdown">
             <NavDropdown.Item eventKey="4.1">FullStack JS</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">React JS</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Intro to Web Dev</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hackerspaces" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Abidjan</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Alger</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Casablanca</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Dakar</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.5">Lagos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.6">Sousse</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.7">Tunis</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
    <main>
    <Container class="bg-secondary bg-opacity-10 m-5">
      <Row className="px-4 my-5">
        <Col sm={6}>
          <h1 className="my-3 text-danger text-center">GOMYCODE</h1>
          <h2 className="text-success text-center">Learn web dev by making</h2>
          <p className="mt-2 text-center">Nous formons la prochaine génération tech aux technologies les plus récentes et aux métiers du futur pour les préparer au monde professionnel et renforcer leur employabilité.</p>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/100?random=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/100?random=2"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/100?random=3"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col sm={6} className="my-3 px-5">
        <h2 className="text-danger text-center"> Pour plus d'informations, veuillez laisser vos coordonnées</h2>
        <Form>
        <Form.Group className="mb-2" controlId="formFirstName">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="text" placeholder="Mettez votre prénom" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formLastName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Mettez votre nom" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Adresse Mail</Form.Label>
        <Form.Control type="email" placeholder="Mettez votre adresse mail" />
        <Form.Text className="text-muted">
          Nous n'allons pas partager votre adresse mail.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Entrez votre mot de passe" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="J'accepte de recevoir des email de promotion de la part de GomyCode" />
      </Form.Group>
      <div class="d-grid gap-2">
        <Button variant="primary" type="submit">
         Découvrez nos programmes 
        </Button>
      </div>
    </Form>
        </Col>
      </Row>
    </Container>
    </main>
    
    </div>
    
  );
}
export default App;
