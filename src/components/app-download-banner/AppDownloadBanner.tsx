import phone from './../../assets/images/pngtree-mobile-phone-frame-photo-png-image_14568670.png'
import bookfon from './../../assets/images/86c9ca8f37c2e63aecad986938375347.jpg'
import appStore from './../../assets/images/AppStore.ecdb34cd.svg'
import googlePlay from './../../assets/images/GooglePlay.1e9c0315.svg'

export default function AppDownloadBanner() {
    return (
        <div className='container'>
            <div className="bg-[#f07e1a] px-22 h-[300px] rounded-3xl flex relative">
                <div className='w-4/8 flex flex-col gap-4 items-start mt-9'>
                    <h1 className='text-[32px] font-bold text-white'>BOOK.UZ MOBIL ILOVAMIZNI TELEFONINGIZGA YUKLAB OLING</h1>
                    <div className='flex items-center justify-center gap-4'>
                        <img src={appStore} alt="appStore" className='cursor-pointer' />
                        <img src={googlePlay} alt="googlePlay" className='cursor-pointer' />
                    </div>
                </div>
                <div className=' overflow-hidden absolute -top-0 right-45'>
                    <img src={bookfon} alt="bookfon" className='w-[300px] h-[300px]' />
                </div>
                <div className='w-4/8 overflow-hidden rounded-lg absolute -top-30 right-0'>
                    <img src={phone} alt="phone" className='w-full h-auto' style={{ clipPath: "inset(0 0 36% 0)" }} />
                </div>
            </div>
        </div>
    )
}