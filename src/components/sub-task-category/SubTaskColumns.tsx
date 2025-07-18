import { Button, Modal, TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Task } from '@/config/hooks-query/task-query/task.types';

export const SubTaskColumns = (onEdit: (id: number) => void, onDelete: (id: number) => void): TableProps<Task>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('table.id') || 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: 60,
    },
    {
      title: t('table.name_2') || 'Nomi',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 200,
      ellipsis: true,
    },
    {
      title: t('table.description') || 'Tavsif',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
      width: 250,
      ellipsis: true,
    },
    {
      title: t('table.parent_id') || 'Bosh Katalog',
      dataIndex: 'parent_id',
      key: 'parent_id',
      align: 'center',
      width: 150,
      render: parent_id => parent_id ?? '—',
    },
    {
      title: t('table.sort_order') || 'Saralash tartibi',
      dataIndex: 'sort_order',
      key: 'sort_order',
      align: 'center',
      width: 150,
      render: sort_order => sort_order ?? '—',
    },
    {
      title: t('table.is_active') || 'Faolmi?',
      dataIndex: 'is_active',
      key: 'is_active',
      align: 'center',
      width: 100,
      render: active => (active ? '✅' : '❌'),
    },
    {
      title: t('table.created_at') || 'Yaratilgan sana',
      dataIndex: 'created_at',
      key: 'created_at',
      align: 'center',
      width: 180,
    },
    {
      title: t('table.updated_at') || 'O‘zgartirilgan sana',
      dataIndex: 'updated_at',
      key: 'updated_at',
      align: 'center',
      width: 180,
    },
    {
      title: t('table.actions') || 'Amallar',
      key: 'actions',
      align: 'center',
      width: 120,
      render: (_, record) => (
        <div className="flex justify-center gap-3">
          <Button icon={<EditOutlined />} onClick={() => onEdit(record.id)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() =>
              Modal.confirm({
                title: "Ushbu elementni o'chirish",
                content: "Rostdan ham o‘chirmoqchimisiz?",
                okText: 'Ha',
                cancelText: 'Yo‘q',
                onOk: () => onDelete(record.id),
              })
            }
          />
        </div>
      ),
    },
  ];
};
