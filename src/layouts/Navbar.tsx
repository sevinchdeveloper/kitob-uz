import React from "react";
import LanguageSwitcher from "@/layouts/LanguageSwitcher";
import { Link } from "react-router-dom";
import LogoImage from "./../assets/images/Logo.svg";
import { Button, Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";

const Navbar: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    return (
            <nav>
                <div className="flex items-end justify-between gap-6 pt-2 pb-2 shadow-2xs">
                    <Link to="/">
                        <img src={LogoImage} alt="Logo" className="h-11 w-auto mb-[13px]" />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-10">
                            <h3 className="italic text-md">Mutolaa Book.uzdan boshlanar</h3>
                            <p className="underline text-md text-black/50 cursor-pointer">Qanday xarid qilinadi?</p>
                        </div>

                        <Input
                            placeholder="Kitob qidiring"
                            size="large"
                            className="!w-90 !border-blue-400 focus:!shadow-none hover:!shadow-none focus:!border-blue-400 !placeholder-black/80"
                            suffix={
                                <div className="flex items-center gap-[2px]">
                                    <span className="h-[15px] border border-neutral-300"></span>
                                    <SearchOutlined className="text-[16px] !text-black/30" />
                                </div>
                            }
                        />
                        <LanguageSwitcher />
                        <div className="relative w-11 h-4">
                            <div className="w-full h-full rounded-full bg-gray-300 cursor-pointer" />

                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="w-7 h-7 bg-blue-950 cursor-pointer text-white rounded-full absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300"
                                style={{ left: isDark ? "calc(100% - 1.7rem)" : "0" }}
                            >
                                {isDark ? <SunOutlined /> : <MoonOutlined />}
                            </button>
                        </div>
                        <p className="cursor-pointer">+998 71 230 00 50</p>
                        <div className="flex items-center gap-2">
                            <FaFacebookF size={20} className="text-black/60 cursor-pointer" />
                            <FaInstagram size={22} className="text-black/60 cursor-pointer" />
                            <FaTelegramPlane size={22} className="text-black/60 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center py-4 px-0">
                    <div className="flex items-center gap-6">
                        <Button type="link" className="!text-black !text-[16px] !px-0">
                            Kitoblar
                        </Button>
                        <Button type="link" className="!text-black !text-[16px] !px-0">
                            To'plamlar
                        </Button>
                        <Button type="link" className="!text-black !text-[16px] !px-0">
                            Mualliflar
                        </Button>
                        <Button type="link" className="!text-black !text-[16px] !px-0">
                            Chegirmalar
                        </Button>
                    </div>
                    <div className="flex items-center gap-6">
                        <Button
                            type="primary"
                            className="!text-[12px] !text-[#1E1E1E] !bg-[#F0F0F0] !rounded-sm !py-5"
                            icon={<RiShoppingBag4Line size={20}/>}
                            size="large"
                        >
                            Savatcha
                        </Button>
                        <Button
                            type="primary"
                            className="!text-[12px] !text-[#1E1E1E] !bg-[#F0F0F0] !rounded-sm !py-5"
                            icon={<GoHeart size={20}/>}
                            size="large"
                        >
                            Sevimlilar
                        </Button>
                        <Button
                            type="primary"
                            className="!text-[12px] !text-[#1E1E1E] !bg-[#F0F0F0] !rounded-sm !py-5"
                            icon={<GoPerson size={20}/>}
                            size="large"
                        >
                            Profil
                        </Button>
                        
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;