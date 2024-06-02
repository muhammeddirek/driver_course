"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [formData, setFormData] = useState({
    PersonelAdi: '',
    PersonelSoyadi: '',
    PersonelTelefonNumarasi: '',
    PersonelAdresi: '',
    PersonelMaasi: '',
    PersonelGorevi: '',
    DersKodu: '',
    KursID: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/add-personel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Personel eklenemedi', await response.json());
    }
  };

  return (
    <section className="min-h-screen items-center flex flex-col bg-base-200 py-20 gap-7">
      <h1 className="text-5xl font-bold">Personel Ekleme</h1>
      <p className="max-w-4xl text-center">
        Personel ekleme işlemi, işletmenizin ihtiyaç duyduğu yetenekli ve uygun adayları eklemek için son derece önemlidir. Aşağıdaki formu eksiksiz ve doğru bir şekilde doldurarak yeni personel ekleyebilirsiniz.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['PersonelAdi', 'PersonelSoyadi', 'PersonelAdresi', 'PersonelMaasi', 'PersonelGorevi', 'PersonelTelefonNumarasi', 'DersKodu', 'KursID'].map((field) => (
          <div key={field} className="min-w-96">
            <div className="label">
              <span className="label-text">{field.replace(/([A-Z])/g, ' $1').trim()}</span>
            </div>
            <input
              type={field === 'PersonelMaasi' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Type here`}
              className="input input-bordered w-full max-w-xl"
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-96">Personel Ekle</button>
      </form>
    </section>
  );
}
