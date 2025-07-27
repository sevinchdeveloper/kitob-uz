import Navbar from "@/layouts/Navbar";
import { Carousel, Dropdown, MenuProps } from "antd";

export default function Landing() {

  const items: MenuProps['items'] = [
    { key: '1', label: 'My Account' },
    { key: '2', label: 'divider' },
    { key: '3', label: 'Profile' },
    { key: '4', label: 'Billing' },
    { key: '5', label: 'Settings' },
  ];

  const carouselImages = [
    "https://backend.book.uz/user-api/img/img-file-630f031281a611af4d128a5d5abb56cf.PNG",
    "https://backend.book.uz/user-api/img/img-file-b6af9539fd3af8bc01701fe98b5913e9.PNG",
    "https://backend.book.uz/user-api/img/img-file-1faab875d552658ac78babc7dcdb7877.PNG",
    "https://backend.book.uz/user-api/img/img-file-579165fbf64f8619bcfb33a0ecc50772.png",
  ];

  return (
    <>
      <Navbar />
      <div className="w-full flex gap-4">
        <div className="w-2/9 bg-[rgb(245,245,245)] flex flex-col rounded-lg overflow-auto h-[480px] py-4">
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 1</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 2</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 3</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 4</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 5</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 6</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 7</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 8</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 9</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 10</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 11</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 12</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 13</Dropdown>
          <Dropdown menu={{ items }} className="hover:bg-amber-500 hover:text-white px-4 py-3" align={{ offset: [275, -50] }}>Badiy adabiyotlar 14</Dropdown>
        </div>
        <div className="w-7/9">
          <Carousel arrows infinite={false} className="w-full">
            {carouselImages.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`carousel-${index}`}
                  className="h-[480px] w-full object-cover rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}
