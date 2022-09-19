import { Avatar, Col, Layout, Row, Menu, Dropdown } from "antd";
import styled from "styled-components";
import { MenuFoldOutlined, CaretDownOutlined } from "@ant-design/icons";
import LogoImage from "../assest/image2x.png";
import { Link } from "react-router-dom";
const { Header } = Layout;

const CustomHeader = styled(Header)`
  padding: 0 20px;
  text-align: center;
  height: 60px;
  background-color: #ffff;
  border-bottom: 1px solid #cccc;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media print {
    display: none;
  }
`;

const LeftBox = styled(Row)`
  align-items: center;
`;
const RightBox = styled(Row)`
  align-items: center;
  justify-content: flex-end;
`;
const Item = styled(Col)`
  align-items: center;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  margin-left: 14;
`;
const Title = styled.h1`
  margin-left: 14;
  font-size: 21px;
  color: #04a6e1;
  margin: 0;
`;
const MainHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">abc</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/">abc</Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => {}}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <CustomHeader>
      <LeftBox gutter={{ md: 14 }}>
        <Item>
          <MenuFoldOutlined style={{ fontSize: 21, color: "#04a6e1" }} />
        </Item>
        <Item>
          <Logo src={LogoImage} alt="logo" />
        </Item>
        <Item>
          <Title>Lotus Academy</Title>
        </Item>
      </LeftBox>
      <RightBox gutter={{ md: 14 }}>
        <Item>
          <Avatar
            style={{ padding: 3 }}
            icon={<Logo src={LogoImage} alt="logo" />}
            size="large"
          />
        </Item>
        <Item>
          <h3 style={{ margin: 0 }}>admin</h3>
        </Item>
        <Item>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Avatar
              style={{
                background: "#ffff",
                border: "1px solid #aaaa",
              }}
              icon={<CaretDownOutlined style={{ color: "#000000" }} />}
              size="large"
            />
          </Dropdown>
        </Item>
      </RightBox>
    </CustomHeader>
  );
};
export default MainHeader;
