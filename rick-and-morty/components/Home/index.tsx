import styled from "styled-components";
import Image from "next/image";

const Home = ({ children }) => {
  return (
    <Container>
      <Description>
        <p>
          Aqui você encontra tudo sobre
          <code className="code"> Rick and Morty</code>
        </p>
      </Description>
      <ContainerImage>
        <Image
          src="/rickAndMorty.png"
          alt="Rick and morty image"
          width={400}
          height={700}
        />
        {children}
      </ContainerImage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .code {
    font-weight: 700;
    font-family: var(--font-mono);
  }
`;

const Description = styled.div`
  margin: 1rem;
  max-width: 25%;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;
`;

const ContainerImage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { Home };
