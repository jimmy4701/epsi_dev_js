import { ShopItemType } from "@/app/page"
import Image from "next/image"

interface Props {
    item: ShopItemType
}

export const ShopItem = ({item}:Props) => {
    return(
        <div className="flex w-full p-2 border rounded-lg">
            <Image src={item.image_url} alt={item.label} />
            <div className="flex flex-col p-2">
                <h1>{item.label}</h1>
                <p>Cout : {item.price} cookies</p>
            </div>
        </div>
    )
}
