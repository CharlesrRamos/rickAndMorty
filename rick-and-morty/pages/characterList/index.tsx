import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCharacters } from "../../services";
import { Character } from "../../models/character";
import CharacterCard from "../../components/CharacterCard";
import InputSearch from "../../components/InputSearch";
import styled from "styled-components";

export default function ({ params }) {
  const [postCount, setPostCount] = useState(10);
  const [data, setData] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const response = await getCharacters(postCount);

      setData(response);
      setIsLoading(false);
    };
    fetch();
  }, [postCount]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleCleanfilter = (e) => {
    setLocation("Selecione o personagem");
  };

  const filteredCharacters = data.filter((character: Character) => {
    return (
      character.name.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || character.location.name === location)
    );
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <Container>
      <InputSearch search={handleInputChange} />
      <div>
        <Select value={location} onChange={handleLocationChange}>
          <option value={location}>
            {!location ? "Selecione o Personagem.. " : location}
          </option>
          {data?.map((character, index) => (
            <option value={character.location.name}>
              {character.location.name}
            </option>
          ))}
        </Select>

        <ButtonFilter onClick={() => setLocation("")}>Limpar</ButtonFilter>
      </div>

      <ContainerCard>
        <ul>
          {filteredCharacters.length > 0 ? (
            <>
              {filteredCharacters?.map((character, index) => (
                <CharacterCard data={character} />
              ))}
              <ContainerButton>
                {postCount >= 20 && (
                  <Button
                    onClick={() => setPostCount(postCount - 10)}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "prev"}
                  </Button>
                )}
                <Button
                  onClick={() => setPostCount(postCount + 10)}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "next"}
                </Button>
              </ContainerButton>
            </>
          ) : (
            <EmptyState>Nenhum Personagem encontrado!!</EmptyState>
          )}
        </ul>
      </ContainerCard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const ContainerCard = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    margin: 0;
    padding: 0;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

const Button = styled.button`
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: #a3cfe7;
  color: #1d9612;
  font-size: 16px;
`;

const EmptyState = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ButtonFilter = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #a3cfe7;
  color: #1d9612;
  font-size: 16px;
`;

const Select = styled.select`
  width: 200px;
  padding: 10px;
  height: 50;
  border: 2px solid #000000;
  border-radius: 5px;
  color: #1d9612;
  background-color: #a3cfe7;
  margin-bottom: 10px;
`;
