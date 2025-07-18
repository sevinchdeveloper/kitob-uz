import { Select } from "antd";
import i18next from "i18next";
import IconRU from "@/assets/icons/IconRu";
import IconUz from "@/assets/icons/IconUz";
import { setLanguage } from "@/helpers/language-storage";

export default function LanguageSwitcher() {
  return (
    <Select
      defaultValue={i18next.language}
      className="w-[75px]"
      onChange={(lang) => {
        i18next.changeLanguage(lang);
        setLanguage(lang);
      }}
      options={[
        {
          value: "uz",
          label: (
            <span className="flex items-center gap-1.5">
              <IconUz className="size-5" /> <span> uz </span>
            </span>
          ),
        },
        {
          value: "ru",
          label: (
            <span className="flex items-center gap-1.5">
              <IconRU className="size-5" /> <span> ru </span>
            </span>
          ),
        },
      ]}
    />
  );
}
