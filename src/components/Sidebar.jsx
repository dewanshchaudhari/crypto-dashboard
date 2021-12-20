import { Box, HStack, Image, Input, InputGroup, InputLeftElement, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import arrow from '../assets/arrow.svg';
import mglass from '../assets/search.svg';
import SidebarTabs from './SidebarTabs';
function Sidebar({ crypto }) {
	return (
		<VStack spacing='2rem' borderLeft='2px'>
			<HStack w='100%' pt='2.5rem' pl='2rem'>
				<Image src={arrow}></Image>
				<Text pl='1.5rem'>Crypto ({crypto.length})</Text>
			</HStack>
			<Box w='100%' px='1rem'>
				<InputGroup>
					<InputLeftElement pointerEvents='none' children={<Image src={mglass} />} />
					<Input placeholder='Search' name='search' />
				</InputGroup>
			</Box>
			<Box w='100%' px='1rem'>
				<hr
					style={{
						color: '#E1E4E8',
					}}
				/>
				<VStack divider={<StackDivider borderColor='#E1E4E8' />} align='stretch'>
					{crypto.map((cr) => (
						<SidebarTabs logo={cr.imageURL} ticker={cr.base_unit} name={cr.name} key={cr.id} />
					))}
				</VStack>
			</Box>
		</VStack>
	);
}

export default Sidebar;
