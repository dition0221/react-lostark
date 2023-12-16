import { AnimatePresence, Variants, motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
// Interface
import { INewsEvents } from "./MainBanner";

const SliderItem = styled(motion.article)<{ $bgImg: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bgImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: auto auto;
  position: absolute;
  opacity: 1;
`;

const sliderVariants: Variants = {
  init: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.7 } },
  exit: { opacity: 0, transition: { duration: 0.7 } },
};

interface ISliderProps {
  data: INewsEvents[] | undefined;
}

export default function Slider({ data }: ISliderProps) {
  // Slider animation
  const [idx, setIdx] = useState(0);
  const maxIdx = data ? data?.length - 1 : 0;

  // Button fn.
  // ? 전역변수 사용? 유틸리티 export? 또 다른 방법?
  const onNextClick = () => setIdx((prev) => (prev === maxIdx ? 0 : prev + 1));
  const onPrevClick = () => setIdx((prev) => (prev === 0 ? maxIdx : prev - 1));

  return (
    <AnimatePresence>
      <SliderItem
        variants={sliderVariants}
        initial="init"
        animate="open"
        exit="exit"
        $bgImg={data ? data[idx].Thumbnail : ""}
        key={idx}
      />
    </AnimatePresence>
  );
}
