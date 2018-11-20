import React from 'react';
import styled from 'styled-components';
const Header = styled.h1``;
const Info = styled.h4``;
const Div = styled.div`
	width: 98%;
	margin: 0 auto;
`;
const FAQ = () => {
	return (
		<Div>
			<Header>How long is tea good for?</Header>
			<Info>
				The good news is that tea, if properly stored away from air, light and moisture, will never spoil.
			</Info>
			<Header>How do I store tea?</Header>
			<Info>
				The key is to avoid moisture, excessive heat, light, air, and strong, competing aromas (which may be
				absorbed by the tea).
			</Info>
			<Header>Should I refrigerate my tea? </Header>
			<Info>
				We do not recommend keeping tea in the refrigerator. Some prized Green and Oolong teas are refrigerated
				by the growers, distributors and retailers, but the teas are vacuum packed and their refrigerators are
				specialized for this purpose.{' '}
			</Info>
			<Header>Can I brew with the kettle? Do I put the tea leaves in the water as it's warming up? </Header>
			<Info>Strictly speaking, you want to keep your leaves out of a kettle.</Info>
			<Header>Should I cover my cup when I make tea? </Header>
			<Info>
				Yes. It keeps your tea hot and therefore maintains the proper brewing temperature. Most importantly,
				however, it keeps the aromas from escaping.
			</Info>
		</Div>
	);
};

export default FAQ;
