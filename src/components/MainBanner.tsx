import { useQuery } from "@tanstack/react-query";
import { getNewsEvents } from "../api";
// Components
import Slider from "./Slider";
import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
`;

const SliderBar = styled.div`
  width: 100%;
  height: 52px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
`;

export interface INewsEvents {
  Title: string;
  Thumbnail: string;
  Link: string;
  StartDate: string;
  EndDate: string;
  RewardDate: string | null;
}

export default function MainBanner() {
  // fetch API
  const { data } = useQuery<INewsEvents[]>({
    queryKey: ["News", "Events"],
    queryFn: getNewsEvents,
  });

  return (
    <Wrapper>
      <Slider data={data} />
      <SliderBar>{/* 버튼 등 */}</SliderBar>
    </Wrapper>
  );
}
