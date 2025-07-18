import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import AddUser from "@/components/users/AddUser";
import { useSearchParams } from "react-router-dom";
import { pageSizeOptions } from "@/constants/constants";
import { Button, Skeleton, Table, Typography } from "antd";
import { useUsersQuery } from "@/config/hooks-query/users-query/users.api";
import { UserColumns } from "@/components/users/UserColumns";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAddUser, setIsAddUser] = useState<boolean>(false);
  const [selectedUserID, setSelectedUserID] = useState<number | null>(null);
  const { t } = useTranslation()

  const page = Number(searchParams.get("page") || 1);
  const perPage = Number(searchParams.get("per_page") || 10);

  const { data: users, isLoading } = useUsersQuery(page, perPage);

  const addUserHandle = () => {
    setSelectedUserID(null)
    setIsAddUser(true)
  }

  const handleEdit = (id: number) => {
    setSelectedUserID(id);
    setIsAddUser(true)
  }

  const handleDelete = async (id: number) => console.log(id); // HOZIRCHA ISHLATILMAYAPTI **********

  const columns = UserColumns(handleEdit, handleDelete);

  const handlePaginationChange = (newPage?: number, newPageSize?: number) => {
    setSearchParams({
      page: newPage?.toString() || "1",
      per_page: newPageSize?.toString() || "10",
    });
  };

  if (isLoading) return <Skeleton active paragraph={{ rows: 4 }} />

  return (
    <div className="!px-6 py-2">
      <div className="flex items-center justify-between mb-4">
        <Title level={3} className="mt-3"> {t("users.title")} </Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={addUserHandle}> {t("buttons.add")} </Button>
      </div>

      <Table
        dataSource={users?.data || []}
        columns={columns}
        loading={isLoading}
        size="small"
        rowKey="id"
        pagination={{
          current: page,
          pageSize: perPage,
          total: users?.pagination.total,
          pageSizeOptions: pageSizeOptions,
          onChange: (newPage, newPageSize) => handlePaginationChange(newPage, newPageSize),
          showSizeChanger: true,
        }}
        scroll={{ x: "max-content" }}
      />

      {isAddUser &&
        <AddUser
          userId={selectedUserID}
          isModalOpen={isAddUser}
          closeModal={() => setIsAddUser(false)}
        />
      }
    </div>

  )
}

export default Users