import { Box, Grid, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import btc from '../assets/btc.png';
import Card from './Card';
function Dashboard({ crypto }) {
	return (
		<Box py='2rem' px='3rem'>
			<HStack>
				<Image src={btc} boxSize='30px' />
				<Text fontSize='3xl' fontWeight='600'>
					My Cryptos
				</Text>
			</HStack>
			<Grid templateColumns='repeat(4, 1fr)' gap='2rem' pt='2.5rem'>
				{crypto.map((cr) => (
					<Card
						ticker={cr.base_unit}
						name={cr.name}
						logo={cr.imageURL}
						buy={cr.buy}
						sell={cr.sell}
						change={(cr.open - cr.last).toFixed(2)}
						changePercent={(((cr.open - cr.last) / cr.last) * 1000).toFixed(2)}
						trend={(cr.open - cr.last).toFixed(2) < 0 ? 'down' : 'up'}
						key={cr.id}
					/>
				))}
			</Grid>
		</Box>
	);
}

export default Dashboard;
