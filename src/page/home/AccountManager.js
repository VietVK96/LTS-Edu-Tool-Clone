import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
`;

const AccountManager = () => {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1>Dashboard</h1>
      </Container>
    </div>
  );
};
export default AccountManager;
