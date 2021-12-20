import { Avatar, Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import down from '../assets/down.svg';
import up from '../assets/up.svg';
function Card({ logo, ticker, name, change = 100, buy = '4324.75', sell = '4668.93', changePercent = 10, trend }) {
	return (
		<Box
			w='301px'
			h='213px'
			background='#fafbfc'
			border='1px solid #e1e4e8'
			borderRadius='4.5561px'
			mb='16px'
			ml='16px'
		>
			<Flex pt='24px' pb='13px' pl='24px' alignItems='center'>
				<Avatar name={name.split('/').join(' ')} src={logo} />
				<Box pl='13px'>
					<Text color='#24292e' fontWeight='600'>
						{name}
					</Text>
					<Text pt='4px' fontWeight='500' color='#444d56'>
						{ticker.toUpperCase()}
					</Text>
				</Box>
			</Flex>
			<Box pl='86px'>
				<HStack color='#8bc34a'>
					<Text fontWeight='600' fontSize='18px' lineHeight='24px'>
						{change}
					</Text>
					<Text fontWeight='600' fontSize='12px' lineHeight='18px'>
						{changePercent}
					</Text>
					<Image src={trend === 'up' ? up : down} boxSize='1.5rem' />
				</HStack>
				<Text fontWeight='500' fontSize='12px' lineHeight='18px' pt='4px' color='#6a737d'>
					CHANGE
				</Text>
				<hr
					style={{
						borderTop: '1px solid #e1e4e8',
						margin: '12px 24px 12px 0',
					}}
				/>
				<HStack>
					<Box>
						<Text color='#24292e' fontWeight='600' fontSize='14px'>
							{buy}
						</Text>
						<Text color='#6a737d' fontSize='12px' pt='4px'>
							Buy
						</Text>
					</Box>
					<Box borderLeft='1px solid #e1e4e8' mx='12px' h='32px'></Box>
					<Box>
						<Text color='#24292e' fontWeight='600' fontSize='14px'>
							{sell}
						</Text>
						<Text color='#6a737d' fontSize='12px' pt='4px'>
							Sell
						</Text>
					</Box>
				</HStack>
			</Box>
		</Box>
	);
}

export default Card;
