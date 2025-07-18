import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const {t:lang} = useTranslation();

  return (
   <div className="flex items-center justify-center min-h-screen">
      <Result
        status="404"
        title="404"
        subTitle={lang("notFound.subTitle")}
        extra={
          <div className="flex flex-col items-center gap-4 w-full">
            <Button
              type="primary"
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => navigate('/')}
            >
              {lang("notFound.backToHome")}
            </Button>
            <Button
              type="default"
              className="border-gray-300 text-gray-700 hover:text-gray-900"
              onClick={() => navigate(-1)}
            >
              {lang("notFound.goBack")}
            </Button>
          </div>
        }
        className="p-6 bg-white rounded-lg shadow-lg max-w-2xl w-full"
      />
    </div>
  );
}
