import { Layout } from "antd";
import styled from "styled-components";
const { Header } = Layout;

const CustomHeader = styled(Header)`
  padding: 0 20px;
  text-align: center;
  height: 65px;
  background-color: #ffff;
  border-bottom: 1px solid #cccc;

  & {
    line-height: 1.5;
  }
  @media print {
    display: none;
  }
`;
const MainHeader = () => {
  return (
    <CustomHeader>
      <h1>Header</h1>
    </CustomHeader>
  );
};
export default MainHeader;
