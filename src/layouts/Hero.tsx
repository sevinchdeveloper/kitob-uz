import { useLandingBannersQuery, useLandingGenresQuery } from "@/config/hooks-query/landing-query/landing.api";
import { Carousel, Dropdown, MenuProps } from "antd";

export default function Hero() {

    const items: MenuProps['items'] = [
        { key: '1', label: 'Fantastika' },
        { key: '2', label: 'Jahon adabiyoti' },
        { key: '3', label: 'Sharq mumtoz adabiyoti' },
        { key: '4', label: 'Zamonaviy jahon adabiyoti' },
        { key: '5', label: 'Sarguzasht' },
    ];

    const { data } = useLandingBannersQuery();
    const { data: genresData } = useLandingGenresQuery();

    return (
        <div className="container w-full flex gap-4">
            <div className="w-2/9 bg-[rgb(245,245,245)] flex flex-col rounded-lg overflow-auto h-[480px] py-4">
                {genresData?.data?.map((genreData) => (
                    <Dropdown
                        key={genreData._id}
                        menu={{ items }}
                        className="hover:bg-[#f07e1a] text-[20px] hover:text-white px-4 py-3"
                        align={{ offset: [275, -50] }}
                    >
                        {genreData.name}
                    </Dropdown>
                ))}
            </div>
            <div className="w-7/9">
                <Carousel arrows className="w-full">
                    {data?.data?.map((banner) => (
                        <div key={banner._id}>
                            <img
                                src={banner.imgUrl}
                                alt="image"
                                className="h-[480px] w-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}