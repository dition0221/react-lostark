import styled from "styled-components";

const Wrapper = styled.main`
  height: 150vh; // !!!
  // Pull up by the height of <Nav>
  position: relative;
  top: -83px;
`;

const MainBackground = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url("/images/mainImage.jpg");
  background-position: top center;
  position: absolute;
  z-index: -1;
`;

const MainContainer = styled.div`
  width: 1260px;
  margin: 0 auto;
  position: relative;
  top: 396px;
  display: grid;
  grid-template-columns: 890px 360px;
  gap: 10px;
`;

const Banner = styled.section`
  background-color: red; // !!!
  height: 508px;
`;

export default function Home() {
  return (
    <Wrapper>
      <MainBackground />

      <MainContainer>
        <Banner>배너</Banner>
        <Banner>배너</Banner>
      </MainContainer>
    </Wrapper>
  );
}
