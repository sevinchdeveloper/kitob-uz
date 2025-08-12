import Button from "../button/Button";
import New from "./New";

type NewsItem = {
    _id: string,
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

const news: NewsItem[] = [
    {
        _id: "6787424866e9735821849541",
        book: null,
        content: "<strong><h4>Shiddat-u hayajon va qo'rquvga soluvchi...</h4></strong><br /><strong><h4>Zavqli...</h4></strong><br /><strong><h4>0'tkir syujetli detektiv va zamonaviy",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1728528955/book-uz/j3lzc5qvpnatrgdcsowi.jpg",
        isRead: 0,
        readCount: 0,
        title: "Tez kunda yangi tarjima: Tomas Harris, «Qo'zichoqlar sukunati»",
        type: "news",
        createdAt: "2024-18-10T02:56:08.2442",
        updatedAt: "2024-18-10T02:56:08.244Z",
        __v: 0
    },
    {
        _id: "6787424866e9735821849541",
        book: null,
        content: "<strong><h4>Shiddat-u hayajon va qo'rquvga soluvchi...</h4></strong><br /><strong><h4>Zavqli...</h4></strong><br /><strong><h4>0'tkir syujetli detektiv va zamonaviy",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1728528955/book-uz/j3lzc5qvpnatrgdcsowi.jpg",
        isRead: 0,
        readCount: 0,
        title: "Tez kunda yangi tarjima: Tomas Harris, «Qo'zichoqlar sukunati»",
        type: "news",
        createdAt: "2024-18-10T02:56:08.2442",
        updatedAt: "2024-18-10T02:56:08.244Z",
        __v: 0
    },
    {
        _id: "6787424866e9735821849541",
        book: null,
        content: "<strong><h4>Shiddat-u hayajon va qo'rquvga soluvchi...</h4></strong><br /><strong><h4>Zavqli...</h4></strong><br /><strong><h4>0'tkir syujetli detektiv va zamonaviy",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1728528955/book-uz/j3lzc5qvpnatrgdcsowi.jpg",
        isRead: 0,
        readCount: 0,
        title: "Tez kunda yangi tarjima: Tomas Harris, «Qo'zichoqlar sukunati»",
        type: "news",
        createdAt: "2024-18-10T02:56:08.2442",
        updatedAt: "2024-18-10T02:56:08.244Z",
        __v: 0
    },
    {
        _id: "6787424866e9735821849541",
        book: null,
        content: "<strong><h4>Shiddat-u hayajon va qo'rquvga soluvchi...</h4></strong><br /><strong><h4>Zavqli...</h4></strong><br /><strong><h4>0'tkir syujetli detektiv va zamonaviy",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1728528955/book-uz/j3lzc5qvpnatrgdcsowi.jpg",
        isRead: 0,
        readCount: 0,
        title: "Tez kunda yangi tarjima: Tomas Harris, «Qo'zichoqlar sukunati»",
        type: "news",
        createdAt: "2024-18-10T02:56:08.2442",
        updatedAt: "2024-18-10T02:56:08.244Z",
        __v: 0
    }
];

export default function News() {
    return (
        <div className="container">
            <div className="flex items-center justify-between">
                <h2 className="text-[28px] font-bold">Yangiliklar</h2>
                <Button name="Yangiliklar" variant="primary" />
            </div>
            <div className="flex items-center justify-between gap-5 my-7">
                {
                    news.map((newsItem) => (
                        <New
                            key={newsItem._id}
                            // {...newsItem}
                            book={newsItem.book}
                            content={newsItem.content}
                            imgUrl={newsItem.imgUrl}
                            isRead={newsItem.isRead}
                            readCount={newsItem.readCount}
                            title={newsItem.title}
                            type={newsItem.type}
                            createdAt={newsItem.createdAt}
                            updatedAt={newsItem.updatedAt}
                            __v={newsItem.__v}
                        />
                    ))
                }
            </div>
        </div>
    )
}