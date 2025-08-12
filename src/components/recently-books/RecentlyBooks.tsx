import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RecentlyBook from "./RecentlyBook";
import { useState } from "react";

const books = [
  {
    _id: "66f58bc2e8ad3af7fd293555",
    name: "Kichkina shahzoda",
    author: {
      _id: "66f58b2ee8ad3af7fd293543",
      fullName: "Antuan de Sent-Ekzyuperi"
    },
    amount: 34,
    bookPrice: 45000,
    discount: 0,
    hasDiscount: false,
    state: "old",
    imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727368107/book-uz/oowd6b2cp6lgtvyjaksb.jpg",
    additionalImages: "",
    rateCount: 0,
    rating: 0
  },
  {
      _id: "66f58595e8ad3af7fd2934d5",
      name: "Магниты",
      author: {
          _id: "66f58444e8ad3af7fd2934b1",
          fullName: "Наталья Способина"
      },
      amount: 2,
      bookPrice: 156000,
      discount: 0,
      hasDiscount: false,
      state: "new",
      imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727366542/book-uz/kukixr5a4gydgng96qlt.png",
      additionalImages: "",
      rateCount: 0,
      rating: 0
  },
  {
      _id: "66fc316f3ebc12c7c062338b",
      name: "Yoz, Qisqartir | Kuchli matn yozish siri",
      author: {
          _id: "66fc2f9c3ebc12c7c062337b",
          fullName: " Maksim Ilyaxov, Lyudmila Saricheva"
      },
      amount: 32,
      bookPrice: 95000,
      discount: 0,
      hasDiscount: false,
      state: "new",
      imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727803751/book-uz/za73u57x5oncqeiejsno.jpg",
      additionalImages: "",
      rateCount: 0,
      rating: 0
  },
  {
      _id: "66fc341a3ebc12c7c06233cc",
      name: "Boy ota, kambag'al ota",
      author: {
          _id: "66fc33b43ebc12c7c06233bd",
          fullName: " Robert Kiyosaki"
      },
      amount: 54,
      bookPrice: 29000,
      discount: 0,
      hasDiscount: false,
      state: "new",
      imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727804425/book-uz/gsblznijeh0zxut0n8is.jpg",
      additionalImages: "",
      rateCount: 0,
      rating: 0
  },
   {
      _id: "66fc341a3ebc12c7c06233cc",
      name: "Boy ota, kambag'al ota",
      author: {
          _id: "66fc33b43ebc12c7c06233bd",
          fullName: " Robert Kiyosaki"
      },
      amount: 54,
      bookPrice: 29000,
      discount: 0,
      hasDiscount: false,
      state: "new",
      imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727804425/book-uz/gsblznijeh0zxut0n8is.jpg",
      additionalImages: "",
      rateCount: 0,
      rating: 0
  },
   {
      _id: "66fc341a3ebc12c7c06233cc",
      name: "Boy ota, kambag'al ota",
      author: {
          _id: "66fc33b43ebc12c7c06233bd",
          fullName: " Robert Kiyosaki"
      },
      amount: 54,
      bookPrice: 29000,
      discount: 0,
      hasDiscount: false,
      state: "new",
      imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727804425/book-uz/gsblznijeh0zxut0n8is.jpg",
      additionalImages: "",
      rateCount: 0,
      rating: 0
  },
   {
      _id: "66fc341a3ebc12c7c06233cc",
      name: "Boy ota, kambag'al ota",
      author: {
          _id: "66fc33b43ebc12c7c06233bd",
          fullName: " Robert Kiyosaki"
      },
      amount: 54,
      bookPrice: 29000,
      discount: 0,
      hasDiscount: false,
      state: "new",
      imgUrl: "https://res.cloudinary.com/drzujsdf3/image/upload/v1727804425/book-uz/gsblznijeh0zxut0n8is.jpg",
      additionalImages: "",
      rateCount: 0,
      rating: 0
  },
];

export default function RecentlyBooks() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;

  const right = () => {
    if (startIndex + visibleCount < books.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const left = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="container mb-40 mt-10 overflow-hidden relative">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-[28px] font-bold">Oyning eng ko'p sotilgan kitoblari</h2>
        <div className="flex gap-2">
          <div
            onClick={left}
            className="border border-[#e5e7eb] hover:bg-[#f3f4f6] text-[#030712] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={right}
            className="border border-[#e5e7eb] hover:bg-[#f3f4f6] text-[#030712] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / 2.5)}%)` }}
        >
          {books.map((book) => (
            <RecentlyBook
              key={book._id}
              _id={book._id}
              name={book.name}
              author={book.author.fullName}
              amount={book.amount}
              price={book.bookPrice}
              imgUrl={book.imgUrl}
              rateCount={book.rateCount}
              rating={book.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
