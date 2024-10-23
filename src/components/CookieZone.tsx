import Image from "next/image"
import CookieImg from '@/assets/cookie.png'

interface Props {
    totalCookies: number,
    cookiesPerSecond?: number
}

export const CookieZone = ({totalCookies, cookiesPerSecond = 0}:Props) => {

    return(
        <div className="h-full w-full bg-purple-700 flex items-center justify-center">
            <Image src={CookieImg} alt="Big Cookie" className="cursor-pointer h-60 hover:h-64 w-60 hover:w-64 ease-in-out duration-300@`" />
        </div>
    )
}