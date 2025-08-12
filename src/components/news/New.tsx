import { formatDate } from "@/utils/formatDate";

type NewProps = {
    book: null | string,
    content: string,
    imgUrl: string,
    isRead: number,
    readCount: number,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export default function New({
    book,
    content,
    imgUrl,
    isRead,
    readCount,
    title,
    type,
    createdAt,
    updatedAt,
    __v
}: NewProps) {
    console.log(book,content,imgUrl,isRead,readCount,title,type,createdAt,updatedAt,__v);

    return (
        <div className="bg-cover bg-center h-74 w-full rounded-lg shadow-md p-4 text-white flex flex-col justify-end"
        style={{ backgroundImage: `url(${imgUrl})`}}
        >
         <p>{formatDate(createdAt)}</p>
         <p>{title}</p>
        </div>
    )
}