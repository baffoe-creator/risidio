//import modules
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReadMoreReact from 'read-more-react';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {
  //mediaQuery to detect device size and resize
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  //Navigation bar
  return (
    <>
      
      <Navbar expand="lg" style={{
        backgroundImage: `url('src/assets/gradienta-m_7p45JfXQo-unsplash.png')`, top: '-15px',
        left: '0px',
        width: '1366px',
        height: '128px'
      }}>
        <Container>

          <Navbar.Brand href="#home"> <img
            src="src/assets/Groupe 15980.png"

          /></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="navcol" >

            < Nav className="me-auto">

              <Nav.Link className="link1" href="#home" style={{
                marginRight: '45px'
              }}>Explore</Nav.Link>


              <NavDropdown title={
                <span className="text-white text-primary my-auto">Featured collections</span>
              } href="#link" id="nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav expand="lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Nav.Link href="#deets" >How It Works</Nav.Link>
            <Nav.Link eventKey={2} href="#AboutRisidio">
              About Risidio
            </Nav.Link>
          </Nav>
          <Button variant="" className="bttn" style={{
            textColor: ' #66ccff',
            top: '29px',
            left: '1183px',
            width: '133px',
            height: '43px',
            background: '#b366ff 0% 0% no-repeat padding-box',
            opacity: 0.2,
            borderRadius: '22px',
            font: 'normal normal bold 12px/15px Montserrat ',
          }}>MY NFT</Button>{' '}


        </Container>

      </Navbar>
      
      <div class="container-fluid"  >
        <img src="src/assets/pexels-photo-1183992.png" alt="Collection" style={{
          position: 'relative', position: 'absolute',
          top: '113px',
          left: '0px',
          width: '1366px',
          height: '132px', opacity: '1'
        }} />
        <p className="cont" style={{ position: 'absolute', top: '159px', left: '518px', width: '360px', height: '49px', textAlign: 'left', letterSpacing: '0px', color: '#FFFFFF', textTransform: 'capitalize', opacity: '1' }}>Collection Name</p>
      </div>

      <div class="container-fluid">
        <img src="src/assets/Groupe%2017728.png" alt="Collection" style={{
          position: 'absolute',
          top: '215px',
          left: '636px',
          width: '94px',
          height: '94px', opacity: '1'
        }} /></div>
      <div >
        <p className="An" style={{
          position: 'absolute',
          top: '319px',
          left: '628px',
          width: '110px',
          height: '22px',
          textAlign: 'center',
          font: 'normal normal medium 18px/22px Montserrat',
          letterSpacing: '0px',
          color: '#000000',
          opacity: '1'
        }} ><b>Artist Name</b></p>
      </div>
      <div  >
        <p style={{
          position: 'absolute',
          top: '359px',
          left: '395px',
          width: '576px',
          height: '58px',
          textAlign: 'center',
          font: 'normal normal medium 14px/20px Montserrat',
          letterSpacing: '0px',
          color: '#000000',
          opacity: '1'
        }}  >Description of the NFT / collectable - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this piece…</p>
      </div>
      <div>
        <a
          href="/"
          style={{
            position: 'absolute',
            top: '430px',
            left: '489px',
            width: '402px',
            height: '18px',
            textAlign: 'center',
            font: 'normal normal 600 14px/20px Montserrat',
            letterSpacing: '0px',
            color: '#50B1B5',
            opacity: '1',
            textDecoration: 'none'
          }}>
          <ReadMoreReact text={'Read More'}
            min={80}
            ideal={100}
            max={200}
            readMoreText={'read More'} />

        </a>
      </div>
      <div
        className="coln"
        style={{ position: "relative", top: "326px", left: "378px", width: "611px", height: "93px", background: "#F9F9F9 0% 0% no-repeat padding-box", borderRadius: "25px", opacity: "1", textAlign: "left", }}
      >
        <Container fluid className="bg   mt-5  p-5 rown">
          <Row>
            <Col style={{ textAlign: "left", letterSpacing: "0px", top: "326px", left: "378px", width: "75px", height: "19px", opacity: "1", font: 'normal normal medium 16px/19px Montserrat' }}>Floor Price<p><b>2,835STX</b></p> </Col>
            <Col style={{ textAlign: "left", letterSpacing: "0px", top: "326px", left: "378px", width: "75px", height: "19px", opacity: "1", font: 'normal normal medium 16px/19px Montserrat' }}>Owners<p><b>1236</b></p></Col>
            <Col style={{ textAlign: "left", letterSpacing: "0px", top: "326px", left: "378px", width: "75px", height: "19px", opacity: "1", font: 'normal normal medium 16px/19px Montserrat' }}>Items<p><b>2,500</b></p></Col>
          </Row>
        </Container>
      </div>
      <div
        id="img-wrapper"
        style={{ position: "relative", top: "484px", left: "99px", width: "1178px", height: "265px", background: "#F9F9F9 0% 0% no-repeat padding-box", borderRadius: "25px", opacity: "1", textAlign: "left", }}>
        <div><img src='src/assets/d906524f72b10d30618b74b65ee9528a.png' /></div>
        <div><img src='src/assets/116a3b087dbbf386ca405ce7c211cac7.png' /></div>
        <div><img src='src/assets/b5bf437cac0980dbf606ae1b0cff9da1.png' /></div>

      </div>
    </>
  );
}

export default App; 