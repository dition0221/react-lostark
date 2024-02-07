import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
// API
import { getNewsEvents } from "../api";
// COMPONENTS
import Slider from "@/components/Slider";
import { useState } from "react";

const Wrapper = styled.section`
  position: relative;
`;

const SliderBar = styled.div`
  width: 100%;
  height: 52px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const SliderBtn = styled.button`
  height: 50%;
  aspect-ratio: 1/1;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    fill: gray;
  }
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
  const { data: newsEventsData } = useQuery<INewsEvents[]>({
    queryKey: ["News", "Events"],
    queryFn: getNewsEvents,
  });

  // Slider animation
  const [idx, setIdx] = useState(0);
  const maxIdx = newsEventsData ? newsEventsData?.length - 1 : 0;

  // Button fn.
  const onPrevClick = () => setIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
  const onNextClick = () => setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));

  return (
    <Wrapper>
      <Slider data={newsEventsData} idx={idx} />

      <SliderBar>
        <SliderBtn onClick={onPrevClick}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg> */}
        </SliderBtn>

        <SliderBtn onClick={onNextClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </SliderBtn>
        <span style={{ color: "white" }}>
          {idx + 1}/ {newsEventsData?.length ?? 0}
        </span>
      </SliderBar>
    </Wrapper>
  );
}
