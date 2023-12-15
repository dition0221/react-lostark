import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
// API
import { getNewsEvents } from "../api";

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
  max-width: 1260px;
  height: 508px;
  margin: 0 auto;
  position: relative;
  top: 396px;
  display: grid;
  grid-template-columns: 89fr 36fr;
  gap: 10px;
`;

const Slider = styled.section`
  /* background-color: yellow; // !!! */
`;

const SliderItem = styled.article``;

const Banner = styled.section`
  background-color: red; // !!!
`;

interface INewsEvents {
  Title: string;
  Thumbnail: string;
  Link: string;
  StartDate: string;
  EndDate: string;
  RewardDate: string | null;
}

export default function Home() {
  // Slider
  const { data } = useQuery<INewsEvents[]>({
    queryKey: ["News", "Events"],
    queryFn: getNewsEvents,
  });

  return (
    <Wrapper>
      <MainBackground />

      <MainContainer>
        <Slider>
          {data?.map((v) => (
            <div
              key={v.Title}
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${v.Thumbnail})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundColor: "rgba(0,0,0,0.7)",
              }}
            ></div>
          ))}
        </Slider>
        <Banner>배너</Banner>
      </MainContainer>
    </Wrapper>
  );
}
