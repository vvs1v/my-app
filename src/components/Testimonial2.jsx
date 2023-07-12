import React from "react";
import "../style.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Avatar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCarousel,
  MDBCarouselInner,
  
} from "mdb-react-ui-kit";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  testimonial: {
    marginBottom: theme.spacing(10),
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(7),
  },
}));

export default function Testimonial2() {
  const classes = useStyles();
  return (
    <>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <MDBContainer className="py-5" style={{display:'grid',gridTemplateRows:'.2fr auto',gridTemplateColumns:'NULL',marginLeft:'0px',maxWidth:'100%',
    backgroundColor:'#223b95',paddingTop:'1.5rem',paddingBottom:'1rem'}} >
      <MDBRow className="d-flex justify-content-center" style={{gridColumn:'span 2'}}>
        <MDBCol md="10" xl="8" className="text-center" >
          <h3 className="mb-4" style={{color:'black'}}>Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0" style={{color:"black"}}>
            We are listing some views and thoughts of our clients in thier statements.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch" style={{gridColumn:'span 2',display:'flex',width:'80vw',marginLeft:'10vw'}}>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white" >
              {/* <img
                alt="Rajesh"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
              /> */}
              <Avatar style={{selfAlign:'center',width:'105px',height:'105px'}}
                alt= "Rajesh pilot"
                src={`https://www.example.com/avatars/$2.jpg`}
                
                
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Rajesh Pailot</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                ImPress transormed our data analytics experiende. With its seamless translation capabilities , we efdfortlessly migrated our impala queries to Presto unlocking lightning fast performance and expanding our analutical capabilities.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white" >
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid"
              /> */}
              <Avatar style={{selfAlign:'center',width:'105px',height:'105px'}}
                alt= "Sony Saxena"
                src={`https://www.example.com/avatars/$2.jpg`}
                
                
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Sony Saxena</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                We were amazed by IMpress ability to optimize and translate our complex queries.It saved us valuable time and resources enabling us to translatge impala queries to Presto queries accelerating our data driven decision-making.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white" >
              {/* <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle img-fluid"
              /> */}
              <Avatar style={{selfAlign:'center',width:'105px',height:'105px'}}
                alt= "Rubal Jain"
                src={`https://www.example.com/avatars/$3.jpg`}
                
                
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Rubal Jain</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                ImPress exceeded ouir expectation and proved to be a game-changer for our data-driven organization.With this translator, we've witnessed a remarkable boost in performance.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer></>
  );
}