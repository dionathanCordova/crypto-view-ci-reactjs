// eslint-disable-next-line @typescript-eslint/no-unused-expressions
import React from 'react';

import Logo from '../../assets/images/icon2.svg';
import HomeIcon from '../../assets/images/home-solid.svg';

import {
   Container,
   Content,
   ImageLogoPincipal,
   LogoMenu
} from './styles';

const SideBar: React.FC = () => {
   return (
      <Container>
         <Content>
            <ImageLogoPincipal src={Logo} alt="" />
            <LogoMenu src={HomeIcon} alt=""/>
         </Content>

      </Container>
   )
}

export default SideBar;