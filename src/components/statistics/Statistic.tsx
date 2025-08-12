import bookIcon from './../../assets/images/BookWarningIcon.a11e373b.svg'

type StatisticProps = {
    amount: number,

}

export default function Statistic({ amount}: StatisticProps) {
    return (
        <div className='rounded-2xl bg-[#faede6] w-1/3 px-7 py-9 flex items-center gap-4'>
            <div className='bg-white w-[70px] h-[70px] p-3 rounded-[50%] flex items-center justify-center'>
                <img src={bookIcon} alt="Book icon" />
            </div>
            <div className='flex flex-col'>
                <p className='text-[24px] font-bold'>{amount}</p>
                <p>Nomdagi kitoblar sotuvda mavjud</p>
            </div>
        </div>
    )
}