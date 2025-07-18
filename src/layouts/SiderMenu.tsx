import { Layout } from "antd";
import { useState } from "react";
import { SIDER_OPEN_KEYS } from "@/constants/constants";
import MenuItems from "./MenuItems";

const { Sider } = Layout;

interface SiderMenuProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export default function SiderMenu({ collapsed, setCollapsed }: SiderMenuProps) {
  const [openKeys, setOpenKeys] = useState<string[]>(() => {
    try {
      const stored = sessionStorage.getItem(SIDER_OPEN_KEYS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
    sessionStorage.setItem(SIDER_OPEN_KEYS, JSON.stringify(keys));
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={300}
      className="h-screen overflow-y-auto"
    >
      <div className="text-center my-2 flex justify-center text-white items-center gap-1 mx-2 rounded-md py-1.5 sticky top-0 z-10">
        {!collapsed && <span className="text-lg">Zenova Admin</span>}
      </div>
      
      <MenuItems openKeys={openKeys} onOpenChange={handleOpenChange} />
    </Sider>
  );
}
