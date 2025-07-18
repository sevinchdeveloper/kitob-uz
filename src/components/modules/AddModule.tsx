import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, Modal, Switch, Skeleton } from "antd";
import { addModuleValidationSchema } from "@/schemas/add-module.validation";
import {
  useAddModuleMutation,
  useModuleQuery,
  useUpdateModuleMutation,
} from "@/config/hooks-query/module-query/module.api";
import { AddModuleFormData } from "@/config/hooks-query/module-query/module.types";
import { useTranslation } from "react-i18next";

interface IAddModuleProps {
  isModalOpen: boolean;
  closeModal: () => void;
  moduleId: number | null;
}

const AddModule = ({ isModalOpen, closeModal, moduleId }: IAddModuleProps) => {
  const { t } = useTranslation()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addModuleValidationSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      description: null,
      module_type: "",
      is_active: false,
    },
  });

  const { data, isLoading } = useModuleQuery(moduleId, !!moduleId);
  const { mutate: addModule } = useAddModuleMutation();
  const { mutate: updateModule } = useUpdateModuleMutation();

  useEffect(() => {
    if (data) {
      reset({
        name: data.name || "",
        description: data.description || "",
        module_type: data.module_type || "",
        is_active: data.active ?? true,
      });
    }
  }, [data, reset]);

  const onSubmit = (formData: AddModuleFormData) => {
    if (moduleId) {
      updateModule({ id: moduleId, data: formData }, { onSuccess: closeModal });
    } else {
      addModule(formData, { onSuccess: closeModal });
    }
  };

  if (isLoading) return <Skeleton active />;

  return (
    <Modal
      open={isModalOpen}
      onCancel={closeModal}
      footer={null}
      title={moduleId ? t("modules.edit_module") : t("modules.add_module")}
      width={1000}
      centered
    >
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)} className="!mt-8">
        <Form.Item
          label={t("modules.name")}
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={t("modules.name")} size="large" />
            )}
          />
        </Form.Item>

        <Form.Item
          label={t("modules.description")}
          validateStatus={errors.description ? "error" : ""}
          help={errors.description?.message}
        >
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                value={field.value ?? ""}
                placeholder={t("modules.description")}
                rows={4}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label={t("modules.type")}
          validateStatus={errors.module_type ? "error" : ""}
          help={errors.module_type?.message}
        >
          <Controller
            name="module_type"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={t("modules.type")} size="large" />
            )}
          />
        </Form.Item>

        <Form.Item label={t("modules.is_active")}>
          <Controller
            name="is_active"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Switch checked={value} onChange={onChange} />
            )}
          />
        </Form.Item>

        <div className="flex justify-end gap-2">
          <Button onClick={closeModal}>{t("buttons.cancel")}</Button>
          <Button type="primary" htmlType="submit">
            {moduleId ? t("buttons.update") : t("buttons.add")}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddModule;
