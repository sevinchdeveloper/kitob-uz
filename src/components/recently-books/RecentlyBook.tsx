// import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

// type RecentlyBookProps = {
//     _id: string;
//     name: string;
//     author: string;
//     amount: number;
//     price: number;
//     imgUrl: string;
//     rateCount: number;
//     rating: number;
// };


// export default function RecentlyBook({
//     name,
//     author,
//     price,
//     imgUrl,
//     rateCount,
//     rating
// }: RecentlyBookProps) {
//     return (
//         <div className="flex justify-between items-end gap-4 bg-[#e7f2fc] rounded-2xl w-[460px] h-[200px] relative pb-10 pr-4">
//             <div className="absolute left-4">
//                 <div className="relative">
//                     <img src={imgUrl} alt={imgUrl} className="w-[164px] h-[200px] object-cover rounded-[10px]" />
//                     <div className="absolute bottom-2 right-2 flex flex-col gap-1">
//                         <div className="bg-white rounded-full flex justify-center items-center p-2 cursor-pointer hover:bg-[#ef7f1a] hover:text-white">
//                             <ShoppingCartOutlined />
//                         </div>
//                         <div className="bg-white rounded-full flex justify-center items-center p-2 cursor-pointer hover:bg-[#ef7f1a] hover:text-white">
//                             <SearchOutlined />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="ml-50">
//                 <h2 className="text-[#117fe4] text-[22px] font-bold mb-2">{name}</h2>
//                 <p className="text-[16px] mb-4">{author}</p>
//                 <div className="flex items-center gap-2 mb-4">
//                     <p className="text-[12px]">{rating} <span>({rateCount})</span> </p>
//                 </div>
//                 <h1 className="text-[24px] font-bold">{`${price} so'm`}</h1>
//             </div>

//             <div className="bg-white text-[#dc143c] rounded-full flex justify-center items-center p-2 cursor-pointer hover:bg-[#ef7f1a] hover:text-white w-8 h-8">
//                 <HeartOutlined />
//             </div>
//         </div>
//     );
// }




import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

type RecentlyBookProps = {
  _id: string;
  name: string;
  author: string;
  amount: number;
  price: number;
  imgUrl: string;
  rateCount: number;
  rating: number;
};

export default function RecentlyBook({ name, author, price, imgUrl, rateCount, rating }: RecentlyBookProps) {
  return (
    <div className="relative flex-shrink-0 w-[460px] h-[200px] rounded-2xl bg-[#e7f2fc] px-6 py-4 flex items-end justify-between">
      <div className="absolute left-4 bottom-4">
        <div className="relative top-6">
          <img
            src={imgUrl}
            alt={name}
            className="w-[164px] h-[200px] object-cover rounded-[10px]"
          />
          <div className="absolute bottom-4 right-2 flex flex-col gap-1">
            <div className="bg-white rounded-[100%] p-2.5 flex items-center justify-center cursor-pointer">
              <ShoppingCartOutlined />
            </div>
            <div className="bg-white rounded-[100%] p-2.5 flex items-center justify-center cursor-pointer">
              <SearchOutlined />
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[190px]">
        <h2 className="text-[#117fe4] text-[20px] font-bold mb-2">{name}</h2>
        <p className="text-[16px] mb-2">{author}</p>
        <div className="text-[12px] mb-2">{rating} <span>({rateCount})</span></div>
        <h1 className="text-[24px] font-bold">{price} so'm</h1>
      </div>

      <div className="bg-white text-[#dc143c] w-8 h-8 rounded-full flex items-center justify-center p-2 cursor-pointer hover:bg-[#ef7f1a] hover:text-white">
        <HeartOutlined />
      </div>
    </div>
  );
}