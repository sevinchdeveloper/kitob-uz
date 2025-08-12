import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Logo from './../assets/images/Logo.svg'
import appStore from './../assets/images/AppStore.ecdb34cd.svg'
import googlePlay from './../assets/images/GooglePlay.1e9c0315.svg'

export default function Footer() {
    return (
        <footer className="bg-[#111] text-white py-10 text-sm">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <img src={Logo} alt="Book.uz" className="h-18 mb-4" />
                        <p className="italic text-[18px] text-gray-300 mb-2">
                            Mutolaa <span className="font-medium">book.uz</span>dan boshlanar
                        </p>
                        <p className="text-neutral-400 text-[14px]">
                            BOOK.UZ Respublikamizdagi eng katta <br /> kitob do‘konlaridan biri
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-[18px] mb-4">MENU</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="text-[16px]">Biz haqimizda</a></li>
                            <li><a href="#" className="text-[16px]">Qanday xarid qilinadi?</a></li>
                            <li><a href="#" className="text-[16px]">Yetkazib berish</a></li>
                            <li><a href="#" className="text-[16px]">Filial va dilerlar</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-[18px] mb-4">KONTAKTLAR</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center justify-start gap-2 text-[16px]">
                                <FaPhoneAlt /> +998-71-230-00-50
                            </li>
                            <li className="flex items-center justify-start gap-2 text-[16px]">
                                <MdEmail size={20} /> bookuzads@gmail.com
                            </li>
                            <li className="flex items-center justify-start gap-2 text-[16px]">
                                <MdLocationOn size={22} /> Chilonzor-8, Qatortol ko‘chasi 60
                            </li>
                        </ul>
                        <div className="flex gap-4 text-xl mt-4">
                            <FaFacebookF className="cursor-pointer hover:text-[#f07e1a]" />
                            <FaInstagram className="cursor-pointer hover:text-[#f07e1a]" />
                            <FaTelegramPlane className="cursor-pointer hover:text-[#f07e1a]" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4 text-[18px]">
                            ILOVALARIMIZNI YUKLAB OLING
                        </h4>
                        <div className="space-y-4">
                            <img src={appStore} alt="App Store" className="h-12" />
                            <img src={googlePlay} alt="Google Play" className="h-12" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p className="text-[16px]">© 2025 Book.uz</p>
                    <div className="flex gap-6 mt-2 md:mt-0">
                        <a href="#" className="text-[16px]">Ommaviy oferta</a>
                        <a href="#" className="text-[16px]">Politika</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
