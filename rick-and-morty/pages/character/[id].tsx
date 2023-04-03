import React from "react";
import { getCharacter, getCharacters } from "../../services";
import styled from "styled-components";

export default function ({ params }) {
  console.log(params);
  return (
    <Container>
      <Image src={params.image} alt={params.name} />
      <ContainerFavorite>
        <Info>
          <h2>{params.name}</h2>
          <p>
            {params.status} - {params.species}
          </p>
          <p>{params.location.name}</p>
          <Table>
            <tbody>
              <tr>
                <td>Gender</td>
                <td>{params.gender}</td>
              </tr>
              <tr>
                <td>Origin</td>
                <td>{params.origin.name}</td>
              </tr>
              <tr>
                <td>Episodes</td>
                <td>{params.episode.length}</td>
              </tr>
            </tbody>
          </Table>
        </Info>
        <Button>Favoritar</Button>
      </ContainerFavorite>
    </Container>
  );
}

export async function getStaticPaths(context) {
  const data = await getInfoCharacters();

  var dataIds = Array.from(Array(data.count + 1).keys()).slice(1);

  var paths = dataIds.map((item) => {
    return { params: { id: String(item) } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getCharacter(params.id);

  return {
    props: {
      params: data,
    },
  };
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  h2 {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
  }

  p {
    margin: 0;
  }
`;

const Table = styled.table`
  margin-top: 20px;

  td {
    padding: 5px;
  }
`;

const Loader = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #deef42;
  color: #ffffff;
`;

const ContainerFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
