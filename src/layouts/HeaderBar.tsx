import { Button, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoutDropdown from "./LogoutDropdown";

export default function HeaderBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="flex items-center justify-between w-full relative">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="text-[22px]"
      />
      <div className="flex gap-3 items-center">
        <LanguageSwitcher />
        <Button
          className="!w-10 !h-10 !p-0 !rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            setDropdownVisible((prev) => !prev);
          }}
        >
          <Avatar className="w-full h-full m-0" icon={<UserOutlined />} />
        </Button>
        <LogoutDropdown visible={dropdownVisible} setVisible={setDropdownVisible} />
      </div>
    </div>
  );
}
