import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
`

export const Content = styled.div`
   width: 80%;
   height: 92vh;
   /* position: absolute; */
   /* right: 4%; */
   /* top: 20px; */
   margin: auto;

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      width: 76%;
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      width: 73%;
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      width: 70%;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      width: 100%;
   }
`

export const ContainerBody = styled.div`
   width: 100%;
   height: 40rem;

   display: flex;
   flex-direction: row;
   justify-content: center;

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      margin-top: -80px;
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
      margin-top: -30px;
      height: 28rem;
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      margin-top: -50px;
      flex-direction: column;
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      margin-top: 100px;
      flex-direction: column;
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      margin-top: 150px;
      flex-direction: column;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      margin-top: 160px;
      flex-direction: column;
   }
`

export const HoldBoxes = styled.div`
   width: 62rem;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      /* width: 73rem; */
      width: 73.5rem;
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      flex-direction: column;
      width: 22rem; 
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      flex-direction: column;
      width: 22rem; 
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      flex-direction: column;
      width: 25rem; 
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      flex-direction: column;
      width: 22rem; 
   }
`

export const BoxContainerChard = styled.div`
   display:flex;
   flex-direction: column;

   height: 400px;
   width: 40rem;  

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      width: 46rem;
      margin-top: 120px;
      margin-left: 90px;
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
      width: 38.5rem;
      margin-top: 70px;
      margin-left: 90px;
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      width: 35rem;
      margin-top: 250px;
      margin-left: 150px;
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      margin-top: -50px;
      width: 40rem;
      margin-left: 110px; 
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      margin-top: -150px;
      width: 30rem;
      margin-left: 55px;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      margin-top: -190px;
      width: 32rem;
      margin-left: 0px;
   }
`

export const BoxChard = styled.div`
   padding: 20px;
   background: #f5f5f7;
   height: 400px;
   width: 40rem;
   border-radius: 8px;

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      width: 46rem;
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
      width: 38.5rem;
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      margin-top: 0px;
      margin-left: 0px;
      width: 35.5rem;
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      margin-left: 0px;
      margin-top: 0px;
      width: 35rem;
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      margin-top: -150px;
      margin-top: 0px;
      width: 30rem;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      margin-top: 0px;
      width: 30rem;
      align-self:center;
   }
   
`

export const BoxActives = styled.div`
   display:flex;
   flex-direction: column;
   height: 5.5rem;
   width: 20rem;
   /* max-width: 35rem; */

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      margin-top: 120px;

   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
      margin-top: 70px;
      margin-right: 40px;
      width: 19.5rem;
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      width: 40rem;
      margin-left: 110px; 
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      width: 35rem;
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      width: 30rem;
      margin-left: 55px;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      width: 30rem;
      margin-left: 15px;
   }
`

export const HoldContentActive = styled.div`
   background: #f5f5f7;
   /* width: 20rem; */
   border-radius: 8px;
   margin-bottom: 10px;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`

export const Title = styled.p`
   font-size: 18px;
   font-family: 'Fredoka One', cursive;
   margin-bottom: 20px;
   margin-left: 15px;
`

export const TitleActive = styled.p`
   font-size: 14px;
   font-family: 'Fredoka One', cursive;
   padding: 14px;
   margin-left: 15px;
`

export const MenuEcolha = styled.div`
   width: 21.5rem;
   height: 30px;

   display: flex;
   flex-direction: row;
   margin-bottom: 5px;
`

export const MenuLinks = styled.button`
   font-size: 10px;
   font-family: 'Fredoka One', cursive;
   padding-right: 20px;
   background: #FFF;
   border: 0;
`

export const Subtitle = styled.p`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   color: #828282;
   margin-bottom: 20px;
   margin-left: 15px;

`


export const TitleSelect = styled.p`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   color: #828282;
   font-weight: 500;
   padding: 20px;
`

export const TitleNotSelect = styled.p`
   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   color: #ccc;
   padding: 20px;
`

export const Button = styled.button`
   background: #000;
   border-radius: 10px;
   height: 40px;
   margin: 2px;
   width: 40px;
`

export const ButtonText = styled.p`
   color : #FFF;
   font-size: 10px;
   font-family: 'Fredoka One', cursive;
   padding-left: 20px;
   padding-right: 20px;
`