import Statistic from "./Statistic";

const data = {
    "totalBooks": 1000,
    "totalNamedBooks": 50,
    "totalBranches": 7
}

export default function Statistics() {
    return (
        <div className="container flex items-center justify-between gap-6 my-20">
            <Statistic amount={data.totalBooks}/>
            <Statistic amount={data.totalNamedBooks}/>
            <Statistic amount={data.totalBranches}/>
        </div>
    )
}