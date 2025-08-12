import ServiceCard from "./ServiceCard";

const cards = [
    {
        id: 1,
        img: 'src/assets/images/CarIcon.5bfedb1a.svg',
        title: 'Yetkazib berish',
        text: 'Buyurtmangizni O’zbekiston bo’ylab yetkazib beramiz',
    },
    {
        id: 2,
        img: 'src/assets/images/BookIcon.2cd90cc5.svg',
        title: 'Keng tanlov',
        text: 'Istalgan turdagi kitoblarni topishingiz mumkin',
    },
    {
        id: 3,
        img: 'src/assets/images/DebitCardIcon.69ccc8e0.svg',
        title: 'Oson to‘lov',
        text: 'Istalgan turdagi to‘lov asosida xarid qilishingiz mumkin',
    },
    {
        id: 4,
        img: 'src/assets/images/ProtectedIcon.6e812d11.svg',
        title: 'Himoyalangan tizim',
        text: 'Sizning xavfsizligingizni ta‘minlaymiz',
    },
];

export default function ServiceCards() {
    return (
        <div className="container flex items-stretch gap-5 my-10">
            {cards.map((card) => <ServiceCard
                key={card.id}
                id={card.id}
                img={card.img}
                title={card.title}
                text={card.text}
            />)}
        </div>
    )
}