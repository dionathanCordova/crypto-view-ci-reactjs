import React, { useEffect, useState } from 'react';
import { api } from '../../Services';
import Coin from '../Coin';
import './index.css';

interface Price {
	[key: string]: { description: string, oldPrice: number, currentPrice: number };
}

interface HeaderProps {
	onSelected: (coin: string) => void;
}

const ALL_PRICES: Price = {
	BTC: {description: 'Bitcoin', oldPrice: 0, currentPrice: 0 },
	LTC: {description: 'Litcoin', oldPrice: 0, currentPrice: 0 },
	ETH: {description: 'Ethereum', oldPrice: 0, currentPrice: 0 },
	LINK: {description: 'Chainlink', oldPrice: 0, currentPrice: 0 },
	BCH: {description: 'Bitcoin Cash', oldPrice: 0, currentPrice: 0 },
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { onSelected } = props;
	const [prices, setPrices] = useState<Price>(ALL_PRICES);

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

	return (
		<div className="header">
			{
				Object.keys(prices).map(coin => (
					<div onClick={() => onSelected(coin)}>
						<Coin
							coin={coin}
							oldPrice={prices[coin].oldPrice}
							currentPrice={prices[coin].currentPrice} />
					</div>
				))
			}
		</div>
	)
}