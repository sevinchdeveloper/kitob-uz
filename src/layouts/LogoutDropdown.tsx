import { Button, Modal } from "antd";
import { UserSwitchOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "@/helpers/token-storage";
import { LOCAL_STORAGE_KEYS } from "@/helpers/localStorageKeys";
import { SIDER_OPEN_KEYS } from "@/constants/constants";
import { useTranslation } from "react-i18next";
import { apiAdmin } from "@/hooks/api_admin";

interface Props {
  visible: boolean;
  setVisible: (v: boolean) => void;
}

export default function LogoutDropdown({ visible, setVisible }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = useCallback(() => {
    Modal.confirm({
      title: t("auth.messages.logout_confirm_title"),
      okText: t("auth.logout"),
      cancelText: t("buttons.cancel"),
      okType: "danger",
      onOk: async () => {
        setLoading(true);
        try {
          await apiAdmin("POST", "/logout");
        } catch (error) {
          console.error("Logout failed", error);
        } finally {
          removeToken(LOCAL_STORAGE_KEYS.ADMIN_TOKEN);
          sessionStorage.removeItem(SIDER_OPEN_KEYS);
          navigate("/auth/login", { replace: true });
        }
      },
    });
  }, [navigate, t]);

  return (
    <div
      className={`absolute rounded-lg border border-zinc-50 shadow-md flex flex-col p-3 bg-white z-20 origin-top-right top-[60px] right-4 w-auto min-w-[180px] ${visible
        ? "scale-100 opacity-100 visible"
        : "scale-95 opacity-0 invisible"
        }`}
      onClick={(e) => e.stopPropagation()}
    >
      <Button
        className="w-full py-3 rounded-md mt-2"
        onClick={handleLogout}
        type="primary"
        danger
        loading={loading}
        icon={<UserSwitchOutlined />}
      >
        {t("auth.logout")}
      </Button>
    </div>
  );
}
