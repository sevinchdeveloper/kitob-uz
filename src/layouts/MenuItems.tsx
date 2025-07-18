import {
  AppstoreAddOutlined,
  PartitionOutlined,
  LayoutOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItemsProps {
  openKeys: string[];
  onOpenChange: (keys: string[]) => void;
}

const MenuItems = ({ openKeys, onOpenChange }: MenuItemsProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: "/",
      icon: <UsergroupAddOutlined />,
      label: t("sidebar.users"),
      show: true,
    },
    {
      key: "/task-category",
      icon: <AppstoreAddOutlined />,
      label: t("sidebar.taskCategory"),
      show: true,
    },
    {
      key: "/sub-task-category",
      icon: <PartitionOutlined />,
      label: t("sidebar.subTaskCategory"),
      show: true,
    },
    {
      key: "/modules",
      icon: <LayoutOutlined />,
      label: t("sidebar.modules"),
      show: true,
    },
    {
      key: "/clients",
      icon: <TeamOutlined />,
      label: t("sidebar.clients"),
      show: true,
    },
  ];

  const visibleItems = items.filter((item) => item.show);

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={({ key }) => navigate(key)}
      items={visibleItems}
    />
  );
};

export default MenuItems;
