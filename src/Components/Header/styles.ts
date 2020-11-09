import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

`
export const Content = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;

   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      margin-top: 50px;
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
      margin-top: 30px;
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      width: 40rem;
      margin-left: 110px; 
      margin-top: 30px;
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      flex-direction: column;
      margin-left: 110px;      
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      flex-direction: column;
      margin-left: 130px;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      margin-top: 150px;
      margin-left: 0;

      flex-direction: column;
   }
`

export const BoxTitle = styled.div`
   height: 5.5rem;
   width: 40rem;
   border-radius: 8px;
   margin-right: 20px;


   display: flex;
   align-items: center;
   justify-content: center;
  
   @media only screen and (max-width: 2901px) and (max-width: 5900px) {
      /* background-color: violet; */
      width: 40rem;
      margin-right: 20px;
   }

   @media only screen and (max-width: 1501px) and (max-width: 2900px) {
      /* background-color: purple; */
      width: 40rem;
      margin-left: 50px;
      margin-right: 20px;
   }

   @media only screen and (max-width:  1201px) and (max-width: 1500px) {
      /* background-color: yellow; */
      width: 30rem;
      margin-right: 20px;
   }

   @media only screen and (max-width:  901px) and (max-width: 1200px) {
      /* background-color: green; */
      width: 32rem;
      margin:0;
   }

   @media only screen and (max-width:  750px) and (max-width: 900px) {
      /* background-color: red; */
      width: 30rem;
      margin:0;
   }

   @media only screen and (max-width:  600px) and (max-width: 749px) {
      /* background-color: lightblue; */
      width: 100%;
      margin:0;
   }
`

export const ContainerBoxSecundaria = styled.div`
   height: 5.5rem;
   max-width: 35rem;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

export const BoxSecundaria = styled.div`
   background: #f5f5f7;
   width: 25vmin;
   border-radius: 8px;
   margin-left: 5px;
   margin-right: 5px;

   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`

export const Label = styled.label`
   background: #f5f5f7;
   width: 30px;
   position: absolute;
   margin-top: 5px;
   margin-left: 15px;
`

export const InputSearch = styled.input`
   background: #f5f5f7;
   height: 30px;
   border: 0;
   border-radius: 12px;
   padding-left: 40px;
   font-family: 'Roboto', sans-serif;
   margin-bottom: 10px;
   margin-left: 5px;
   margin-right: 5px;
`

export const ActiveNumberInfo = styled.p`
   font-family: 'Fredoka One', cursive;
   font-weight: 400;
   font-size: 25px;
   text-align:center;
`

export const TextAtivoInfo = styled.p`
   font-size: 10px;
   font-family: 'Roboto', sans-serif;
   width: 10vmin;
   font-weight: 500;
   margin-left: 5px;
   line-height: 12px;
`

