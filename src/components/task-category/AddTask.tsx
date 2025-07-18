import { Button, Form, Input, Modal, Switch, InputNumber, Divider } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskCategoryValidationSchema } from "@/schemas/task-category.validation";
import { useAddTaskMutation } from "@/config/hooks-query/task-query/task.api";
import { AddTaskFormData } from "@/config/hooks-query/task-query/task.types";
import { useTranslation } from "react-i18next";

interface IAddTaskProps {
  isModalOpen: boolean;
  closeModal: () => void;
  taskId: number | null;
}

const AddTask = ({ taskId, isModalOpen, closeModal }: IAddTaskProps) => {
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<AddTaskFormData>({
    resolver: yupResolver(taskCategoryValidationSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: null,
      parent_id: null,
      sort_order: null,
      is_active: false,
    },
  });

  const { mutate: addTask } = useAddTaskMutation();

  const onSubmit = async (formData: AddTaskFormData) => {
    addTask(formData, { onSuccess: closeModal });
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={closeModal}
      footer={null}
      width={1000}
      centered
      className="rounded-lg"
      title={taskId ? t("taskCategory.edit_category") : t("taskCategory.add_category")}
    >
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)} className="!mt-8">
        {/* Name */}
        <Form.Item
          label={<> {t("taskCategory.name")} <span className="text-red-500">*</span></>}
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t("taskCategory.name")}
                size="large"
                status={errors.name ? "error" : ""}
              />
            )}
          />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label={t("taskCategory.description")}
          validateStatus={errors.description ? "error" : ""}
          help={errors.description?.message}
        >
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder={t("taskCategory.description")}
                rows={4}
                size="large"
                status={errors.description ? "error" : ""}
                value={field.value || ""}
                onChange={(e) => field.onChange(e.target.value || null)}
              />
            )}
          />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Parent ID */}
          <Form.Item
            label={t("taskCategory.parent_id")}
            validateStatus={errors.parent_id ? "error" : ""}
            help={errors.parent_id?.message}
          >
            <Controller
              name="parent_id"
              control={control}
              render={({ field }) => (
                <InputNumber
                  {...field}
                  placeholder={t("taskCategory.parent_id")}
                  className="!w-full"
                  size="large"
                  status={errors.parent_id ? "error" : ""}
                  min={1}
                  onChange={(value) => field.onChange(value || null)}
                />
              )}
            />
          </Form.Item>

          {/* Sort Order */}
          <Form.Item
            label={t("taskCategory.sort_order")}
            validateStatus={errors.sort_order ? "error" : ""}
            help={errors.sort_order?.message}
          >
            <Controller
              name="sort_order"
              control={control}
              render={({ field }) => (
                <InputNumber
                  {...field}
                  placeholder={t("taskCategory.sort_order")}
                  className="!w-full"
                  size="large"
                  status={errors.sort_order ? "error" : ""}
                  min={0}
                  onChange={(value) => field.onChange(value || null)}
                />
              )}
            />
          </Form.Item>
        </div>

        {/* Active Switch */}
        <Form.Item
          label={t("taskCategory.is_active")}
          validateStatus={errors.is_active ? "error" : ""}
          help={errors.is_active?.message}
        >
          <Controller
            name="is_active"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value ?? true}
                onChange={field.onChange}
                checkedChildren={t("taskCategory.is_active")}
                unCheckedChildren={t("taskCategory.not_active")}
              />
            )}
          />
        </Form.Item>

        <Divider className="my-6" />

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button size="large" onClick={closeModal} className="min-w-24"> {t("buttons.cancel")} </Button>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            disabled={!isValid}
            className="min-w-24"
          >
            {taskId ? t("buttons.update") : t("buttons.save")}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddTask;
