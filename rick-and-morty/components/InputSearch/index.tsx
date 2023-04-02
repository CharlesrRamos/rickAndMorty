import styled from "styled-components";

interface InputProps {
  search: (e: any) => void;
  handleCharacter?: () => void;
}

export default function InputSearch({ search, handleCharacter }: InputProps) {
  return (
    <Container>
      <Input onChange={search} type="text" placeholder="Digite aqui..." />
      <Button onClick={handleCharacter}>Buscar</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3c3e44;
  color: #1d9612;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #a3cfe7;
  color: #1d9612;
  font-size: 16px;
`;
