import React from 'react'
import Image from 'next/image'
import driver from "@/public/driver.jpeg"

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content gap-40 flex-col  lg:flex-row-reverse">
        <div>
        <Image src={driver} className="max-w-xl rounded-lg shadow-2xl" />
        </div>
      <div>
        <h1 className="text-5xl font-bold">Sürücü Kursumuza Hoş Geldiniz!</h1>
        <p className="py-6 max-w-2xl">Sürücü kursumuzda, güvenli ve etkili sürüş tekniklerini öğrenmeniz için en iyi eğitimi sunuyoruz. Amacımız, sizlere hem teorik hem de pratik bilgilerle donatarak trafikte güvenli ve bilinçli bir sürücü olmanızı sağlamaktır.</p>
        <button className="btn btn-primary rounded">Başlayın!</button>
      </div>
    </div>
  </div>
  )
}
