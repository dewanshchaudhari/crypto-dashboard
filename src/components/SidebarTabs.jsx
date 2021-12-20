import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
function SidebarTabs({ logo, ticker = 'btc', name = 'bitcoin' }) {
	return (
		<VStack pt='1rem' pb='0.5rem' alignItems='flex-start'>
			<HStack>
				<Avatar name={name.split('/').join(' ')} src={logo} boxSize='20px' />
				<Text>{ticker.toLocaleUpperCase()}</Text>
			</HStack>
			<Text pl='1.7rem'>{name}</Text>
		</VStack>
	);
}

export default SidebarTabs;
