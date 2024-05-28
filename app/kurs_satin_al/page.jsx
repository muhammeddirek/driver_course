import React from 'react'
import tableDatabase from '@/database/tableDataBase.json';

export default function page() {
  return (
    <section className="min-h-screen items-center flex flex-col bg-base-200 py-20 gap-10">
      <h1 className="text-5xl font-bold">Kurs Seçimi</h1>
      <p className="max-w-4xl text-center">Ehliyet kursu seçimi, sürücü adaylarının başarılı bir sürücü olma yolunda attığı ilk adımdır. Doğru kursu seçmek, eğitim kalitesi, eğitmen deneyimi ve kurs süresi gibi birçok faktörü göz önünde bulundurmayı gerektirir. Bu sayfada, size en uygun ehliyet kursunu seçebilmeniz için gerekli bilgileri ve rehberliği sunuyoruz.</p>
      <div className='min-w-96'>
      <div className="label">
            <span className="label-text">Ehliyet Sınıfını Seçiniz!</span>
          </div>
            <select className="select select-bordered w-full max-w-xl">
        <option disabled selected>Ehliyet Sınıfları</option>
        {tableDatabase.EhliyetSiniflari.map((item) => (
                <option>{item.EhliyetSinifi + " - Sınıfı"}</option>
              ))}
      </select>
      </div>
      <div className='min-w-96'>
      <div className="label">
            <span className="label-text">Plan Seçiniz</span>
          </div>
            <select className="select select-bordered w-full max-w-xl">
        <option disabled selected>Planlar</option>
        {tableDatabase.Ücret.map((item) => (
                <option>{item.Plan}</option>
              ))}
      </select>
      </div>
      <div className="form-control min-w-96">
      <div className="label">
            <span className="label-text font-bold">Dersleri Seçin</span>
          </div>
  {tableDatabase.Dersler.map((item, index) => (
          <label key={index} className="label cursor-pointer">
            <span className="label-text">{item.DersAdi}</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        ))}
</div>
      <button className="btn btn-primary w-96">Satın Al</button>
    </section>
  )
}
