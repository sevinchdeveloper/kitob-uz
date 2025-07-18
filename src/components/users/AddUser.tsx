import { Button, Form, Input, Modal, Skeleton, Switch } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddUserFormData } from "@/config/hooks-query/users-query/users.types";
import PhoneInput from "react-phone-input-2";
import { useAddUserMutation, useUpdateUserMutation, useUserQuery } from "@/config/hooks-query/users-query/users.api";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { addUserValidationSchema } from "@/schemas/add-user.validation";


interface IAddUserProps {
    isModalOpen: boolean;
    closeModal: () => void;
    userId: number | null;
}

const AddUser = ({ userId, isModalOpen, closeModal }: IAddUserProps) => {
    const { t } = useTranslation()
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue,
    } = useForm({
        resolver: yupResolver(addUserValidationSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            password: "",
            password_confirmation: "",
            ext_number: "",
            is_new_ext: false
        },
    });

    const { data, isLoading } = useUserQuery(userId, !!userId);
    const { mutate: addUserHandle } = useAddUserMutation();
    const { mutate: editUserHandler } = useUpdateUserMutation();

    useEffect(() => {
        if (data) {
            reset({
                name: data.name || "",
                phone: data.phone || "",
                ext_number: data.ext_number || "",
                is_new_ext: data.is_new_ext || false
            });
        }
    }, [data, reset]);

    const onSubmit = async (data: AddUserFormData) => (
        userId
            ? editUserHandler({ id: userId, data }, { onSuccess: () => closeModal() })
            : addUserHandle(data, { onSuccess: () => closeModal() })
    )

    if (isLoading) return <Skeleton active />

    return (
        <Modal
            open={isModalOpen}
            onCancel={closeModal}
            footer={null}
            width={1000}
            centered
            className="rounded-lg !p-6"
            title={t("users.modal_title")}
        >
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)} className="!mt-8">
                <Form.Item
                    label={<>{t("forms.labels.user_name")} <span className="text-red-500"> * </span></>}
                    validateStatus={errors.name ? "error" : ""}
                    help={errors.name?.message}
                >
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder={t("forms.labels.user_name_placeholder")}
                                size="large"
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label={<>{t("forms.labels.phone")} <span className="text-red-500"> * </span></>}
                    validateStatus={errors.phone ? "error" : ""}
                    help={errors.phone?.message}
                >
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <PhoneInput
                                {...field}
                                country="uz"
                                onChange={(value) => setValue("phone", value, { shouldValidate: true })}
                                specialLabel=""
                                onlyCountries={["uz"]}
                                countryCodeEditable={false}
                                disableDropdown={true}
                                containerClass="custom-phone-input"
                                inputClass="!w-full border border-gray-300 !rounded-lg !p-2.5"
                                masks={{ uz: "(..) ...-..-.." }}
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label={<>{t("forms.labels.password_confirmation")} <span className="text-red-500"> * </span></>}
                    validateStatus={errors.password ? "error" : ""}
                    help={errors.password?.message}
                >
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Input.Password
                                {...field}
                                placeholder={t("forms.labels.password_confirmation")}
                                size="large"
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label={<>{t("forms.labels.password_confirmation_placeholder")} <span className="text-red-500"> * </span></>}
                    validateStatus={errors.password_confirmation ? "error" : ""}
                    help={errors.password_confirmation?.message}
                >
                    <Controller
                        name="password_confirmation"
                        control={control}
                        render={({ field }) => (
                            <Input.Password
                                {...field}
                                placeholder={t("forms.labels.password_confirmation_placeholder")}
                                size="large"
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label={t("forms.labels.ext_number")}
                    validateStatus={errors.ext_number ? "error" : ""}
                    help={errors.ext_number?.message}
                >
                    <Controller
                        name="ext_number"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder={t("forms.labels.ext_number")}
                                size="large"
                                disabled={!!userId}
                            />
                        )}
                    />
                </Form.Item>

                {
                    !userId &&
                    <Form.Item
                        label={t("forms.labels.is_new_ext")}
                        validateStatus={errors.is_new_ext ? "error" : ""}
                        help={errors.is_new_ext?.message}
                    >
                        <Controller
                            name="is_new_ext"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <Switch
                                    checked={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Form.Item>
                }

                <div className="flex justify-end gap-2">
                    <Button danger onClick={closeModal}>
                        {t("buttons.cancel")}
                    </Button>
                    <Button type="primary" htmlType="submit">
                        {userId ? t("buttons.update") : t("buttons.add")}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddUser;