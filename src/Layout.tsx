import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styled from "styled-components";

const OutletWrapper = styled.main`
  height: 150vh; // !!!
  // Pull up by the height of <Nav>
  position: relative;
  top: -83px; // height of <Nav>
`;

export default function Layout() {
  return (
    <>
      <Header />
      <Nav />

      <OutletWrapper>
        <Outlet />
      </OutletWrapper>

      <Footer />
    </>
  );
}
