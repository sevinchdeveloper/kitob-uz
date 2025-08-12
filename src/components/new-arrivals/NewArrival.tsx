import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

type NewArrivalProps = {
    id: string,
    name: string,
    author: string,
    imgUrl: string,
    price: number,
}

export default function NewArrivals({ id, name, author, imgUrl, price }: NewArrivalProps) {
    const handleClickCard = (id: string): void => console.log(id);

    return (
        <div className="shadow-md p-3 rounded-xl flex flex-col gap-4" onClick={() => handleClickCard(id)}>
            <div className="relative">
                <div>
                    <img src={imgUrl} alt={name} className="rounded-lg w-[274px] h-[360px] object-fill" />
                    <div className="absolute right-0 bottom-22 flex flex-col gap-4 p-4">
                        <div className="bg-white rounded-[100%] p-2.5 flex items-center justify-center cursor-pointer"><HeartOutlined className="text-xl" /></div>
                        <div className="bg-white rounded-[100%] p-2.5 flex items-center justify-center cursor-pointer"><ShoppingCartOutlined className="text-2xl" /></div>
                        <div className="bg-white rounded-[100%] p-2.5 flex items-center justify-center cursor-pointer"><SearchOutlined className="text-xl" /></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="mt-2 text-[18px] text-[#000000] font-bold">{name}</h2>
                    <span className="my-1 text-[16px] text-[#828282] italic">{author}</span>
                    <span className="text-[18px] text-[#EF7F1A] font-semibold">{`${price} so'm`}</span>
                </div>
            </div>
        </div>
    )
}