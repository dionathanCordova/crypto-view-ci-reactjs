import React from 'react';

import {
	Container,
	Content,
	BoxTitle,
	ContainerBoxSecundaria,
	BoxSecundaria,
	ActiveNumberInfo,
	TextAtivoInfo
} from './styles';

interface HeaderProp {
	qtdSelected: number;
	qtdDisponiveis: number;
}

const ContentHeader: React.FC<HeaderProp> = (props) => {

	const { qtdSelected, qtdDisponiveis } = props;

	return (
		<Container>
			<Content>
				<BoxTitle>
					<ActiveNumberInfo>
						Crypto View Example
					</ActiveNumberInfo>
				</BoxTitle>

				<ContainerBoxSecundaria>
					<BoxSecundaria>
						<ActiveNumberInfo>{qtdSelected}</ActiveNumberInfo>
						<TextAtivoInfo>Ativos selecionados</TextAtivoInfo>
					</BoxSecundaria>

					<BoxSecundaria>
						<ActiveNumberInfo>{qtdDisponiveis}</ActiveNumberInfo>
						<TextAtivoInfo>Ativos disponíveis</TextAtivoInfo>
					</BoxSecundaria>
				</ContainerBoxSecundaria>
			</Content>
		</Container>
	)
}

export default ContentHeader;