import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import { Character } from "../../models/character";
import InputSearch from "../InputSearch";
import { addFavorite, removeFavorite } from "../../store/slices/favorite";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";

interface CharacterCardProps {
  data: Character;
}

export default function CharacterCard({ data }: CharacterCardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { idsFavorites } = useAppSelector((state: RootState) => state.favorite);

  const isFavorite = idsFavorites.includes(data.id);

  const hendleNavigate = (e) => {
    const typesDontRedirect = ["button", "path", "svg"];

    if (typesDontRedirect.includes(e.target.tagName.toLowerCase())) return;
    router.push(`/character/${data.id}`);
  };

  return (
    <Container onClick={hendleNavigate}>
      <Header StatusProps={data.status}>
        <p> {data.id}</p>
        <p className={data.status}>{data.status}</p>
      </Header>
      <ImageWrapper>
        <Image src={data.image} alt={`Imagem de ${data.name}`} style={{}} />
        <HeartButton
          className="favorite-button"
          onClick={() => {
            isFavorite
              ? dispatch(removeFavorite(data))
              : dispatch(addFavorite(data));
          }}
        >
          <HeartIcon
            id="favorite-icon"
            className={isFavorite ? "favorite-ico favorite" : "favorite-ico"}
            icon={faHeart}
          />
        </HeartButton>
      </ImageWrapper>
      <DescriptionCard>
        <h3>{data.name}</h3>
        <p>Espécie: {data.species}</p>
        <p>Localização: {data.location.name}</p>
        <p>Gênero: {data.gender}</p>
        <p>Origem: {data.origin.name}</p>
      </DescriptionCard>
    </Container>
  );
}

interface StatusProps {
  status: string;
}

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #3c3e44;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  /* border-radius: 50%; */
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const HeartButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 5px;
  z-index: 2;
  background: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #219612;
  background: #21961224;
`;

const HeartIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 26px;
  text-shadow: 3px 3px rgb(0 0 0);
  &.favorite {
    color: #c51d3b;
  }
`;

const DescriptionCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  h3 {
    width: 100%;
    text-align: center;
    color: #1d9612;
  }
  p {
    width: 49%;
    text-align: center;
    border: 2px solid #a3cfe7;
    border-radius: 5px;
    box-sizing: border-box;
    color: #1d9612;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.div<StatusProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 2;
  padding: 0 25px;

  p {
    margin: 0;
    color: #fff;
    font-weight: bold;
  }

  p:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: 2px solid #a3cfe7;
    border-radius: 50%;
    background: #1d9612;
  }

  p:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 25px;
    border: 2px solid #a3cfe7;
    border-radius: 10px;
    background: #6e6e6e;

    &.Alive {
      background: #24a66b;
    }

    &.Dead {
      background: #ff0000;
    }
  }
`;
