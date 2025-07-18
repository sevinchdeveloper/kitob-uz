import {
  Button,
  Form,
  Input,
  Modal,
  Switch,
  InputNumber,
  Divider,
  Select,
} from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTaksQuery } from "@/config/hooks-query/task-query/task.api";
import { taskSubcategoryValidationSchema } from "@/schemas/sub-taskt-category.validation";
import { AddSubTaskFormData } from "@/config/hooks-query/sub-task-query/sub-task.types";
import { useAddSubTaskMutation } from "@/config/hooks-query/sub-task-query/sub-task.api";
import { useTranslation } from "react-i18next";

interface IAddTaskProps {
  isModalOpen: boolean;
  closeModal: () => void;
  subTaskId: number | null;
}

const AddEditSubTask = ({ subTaskId, isModalOpen, closeModal }: IAddTaskProps) => {
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<AddSubTaskFormData>({
    resolver: yupResolver(taskSubcategoryValidationSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: null,
      task_category_id: undefined,
      sort_order: null,
      is_active: false,
    },
  });
  const { mutate: addSubTaskHandler } = useAddSubTaskMutation();
  const { data } = useTaksQuery();

  const onSubmit = async (formData: AddSubTaskFormData) => {
    addSubTaskHandler(formData, { onSuccess: closeModal });
  };

  console.log(data?.data);

  return (
    <Modal
      open={isModalOpen}
      onCancel={closeModal}
      footer={null}
      width={1000}
      centered
      className="rounded-lg"
      title={subTaskId ? t("taskSubCategory.edit_category") : t("taskSubCategory.add_category")}
    >
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)} className="!mt-8">
        {/* Name */}
        <Form.Item
          label={<> {t("taskSubCategory.name")} <span className="text-red-500">*</span></>}
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t("taskSubCategory.name")}
                size="large"
                status={errors.name ? "error" : ""}
              />
            )}
          />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label={t("taskSubCategory.description")}
          validateStatus={errors.description ? "error" : ""}
          help={errors.description?.message}
        >
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder={t("taskSubCategory.description")}
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
          {/* Task Category*/}
          <Form.Item
            label={<> {t("taskCategory.parent_id")} <span className="text-red-500">*</span> </>}
            validateStatus={errors.task_category_id ? "error" : ""}
            help={errors.task_category_id?.message}
          >
            <Controller
              name="task_category_id"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder={t("taskCategory.parent_id")}
                  size="large"
                  status={errors.task_category_id ? "error" : ""}
                  onChange={(value) => field.onChange(value)}
                  options={
                    data?.data?.map((category: { id: number; name: string }) => ({
                      label: category.name,
                      value: category.id,
                    })) || []
                  }
                />
              )}
            />
          </Form.Item>

          {/* Sort Order */}
          <Form.Item
            label={t("taskSubCategory.sort_order")}
            validateStatus={errors.sort_order ? "error" : ""}
            help={errors.sort_order?.message}
          >
            <Controller
              name="sort_order"
              control={control}
              render={({ field }) => (
                <InputNumber
                  {...field}
                  placeholder={t("taskSubCategory.sort_order")}
                  style={{ width: "100%" }}
                  size="large"
                  status={errors.sort_order ? "error" : ""}
                  min={0}
                  onChange={(value) => field.onChange(value ?? null)}
                />
              )}
            />
          </Form.Item>
        </div>

        {/* Active Switch */}
        <Form.Item label={t("taskSubCategory.is_active")}>
          <Controller
            name="is_active"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value ?? false}
                onChange={field.onChange}
                checkedChildren={t("taskSubCategory.is_active")}
                unCheckedChildren={t("taskSubCategory.not_active")}
              />
            )}
          />
        </Form.Item>

        <Divider className="my-6" />

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button size="large" onClick={closeModal} className="min-w-24">
            {t("buttons.cancel")}
          </Button>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            disabled={!isValid}
            className="min-w-24"
          >
            {subTaskId ? t("buttons.update") : t("buttons.save")}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddEditSubTask;
