import {
  Variants,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  max-width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const FlexContainer = styled(motion.div)`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Column = styled.div`
  height: 100%;
`;

const MenuList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 17px;
  cursor: pointer;
  img {
    width: 52px;
    height: 52px;
  }
  &:first-child {
    padding: 10px;
  }
  &:not(:first-child) {
    padding: 0 6.6px;
    margin: 0 17px;
    white-space: nowrap;
  }
`;

const ScrollLine = styled(motion.div)`
  max-width: 100%;
  height: 3px;
  background-color: #8809f6;
  transform-origin: left;
`;

const wrapperVariants: Variants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
    transition: { duration: 0.2 },
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
    transition: { duration: 0.2 },
  },
};

export default function Nav() {
  // Scroll animation (background-color)
  const { scrollYProgress } = useScroll();
  const navAnimation = useAnimation();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) navAnimation.start("scroll");
    else navAnimation.start("top");
  });
  useEffect(() => {
    if (scrollYProgress.get() > 0) navAnimation.start("scroll");
    else navAnimation.start("top");
  }, [navAnimation, scrollYProgress]);

  return (
    <Wrapper>
      <FlexContainer
        variants={wrapperVariants}
        initial="top"
        animate={navAnimation}
      >
        <Column>
          <MenuList>
            <Menu>
              <img src="/images/lostarkIcon.png" />
            </Menu>
            <Menu>새소식</Menu>
            <Menu>게임정보</Menu>
            <Menu>가이드</Menu>
            <Menu>커뮤니티</Menu>
            <Menu>미디어</Menu>
            <Menu>거래소</Menu>
            <Menu>웹 샵</Menu>
            <Menu>고객센터</Menu>
            <Menu>E-SPORTS</Menu>
            <Menu>테스터</Menu>
          </MenuList>
        </Column>

        <Column></Column>
      </FlexContainer>

      <ScrollLine
        style={{ scaleX: scrollYProgress }}
        transition={{ type: "spring" }}
      />
    </Wrapper>
  );
}
