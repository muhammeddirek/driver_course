import React from 'react'
import Image from 'next/image'
import logo from "@/public/icon.svg"
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-10">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl ">
      <Link href="/" className="flex flex-row items-center gap-2">
      <Image src={logo} width={50} height={50} />
      Sürücü Kursu
      </Link>
      </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 items-center gap-7">
        <li><a><Link href="/kurs_bilgisi">Kurs Bilgisi</Link></a></li>
        <li>
        <a><button className="btn btn-neutral rounded">
        <Link href="/login">Login</Link>
        
        </button></a>
          
        </li>
      </ul>
    </div>
  </div>
  )
}
