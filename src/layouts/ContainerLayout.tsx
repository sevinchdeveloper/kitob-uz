import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const ContainerLayout = ({ children }: LayoutProps) => {
    return (
        <div className="px-4 sm:px-6 md:px-10 xl:px-20 max-w-screen-2xl mx-auto">
            {children}
        </div>
    )
}

export default ContainerLayout;