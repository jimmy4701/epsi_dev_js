'use client'
import { useState } from "react";

export default function Home() {

  const [cookies, setCookies] = useState(0)

  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/4 bg-green-500">

      </div>
      <div className="center flex-1 bg-red-500">

      </div>
      <div className="right w-1/4 bg-yellow-500">
      
      </div>
    </div>
  );
}
