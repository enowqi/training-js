import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Table, TableCaption, Tr, Th, Td, Thead, Tbody } from '@chakra-ui/table'
import Quiz0 from '../Quiz/quiz000';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Table size="sm">
          <TableCaption>プログラミング基礎100本ノック</TableCaption>
          <Thead>
            <Tr>
              <Th>番号</Th>
              <Th>内容</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>000</Td>
              <Td>
                <Quiz0 />
              </Td>
            </Tr>
            <Tr>
              <Td>001</Td>
              <Td>
                {/* ここにクイズ001をおく */}
              </Td>
            </Tr>
            <Tr>
              <Td>002</Td>
              <Td>
                {/* ここにクイズ002をおく */}
              </Td>
            </Tr>
            <Tr>
              <Td>003</Td>
              <Td>
                {/* ここにクイズ003をおく */}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </ChakraProvider>
  );
}

export default App;
