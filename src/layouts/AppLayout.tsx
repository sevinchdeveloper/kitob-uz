import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SiderMenu from "./SiderMenu";
import HeaderBar from "./HeaderBar";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen flex">
      {/* ✅ props berilyapti */}
      <SiderMenu collapsed={collapsed} setCollapsed={setCollapsed} />

      <Layout className="flex flex-col flex-1">
        <Header className="sticky !px- top-0 z-10 !bg-white shadow-md flex items-center">
          <HeaderBar />
        </Header>

        <Content className="m-2 rounded-md flex-1 overflow-auto panel">
          <Outlet />
        </Content>

        <Footer className="text-center !py-3 panel m-2 mt-0 rounded-md">
          Techno Soft © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
}
