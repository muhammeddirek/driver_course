import React from 'react'
import Image from 'next/image'
import car from "@/public/car.png"
import checklist from "@/public/checklist.png"
import clock from "@/public/clock.png"

export default function Why() {
  return (
    <div className="flex flex-col bg-base-300 items-center gap-10 py-20">
    <h1 className="text-5xl font-bold">Neden Biz?</h1>
        <div className="grid grid-cols-3 gap-4">
      <div className="card card-compact w-96 bg-base-100 shadow-xl gap-10 px-10 py-20">
  <figure><Image src={car} alt="Shoes" width={100} height={100} /></figure>
  <div className="card-body">
    <h2 className="card-title">Deneyimli Eğitmenler</h2>
    <p>Alanında uzman, sabırlı ve deneyimli eğitmenlerimizle birebir eğitim.</p>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl gap-10 px-10 py-20">
  <figure><Image src={checklist} alt="Shoes" width={100} height={100} /></figure>
  <div className="card-body">
    <h2 className="card-title">Modern Araçlar</h2>
    <p>Sürücü adaylarımızın kullanacağı son model, güvenli ve konforlu araçlar.</p>
  </div>
</div>
<div className="card card-compact w-96 bg-base-100 shadow-xl gap-10 px-10 py-20">
  <figure><Image src={clock} alt="Shoes" width={100} height={100} /></figure>
  <div className="card-body px-40">
    <h2 className="card-title">Esnek Ders Saatleri</h2>
    <p>İş veya okul saatlerinize uygun, esnek ders programları.</p>
  </div>
</div>
    </div>
    </div>
  )
}
