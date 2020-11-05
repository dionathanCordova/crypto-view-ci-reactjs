/* eslint-disable no-restricted-globals */
import React from 'react';
import {render} from '@testing-library/react';
import Coin from './index';

it('check coin label', () => {
   render(<Coin coin="BTC" currentPrice={0} oldPrice={0}></Coin>)
   // eslint-disable-next-line jest/valid-expect
   expect(screen.getByText('BTC'));
})