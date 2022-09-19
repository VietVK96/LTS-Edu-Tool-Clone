import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { UserOutlined, GroupOutlined } from "@ant-design/icons";
import styled from "styled-components";


const { Sider } = Layout;
const Item = styled(Menu.Item)`
  border-bottom: 1px solid #eeee;
  min-height: 50px;
  :last-child {
    border-bottom: none;
  }
`;

const SubMenu = styled(Menu.SubMenu)`
  border-bottom: 1px solid #eeee;
  min-height: 50px;
`;

const MainSlider = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([location.pathname.split("/")[1]]);

  const onOpenChange = (keys) => {
    const lastestOpenKeys = keys.find(
      (key) => openKeys.indexOf(key.toString()) === -1
    );
    setOpenKeys(lastestOpenKeys ? [lastestOpenKeys.toString()] : []);
  };
  return (
    <Sider className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["/"]}
        style={{ height: "100%" }}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Item icon={<UserOutlined />} key={"/"}>
          <Link to={"/"}>My Account</Link>
        </Item>
        <SubMenu key="manager" icon={<GroupOutlined />} title="Quản Lý Chung">
          <Item key="/manager/permission">
            <Link to="/manager/permission">Quyền hạn</Link>
          </Item>
          <Item key="/manager/blog-type">
            <Link to="/manager/blog-type">Loại bài viết</Link>
          </Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
export default MainSlider;
