import { Client } from "@/config/hooks-query/client-query/client.types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, TableProps } from "antd";
import { useTranslation } from "react-i18next";

export const ClientColumns = (onEdited: (id: number) => void, onDelete: (id: number) => void): TableProps<Client>["columns"] => {
  const { t } = useTranslation()
  return [
    {
      title: t("table.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 50,
      ellipsis: true,
    },
    {
      title: t("table.fio"),
      dataIndex: "full_name",
      key: "full_name",
      align: "center",
      width: 150,
      ellipsis: true,
    },
    {
      title: t("table.pinfl"),
      dataIndex: "pinfl",
      key: "pinfl",
      align: "center",
      width: 120,
      ellipsis: true,
    },
    {
      title: t("table.birthday"),
      dataIndex: "birth_date",
      key: "birth_date",
      align: "center",
      width: 100,
      ellipsis: true,
    },
    {
      title: t("table.gender"),
      dataIndex: "gender",
      key: "gender",
      align: "center",
      width: 80,
      render: (gender) => (gender === 1 ? "Erkak" : "Ayol"),
      ellipsis: true,
    },
    {
      title: t("table.passport"),
      dataIndex: "passport_number",
      key: "passport_number",
      align: "center",
      width: 100,
      ellipsis: true,
    },
    {
      title: t("table.phone"),
      key: "phone",
      align: "center",
      render: () => "—", // Agar telefon bo‘lsa, renderga qo‘shamiz
      width: 100,
      ellipsis: true,
    },
    {
      title: t("table.actions"),
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-3">
          <Button icon={<EditOutlined />} onClick={() => onEdited(record.id)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() =>
              Modal.confirm({
                title: "Foydalanuvchini o‘chirish",
                content: "Haqiqatan ham ushbu foydalanuvchini o‘chirmoqchimisiz?",
                okText: "Ha",
                cancelText: "Yo‘q",
                onOk: () => onDelete(record.id),
              })
            }
          />
        </div>
      ),
      width: 100,
    },
  ];
};
