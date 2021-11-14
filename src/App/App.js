import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Table, TableCaption, Tr, Th, Td, Thead, Tbody } from '@chakra-ui/table'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Table variant="simple">
          <TableCaption>プログラミング基礎100本ノック</TableCaption>
          <Thead>
            <Tr>
              <Th>番号</Th>
              <Th>問題</Th>
              <Th>答え</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>000</Td>
              <Td>実行するとHello World!と表示するプログラムを作成せよ。</Td>
              <Td>
                {/* ここにクイズ000をおく */}
              </Td>
            </Tr>
            <Tr>
              <Td>001</Td>
              <Td>12345+23456を計算して結果を表示するプログラムを作成せよ。</Td>
              <Td>
                {/* ここにクイズ001をおく */}
              </Td>
            </Tr>
            <Tr>
              <Td>002</Td>
              <Td>12345を7で割った余りを表示するプログラムを作成せよ。</Td>
              <Td>
                {/* ここにクイズ002をおく */}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </ChakraProvider>
  );
}

export default App;
