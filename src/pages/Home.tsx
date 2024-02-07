import styled from "styled-components";
// Components
import MainBanner from "@/components/MainBanner";

const MainBackground = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url("/images/mainImage.jpg");
  background-position: top center;
  position: absolute;
  z-index: -1;
`;

const MainContainer = styled.div`
  max-width: 1260px;
  height: 508px;
  margin: 0 auto;
  position: relative;
  top: 396px;
  display: grid;
  grid-template-columns: 89fr 36fr;
  gap: 10px;
`;

const Banner = styled.section`
  background-color: red; // !!!
`;

export default function Home() {
  return (
    <>
      <MainBackground />

      <MainContainer>
        <MainBanner />
        <Banner>배너</Banner>
      </MainContainer>
    </>
  );
}
