import React from 'react'

export default function FAQ() {
  return (
    <div className="flex flex-col p-20 bg-base-300">
        <h1 className="text-5xl font-bold pb-10">Sıkça Sorulan Sorular (SSS)</h1>
            <div className="collapse collapse-plus rounded bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">
        Kursa nasıl kayıt olabilirim?
        </div>
        <div className="collapse-content"> 
            <p>Kursa kayıt olmak için internet sitemizdeki kayıt formunu doldurabilir veya doğrudan ofisimize gelerek kayıt işleminizi tamamlayabilirsiniz. Ayrıca telefonla da ön kayıt yaptırabilirsiniz.</p>
        </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
        Sürücü kursuna katılmak için gereken belgeler nelerdir?
        </div>
        <div className="collapse-content"> 
        <p>Kursa kayıt için gereken belgeler şunlardır:</p> 
        <br/>
            <ul>
                <li>- Kimlik fotokopisi</li>
                <li>- İkametgah belgesi</li>
                <li>- Sağlık raporu</li>
                <li>- 4 adet biyometrik fotoğraf</li>
            </ul>
        </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
        Teorik ve pratik dersler ne kadar sürüyor?
        </div>
        <div className="collapse-content"> 
            <p>Teorik dersler genellikle 2 hafta sürmektedir ve bu süre zarfında trafik kuralları, işaretler ve ilk yardım bilgileri verilir. Pratik dersler ise toplamda 14 saat olarak planlanmıştır ve bu süreyi öğrencinin ihtiyacına göre ayarlayabiliyoruz.</p>
        </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
        Ders saatleri nasıl belirleniyor?
        </div>
        <div className="collapse-content"> 
            <p>Ders saatleri, öğrencinin uygunluk durumuna göre esnek bir şekilde belirlenir. İş veya okul saatlerinize uygun zaman dilimleri ayarlayarak size en uygun programı oluşturuyoruz.</p>
        </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
        Eğitmenlerinizin deneyim düzeyi nedir?
        </div>
        <div className="collapse-content"> 
            <p>Eğitmenlerimiz alanında uzman, sabırlı ve deneyimli profesyonellerdir. Her biri uzun yıllar sürüş eğitimi vermiş olup, sizlere en iyi eğitimi sunmayı amaçlamaktadır.</p>
        </div>
        </div>
    </div>
  )
}
