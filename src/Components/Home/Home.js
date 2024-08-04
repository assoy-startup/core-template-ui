import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { homeStyles } from "../../Styles/homeStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import {ChevronLeftIcon} from '@mui/icons-material';
import { Chart } from "react-google-charts";
import { useLocation } from "react-router-dom";
import MainHome from "../MainHome";
import Images from "../../Utils/Images";


const HomeComponent = observer((props) => {
  const { userStore } = useStores();
  const { classes } = props;

  return (
     <>
     <div className="fullWidth">
     <div className="rowFlex spaceAround" style={{background:'#18243c',height:'7vh'}}>
      <div style={{color:'white',alignSelf:'center'}}><i class="bi bi-envelope"></i> info@casacare.in</div>
      <div style={{color:'white',alignSelf:'center'}}> <i class="bi bi-facebook" />    <i class="bi bi-twitter" />    <i class="bi bi-linkedin" />   <i class="bi bi-google" />  </div>
     </div>
     <div className="rowFlex spaceAround flexCenter" style={{background:'grey',height:'7vh'}}>
      <div style={{alignSelf:'center'}}><img  src={Images.ASSOY} style={{width:'10vw',height:'5vh'}}/></div>
      <div style={{alignSelf:'center'}}>Home</div>
      <div style={{alignSelf:'center'}}>Page</div>
      <div style={{alignSelf:'center'}}>Services</div>
      <div style={{alignSelf:'center'}}>facebook</div>
     </div>
     <br/>
     <div className="rowFlex"  >
     <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Images.SlideOne} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Images.SlideTwo} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Images.SlideThree} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
     </div>
     </div>
     </>
  );
});

export default withStyles(homeStyles, { withTheme: true })(withRouter(HomeComponent));
