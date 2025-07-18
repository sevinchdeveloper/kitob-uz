import { Button, Modal, TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Module } from "@/config/hooks-query/module-query/module.types";

export const ModuleColumns = (onEdited: (id: number) => void, onDelete: (id: number) => void): TableProps<Module>["columns"] => {
  const { t } = useTranslation();

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
      title: t("table.name"),
      dataIndex: "name",
      key: "name",
      align: "center",
      width: 150,
      ellipsis: true,
    },
    {
      title: t("table.description"),
      dataIndex: "description",
      key: "description",
      align: "center",
      width: 250,
      ellipsis: true,
    },
    {
      title: t("table.module_type"),
      dataIndex: "module_type",
      key: "module_type",
      align: "center",
      width: 100,
      ellipsis: true,
      render: (type: string) => type.toUpperCase(), // optional formatting
    },
    {
      title: t("table.active"),
      dataIndex: "active",
      key: "active",
      align: "center",
      width: 80,
      render: (active: boolean) => (active ? t("common.yes") : t("common.no")),
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
            onClick={() => {
              Modal.confirm({
                title: t("modals.delete_title"),
                content: t("modals.delete_message"),
                okText: t("common.yes"),
                cancelText: t("common.no"),
                onOk: () => onDelete(record.id),
              });
            }}
          />
        </div>
      ),
      width: 100,
    },
  ];
};
