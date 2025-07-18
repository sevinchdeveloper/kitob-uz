import { Button, Modal, TableProps, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Task } from "@/config/hooks-query/task-query/task.types";

export const TaskColumns = (
  onEdited: (id: number) => void,
  onDelete: (id: number) => void
): TableProps<Task>["columns"] => {
  const { t } = useTranslation();

  return [
    {
      title: t("table.id"),
      dataIndex: "id",
      key: "id",
      align: "center",
      width: 30,
    },
    {
      title: t("table.name_2"),
      dataIndex: "name",
      key: "name",
      align: "center",
      width: 250,
    },
    {
      title: t("table.description"),
      dataIndex: "description",
      key: "description",
      align: "center",
      width: 250,
    },
    {
      title: t("table.sort_order"),
      dataIndex: "sort_order",
      key: "sort_order",
      align: "center",
      width: 200,
    },
    {
      title: t("table.is_active"),
      dataIndex: "is_active",
      key: "is_active",
      align: "center",
      render: (is_active: boolean) =>
        is_active ? <Tag color="green">Aktiv</Tag> : <Tag color="red">Noaktiv</Tag>,
    },
    {
      title: t("table.parent_id"),
      dataIndex: "parent_id",
      key: "parent_id",
      align: "center",
      render: (parent_id: number | null) => parent_id ?? "—",
    },
    {
      title: t("table.created_at"),
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
    },
    {
      title: t("table.updated_at"),
      dataIndex: "updated_at",
      key: "updated_at",
      align: "center",
    },
    {
      title: t("table.actions"),
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button icon={<EditOutlined />} onClick={() => onEdited(record.id)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => {
              Modal.confirm({
                title: t("modal.delete_title"),
                content: t("modal.delete_confirm"),
                okText: t("modal.yes"),
                cancelText: t("modal.no"),
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
