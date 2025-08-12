import { useLandingNewAgeLibraryQuery } from '@/config/hooks-query/landing-query/landing.api'
import Button from '../button/Button'
import NewArrival from './NewArrival'

const books = [
    {
        _id: "1",
        name: "Atrof to'la ahmoqlar",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Tomas erikson",
        },
        amount: "23",
        bookPrice: 42000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727802944/book-uz/cdnvkddakwrwwq66uuqm.jpg",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "2",
        name: "Магниты",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Наталья Способина",
        },
        amount: "23",
        bookPrice: 156000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727366544/book-uz/jnu6wmwlmlyhimuili5s.png",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "3",
        name: "Muzokara san'ati",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Gevin Kennedi",
        },
        amount: "23",
        bookPrice: 78000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727804232/book-uz/i9nvhnjchgir9hxqxkih.jpg",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "4",
        name: "Kichkina shahzoda",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Antuan de Sent-Ekzyuperi",
        },
        amount: "23",
        bookPrice: 45000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727368107/book-uz/oowd6b2cp6lgtvyjaksb.jpg",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "5",
        name: "Boy ota, kamba..",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Robert Kiyosaki",
        },
        amount: "23",
        bookPrice: 29000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727804439/book-uz/ca15kowkcj9rt8y65vuy.jpg",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "6",
        name: "Yoz, Qisqartir..",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Maksim Ilyaxov...",
        },
        amount: "23",
        bookPrice: 95000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727803751/book-uz/za73u57x5oncqeiejsno.jpg",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "7",
        name: "Пока ты здесь",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Tomas erikson",
        },
        amount: "23",
        bookPrice: 142000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727366002/book-uz/bqxzc0asb0f6zfje1cft.png",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "8",
        name: "Atrof to'la ahmoqlar",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Tomas erikson",
        },
        amount: "23",
        bookPrice: 42000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1728356071/book-uz/q5xox6a8jispcjfkt3f2.png",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "9",
        name: "Atrof to'la ahmoqlar",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Tomas erikson",
        },
        amount: "23",
        bookPrice: 42000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1728357020/book-uz/by0oktbrwhdxnk1cjuoa.jpg",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
    {
        _id: "10",
        name: "Atrof to'la ahmoqlar",
        author: {
            _id: "7672637237efb32098243b9283",
            fullName: "Tomas erikson",
        },
        amount: "23",
        bookPrice: 42000,
        discount: 0,
        hasDiscount: false,
        state: "new",
        imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1728356651/book-uz/xqcyxcvrbl9s6lw1p9qb.jpg",
        additionalImages: [],
        rateCount: 4,
        rating: 4.25
    },
]

export default function NewArrivals() {
    // const { data } = useLandingNewAgeLibraryQuery()
    return (
        <div className='mt-10 container'>
            <Button name="Yangi davr kutubxonasi" variant="primary"/>
            <div className='grid grid-cols-5 grid-rows-2 gap-6 mt-4'>
                {
                    books.map((book) => <NewArrival
                        key={book._id}
                        id={book._id}
                        name={book.name}
                        author={book.author.fullName}
                        price={book.bookPrice}
                        imgUrl={book.imgUrl}
                    />
                    )
                }
            </div>
        </div>
    )
}