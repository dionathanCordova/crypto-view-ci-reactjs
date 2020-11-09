import React, { useCallback, useEffect, useState } from 'react';

import SideBar from '../../Components/SideBar';
import Header from '../../Components/Header';

import Chart from '../../Components/Chart';
import App from '../../Components/App';
import { FiTrash, FiPlus, FiBarChart } from 'react-icons/fi';

import {
   Container,
   Content,
   ContainerBody,
   HoldBoxes,
   BoxChard,
   BoxContainerChard,
   BoxActives,
   Title,
   TitleActive,
   HoldContentActive,
   MenuEcolha,
   MenuLinks,
   Subtitle,
   TitleSelect,
   TitleNotSelect,
   Button,
   ButtonText
} from './styles';

import { api } from '../../Services';

interface TextProp {
   selected: boolean;
}

interface Price {
   [key: string]: { description: string, oldPrice: number, currentPrice: number };
}

const ALL_PRICES: Price = {
   BTC: { description: 'Bitcoin', oldPrice: 0, currentPrice: 0 },
   LTC: { description: 'Litcoin', oldPrice: 0, currentPrice: 0 },
   ETH: { description: 'Ethereum', oldPrice: 0, currentPrice: 0 },
   LINK: { description: 'Chainlink', oldPrice: 0, currentPrice: 0 },
   BCH: { description: 'Bitcoin Cash', oldPrice: 0, currentPrice: 0 },
}

const ALL_SELECTED: Price = {
}

interface ActiveProp {
   [key: string] : { description: string, oldPrice: number, currentPrice: number };
}

const Home: React.FC = () => {
   const [coinSelected, setCoinSelected] = useState('LTC');
   const [menuSelected, setMenuSelected] = useState('selecionadas');

   const [prices, setPrices] = useState<Price>(ALL_PRICES);
   const [selected, setSelected] = useState<Price>(ALL_SELECTED);
   const [selectedActs, setSelectedActs] = useState<ActiveProp>({})

   useEffect(() => {
      const intervals = Object.keys(ALL_PRICES).map((coin) => {
         return setInterval(() => {
            api.get(`price?fsym=${coin}&tsyms=BRL`).then((response) => {
               setPrices((prevState) => {
                  if (prevState[coin].currentPrice === response.data.BRL) {
                     return prevState;
                  }
                  return {
                     ...prevState,
                     [coin]: {
                        description: prevState[coin].description,
                        oldPrice: prevState[coin].currentPrice,
                        currentPrice: response.data.BRL
                     }
                  }
               })
            })
         }, 1000);
      });

      return () => {
         intervals.forEach(interval => clearInterval(interval));
      }
   }, [])

   function handleAddAtivo(coin: string, description: string) {
      setSelectedActs(prev => {
         return { 
            ...prev, 
            [coin]: {
            description: description,
            oldPrice: 0,
            currentPrice: 0
         }}
      });
   }

   return (
      <Container>
         <SideBar />
         <Content>
            <Header qtdSelected={Object.keys(selectedActs).length} qtdDisponiveis={Object.keys(ALL_PRICES).length}/>
            <ContainerBody>
               <HoldBoxes>
                  <BoxContainerChard>
                     <Title>
                        Chart
                     </Title>
                     <Subtitle>
                        Chart selecionado
                     </Subtitle>
                     <BoxChard>
                        <Chart coin={coinSelected} />
                     </BoxChard>
                  </BoxContainerChard>
                  <BoxActives>
                     <Title>
                        Ativos
                     </Title>
                     <MenuEcolha>
                        <MenuLinks onClick={() => setMenuSelected('selecionados')}>Ativos Selecionados</MenuLinks>
                        <MenuLinks onClick={() => setMenuSelected('disponiveis')}>Adicionar Ativos</MenuLinks>
                     </MenuEcolha>

                     {Object.keys(selectedActs).length === 0 &&  (
                        <TitleNotSelect>Nenhum ativo selecionaod no momento</TitleNotSelect>
                     )}

                     {Object.keys(selectedActs).length !== 0 && menuSelected === 'selecionados' &&

                        Object.keys(selectedActs).map(coin => (

                           <HoldContentActive key={coin}>
                              {coinSelected === coin && (
                                 <TitleSelect>{coin} - {selectedActs[coin].description}</TitleSelect>
                              )}
                              {coinSelected !== coin && (
                                 <TitleNotSelect>{coin} - {selectedActs[coin].description}</TitleNotSelect>
                              )}
                              <Button onClick={() => setCoinSelected(coin)}>
                                 <FiBarChart size={15} color="#FFF" />
                              </Button>
                           </HoldContentActive>
                        ))
                     }

                     {menuSelected === 'disponiveis' &&
                        Object.keys(prices).map(coin => (

                           <HoldContentActive key={coin}>
                              {coinSelected === coin && (
                                 <TitleSelect>{coin} - {prices[coin].description}</TitleSelect>
                              )}
                              {coinSelected !== coin && (
                                 <TitleNotSelect>{coin} - {prices[coin].description}</TitleNotSelect>
                              )}

                              <div className="btnGroup">
                                 <Button onClick={() => handleAddAtivo(coin, prices[coin].description)}>
                                    <FiPlus size={15} color="#FFF" />
                                 </Button>

                                 <Button onClick={() => handleAddAtivo(coin, prices[coin].description)}>
                                    <FiTrash size={15} color="#FFF" />
                                 </Button>
                              </div>
                           </HoldContentActive>
                        ))
                     }

                     {/* {Object.keys(prices).map(coin => (

                        <HoldContentActive>
                           {coinSelected === coin && (
                              <TitleSelect>{coin} - {prices[coin].description}</TitleSelect>
                           )}
                           {coinSelected !== coin && (
                              <TitleNotSelect>{coin} - {prices[coin].description}</TitleNotSelect>
                           )}
                           <Button onClick={() => setCoinSelected(coin)}>
                              <ButtonText>
                                 Gráfico
                              </ButtonText>
                           </Button>
                        </HoldContentActive>
                     ))} */}
                  </BoxActives>
               </HoldBoxes>
            </ContainerBody>
         </Content>
      </Container>
   )
}

export default Home;