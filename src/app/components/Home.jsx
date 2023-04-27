import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <>
   <Container>
        <Section id="model-s"
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        />
        <Section
        title="Model-3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        />
        <Section
        title="Model-X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"/>
        <Section id="model-3"
        title="Model-Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"/>

        <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn_more"
        />

        <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roofs"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn_more"
        />
        <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop_now"
        />
         <FotterButton>
            <a href="#">Privacy & Legal </a>
            <a href="#">Vehicle Recalls </a>
            <a href="#">Contact </a>
            <a href="#">Careers</a>
            <a href="#">News </a>
            <a href="#">Engage </a>
            <a href="#">Locations </a>

        </FotterButton>
       
   </Container>
   
    </>
  )
}

export default Home
const Container = styled.div`
height: 100vh;
`
const FotterButton = styled.div`

text-align: center;
padding: 15px;
border-radius: 10px;
overflow: hidden;


a {
  position: flex;
  text-decoration: none;
  color: rgb(151 151 151);
  font-size: 12px;
  flex-wrap: nowrap;
  line-height: 1;
  text-align: center;
  
  width: 100px;
  padding: 10px;
  z-index: 2;
}


 
`
