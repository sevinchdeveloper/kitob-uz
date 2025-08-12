type ButtonProps = {
    name: string,
    variant: "default" | "danger" | "info" | "primary",
}

export default function Button({ name, variant}: ButtonProps) {
    let buttonCss = "";

    switch (variant) {
        case "default": {
            buttonCss = "bg-gray-300 text-black hover:bg-gray-400"
            break;
        }
        case "danger": {
            buttonCss = "bg-red-500 text-white hover:bg-red-600"
            break;
        }
        case "info": {
            buttonCss = "bg-blue-500 text-white hover:bg-blue-600"
            break;
        }
        case "primary": {
            buttonCss = "bg-[#EF7F1A] text-white hover:bg-[#EF7F4A]"
        }
    }
    return (
        <button className={`px-6 py-3 text-sm font-light rounded-lg ${buttonCss}`}>
            {name}
        </button>
    )
}