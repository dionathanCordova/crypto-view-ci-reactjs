import styled from 'styled-components';

export const Container = styled.div`
   background: #000;
   height: 92vh;
   width: 12vmin;
   border-radius: 20px;
   box-shadow: 8px 9px 28px -7px #000000;

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      width: 90vw;
      height: 12vh;
   }

   position: absolute;
   top: 20px;
   left: 20px;
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      padding: 40px;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      flex-direction: row;
      padding-top: 10px;
   }
`

export const ImageLogoPincipal = styled.img`
   width: 6vmin;
   /* margin-bottom: 40px; */

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      margin-top: 40px;
      margin-bottom: 40px;
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
      margin-top: 40px;
      margin-bottom: 40px;

   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      /* padding: 40px; */
      margin-bottom: 40px;
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      /* paddin */
      margin-top: 40px;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      margin-left: 30px;
      margin-bottom: 0;
      margin-top: 15px;
   }
`
export const LogoMenu = styled.img`
   align-self: center;
   width: 30px;

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      margin-left: 40px;
      margin-top: 15px;
      width: 25px;
   }
`