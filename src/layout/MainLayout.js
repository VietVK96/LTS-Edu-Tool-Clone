import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainSlider from "./MainSlide";
import styled from "styled-components";
const { Content } = Layout;
const ContentContainer = styled(Content)`
  height: 100vh-65px;
  overflow-y: scroll;
  background: #ffff;
  &::-webkit-scrollbar {
    width: 10px;
    background: #eeeded;
  }
  &::-webkit-scrollbar-thumb {
    background: #c7c7c7;
    border-radius: 10px;
  }
`;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <MainHeader />

      <Layout>
        <MainSlider />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
