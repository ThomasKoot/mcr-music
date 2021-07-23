import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Main from './Components/Main';
import UnderConstuction from './Components/UnderConstruction';

function App() {
  
  return (
    <Flex justify="center" w="full" bg="white">
        <div className="App">
          <UnderConstuction />
        </div>
    </Flex>
  );
}

export default App;
