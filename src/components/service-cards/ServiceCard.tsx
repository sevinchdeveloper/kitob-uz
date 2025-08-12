type serviceCardProps = {
    id: number,
    img: string,
    title: string,
    text: string,
}

export default function ServiceCard({ id, img, title, text }: serviceCardProps) {
    return (
        <div
            className="bg-[#e8f1fc] w-1/4 py-4 px-6 rounded-lg text-[#107FE4] flex flex-col justify-between"
        >
            <img src={img} alt={title} className="w-12 h-12 mb-4" />
            <h4 className="text-[19px] font-bold pb-2">{title}</h4>
            <p className="text-[16px] font-light flex-1">{text}</p>
        </div>
    )
}