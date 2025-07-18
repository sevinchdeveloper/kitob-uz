import { Button, Modal, TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { User } from "@/config/hooks-query/users-query/users.types";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { useTranslation } from "react-i18next";

export const UserColumns = (onEdited: (id: number) => void, onDelete: (id: number) => void): TableProps<User>["columns"] => {
  const { t } = useTranslation();

  return [
    {
      title: t("table.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 20,
      ellipsis: true
    },
    {
      title: t("table.name"),
      dataIndex: "name",
      key: "name",
      align: "center",
      width: 80,
      ellipsis: true
    },
    {
      title: t("table.phone"),
      dataIndex: "phone",
      key: "phone",
      align: "center",
      width: 80,
      render: (phoneNumber) => formatPhoneNumber(phoneNumber),
      ellipsis: true
    },
    {
      title: t("table.ext_number"),
      dataIndex: "ext_number",
      key: "ext_number",
      align: "center",
      render: (ext_number) => ext_number || "—",
      width: 80,
      ellipsis: true
    },
    {
      title: t("table.actions"),
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-3">
          <Button
            icon={<EditOutlined />}
            onClick={() => onEdited(record.id)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => {
              Modal.confirm({
                title: "Foydalanuvchini o'chirish",
                content: "Haqiqatan ham ushbu foydalanuvchini o'chirmoqchimisiz?",
                okText: "Ha",
                cancelText: "Yo'q",
                onOk: () => onDelete(record.id),
              });
            }}
          />
        </div>
      ),
      width: 50,
      ellipsis: true
    },
  ];

}