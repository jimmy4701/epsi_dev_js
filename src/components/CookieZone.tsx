import Image from "next/image"
import CookieImg from '@/assets/cookie.png'

interface Props {
    totalCookies: number,
    cookiesPerSecond?: number
    onCookieClick: Function
}

export const CookieZone = ({totalCookies, cookiesPerSecond = 0, onCookieClick}:Props) => {

    return(
        <div className="h-full w-full flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">Total cookies : {totalCookies}</p>
            <Image onClick={() => onCookieClick()} src={CookieImg} alt="Big Cookie" className="cursor-pointer h-60 hover:h-64 w-60 hover:w-64 ease-in-out duration-300@`" />
        </div>
    )
}