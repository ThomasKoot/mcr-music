import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Main from './Components/Main';

function App() {
  
  return (
    <Flex justify="center" w="full" bg="white">
        <div className="App">
          <Main />
        </div>
    </Flex>
  );
}

export default App;
