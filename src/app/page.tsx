'use client'
import { CookieZone } from "@/components/CookieZone";
import { ShopItem } from "@/components/ShopItem";
import { useMemo, useState } from "react";

export interface ShopItemType {
  id: number,
  image_url: string,
  label: string,
  price: number,
  cps: number // Cookies per second
}

export default function Home() {

  const [cookies, setCookies] = useState(0)

  const shopItems = useMemo<ShopItemType[]>(() => {
    return [
      {id: 1, label: "Mamy", image_url: "https://cdn-icons-png.flaticon.com/512/6247/6247428.png", price: 10, cps: 1},
      {id: 2, label: "Super Mamy", image_url: "https://cdn-icons-png.flaticon.com/512/6247/6247428.png", price: 100, cps: 10},
    ]
  }, [])

  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/4 bg-green-500">
        <CookieZone totalCookies={cookies} onCookieClick={() => { setCookies(cookies + 1) }} />
      </div>
      <div className="center flex-1 bg-red-500">
      </div>
      <div className="right w-1/4 bg-yellow-500">
        {shopItems.map(item => 
          <ShopItem item={item} key={item.id} onClick={() => { setCookies(cookies - item.price)}} />
        )}
      </div>
    </div>
  );
}
