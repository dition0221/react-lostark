import { AnimatePresence, Variants, motion } from "framer-motion";
import styled from "styled-components";
// INTERFACE
import type { INewsEvents } from "./MainBanner";

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
  idx: number;
}

export default function Slider({ data, idx }: ISliderProps) {
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
