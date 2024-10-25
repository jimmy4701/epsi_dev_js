'use client'
import { CookieZone } from "@/components/CookieZone";
import { PurchasedItem } from "@/components/PurchasedItem";
import { ShopItem } from "@/components/ShopItem";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface ShopItemType {
  id: number,
  image_url: string,
  label: string,
  price: number,
  cps: number, // Cookies per second
  total: number
}

const defaultShopItems : ShopItemType[] = [
  {id: 1, label: "Mamy", image_url: "https://cdn-icons-png.flaticon.com/512/6247/6247428.png", price: 10, cps: 1, total: 0},
  {id: 2, label: "Super Mamy", image_url: "https://cdn-icons-png.flaticon.com/512/6247/6247428.png", price: 100, cps: 10, total: 0},
]

export default function Home() {

  const [cookies, setCookies] = useState(0)
  const [purchasedItems, setPurchasedItems] = useState(defaultShopItems)
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0)

  const handlePurchasedItem = (item: ShopItemType) => {
    setCookies(cookies - item.price)

    let actualItems = [...purchasedItems]
    const itemIndex = actualItems.findIndex(o => o.id == item.id)

    actualItems[itemIndex].total++
    setPurchasedItems([...actualItems])
    setCookiesPerSecond(cookiesPerSecond + item.cps)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(prevCookies => prevCookies + (cookiesPerSecond / 100))
    }, 10)

    return () => clearInterval(interval)
  }, [cookiesPerSecond])
  

  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/4  ">
        <CookieZone totalCookies={cookies} cps={cookiesPerSecond} onCookieClick={() => { setCookies(cookies + 1) }} />
      </div>
      <div className="center flex-1 bg-red-500 grid grid-cols-4 gap-3 p-5">
        {purchasedItems.filter(o => o.total > 0).map(item => <PurchasedItem item={item} /> )}
      </div>
      <div className="right w-1/4 flex flex-col gap-3 p-2">
        {purchasedItems.map(item => 
          <ShopItem 
            item={item}
            totalCookies={cookies}
            key={item.id} 
            onClick={() => { handlePurchasedItem(item) }} 
            />
        )}
      </div>
    </div>
  );
}
