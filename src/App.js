import React, {useState} from 'react';
import Input from './Components/Input';
import styled from 'styled-components';
import Drop from './Components/Drop';


const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10rem;
  margin-left: 10rem;
`;

const Title = styled.span`
  display: block;
  position: relative;
  left: 40%;
  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: bold;
  font-family: Arial;
  font-size: 25px;
`;



function App() {
  const [value, setValue] = useState(0);
  const [tax, setTax] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="App">
      <Title>React - Juros Compostos</Title>
      <Inputs>
        <Input type="montante" onChange={setValue} />
        <Input type="juromensal"  onChange={setTax} />
        <Input type="periodo" onChange={setTime} />
      </Inputs>
      <Drop value={value} tax={tax} time={time} />
    </div>
  );
}

export default App;
