import { Flex, Stack, Box, Image } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { useState, useEffect } from 'react';
import loading from './assets/loading.svg';
function App() {
	const [crypto, setCrypto] = useState([]);
	useEffect(() => {
		let refreshIntervalId = setInterval(async () => {
			const response = await fetch(
				'https://serverlesscors.vercel.app/api/proxy?url=https://www.wazirx.rocks/api/price'
			);
			const body = await response.json();
			setCrypto(body);
		}, 5000);
		return () => {
			clearInterval(refreshIntervalId);
		};
	}, []);
	return (
		<>
			{crypto.length ? (
				<Stack direction={['column', 'row']}>
					<Box
						w='20%'
						h='100vh'
						bg='white'
						overflowY='auto'
						css={{
							'&::-webkit-scrollbar': {
								display: 'none',
							},
							'&::-webkit-scrollbar-track': {
								display: 'none',
							},
							'&::-webkit-scrollbar-thumb': {
								display: 'none',
							},
							'-ms-overflow-style': 'none',
						}}
					>
						{crypto.length && <Sidebar crypto={crypto} />}
					</Box>
					<Box
						w='80%'
						h='100vh'
						bg='white'
						borderLeft='1px solid #E1E4E8'
						overflowY='auto'
						css={{
							'&::-webkit-scrollbar': {
								display: 'none',
							},
							'&::-webkit-scrollbar-track': {
								display: 'none',
							},
							'&::-webkit-scrollbar-thumb': {
								display: 'none',
							},
							'-ms-overflow-style': 'none',
						}}
					>
						{crypto.length && <Dashboard crypto={crypto} />}
					</Box>
				</Stack>
			) : (
				<Flex alignItems='center' justifyContent='center' h='100vh'>
					<Image src={loading} />
				</Flex>
			)}
		</>
	);
}

export default App;
