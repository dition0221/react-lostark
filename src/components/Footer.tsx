import styled from "styled-components";

const Wrapper = styled.footer`
  height: 253px;
  background-color: #212226;
  color: white;
`;

const Container = styled.div`
  max-width: 1260px;
  height: 100%;
  margin: 0 auto;
  background-color: skyblue; // !!!
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>Footer</Container>
    </Wrapper>
  );
}
