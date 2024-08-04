import React from "react";
import { withStyles } from "@mui/styles";
import { homeStyles } from "../../Styles/homeStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import Images from "../../Utils/Images";

const HomeComponent = observer((props) => {
  const { userStore } = useStores();
  const { classes } = props;

  return (
    <>
      <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="rowFlex spaceAround" style={{ background: '#18243c', height: '7vh' }}>
          <div style={{ color: 'white', alignSelf: 'center' }}><i className="bi bi-envelope"></i> info@casacare.in</div>
          <div style={{ color: 'white', alignSelf: 'center' }}>
            <i className="bi bi-facebook" /> <i className="bi bi-twitter" /> <i className="bi bi-linkedin" /> <i className="bi bi-google" />
          </div>
        </div>
        <div className="rowFlex spaceAround flexCenter" style={{ background: 'grey', height: '7vh' }}>
          <div style={{ alignSelf: 'center' }}><img src={Images.ASSOY} style={{ width: '10vw', height: '5vh' }} /></div>
          <div style={{ alignSelf: 'center' }}>Home</div>
          <div style={{ alignSelf: 'center' }}>Page</div>
          <div style={{ alignSelf: 'center' }}>Services</div>
          <div style={{ alignSelf: 'center' }}>Facebook</div>
        </div>
        <br />
        <div className="rowFlex" style={{ flex: 1, alignItems: 'center' }}>
          <div id="carouselExampleCaptions" className="carousel slide" style={{ width: "100%", height: "100%" }}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{ height: "70vh" }}>
              <div className="carousel-item active" style={{ height: "70vh" }}>
                <img src={Images.SlideOne} className="d-block w-100" alt="..." style={{ height: "70vh", objectFit: "cover" }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "70vh" }}>
                <img src={Images.SlideTwo} className="d-block w-100" alt="..." style={{ height: "70vh", objectFit: "cover" }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "70vh" }}>
                <img src={Images.SlideThree} className="d-block w-100" alt="..." style={{ height: "70vh", objectFit: "cover" }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default withStyles(homeStyles, { withTheme: true })(withRouter(HomeComponent));
