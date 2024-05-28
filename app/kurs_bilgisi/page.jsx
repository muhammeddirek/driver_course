import React from 'react';
import tableDatabase from '@/database/tableDataBase.json';

export default function Page() {
  return (
    <section>
      <div className="flex flex-col min-h-screen gap-10 items-center bg-base-200 py-10">
        <h1 className="text-5xl font-bold pt-20">Ehliyet Sınıfları</h1>
        <p className="max-w-3xl text-center text-lg">
          Bu tablo, farklı ehliyet sınıflarının geçerlilik sürelerini göstererek kullanıcıların hangi sınıf ehliyetin ne kadar süreyle geçerli olduğunu kolayca anlayabilmesini sağlar.
        </p>
        <div className="overflow-x-auto bg-base-200 min-w-full px-80">
          <table className="table text-center min-w-max">
            <thead>
              <tr>
                <th>Ehliyet ID</th>
                <th>Ehliyet Sınıfı</th>
                <th>Geçerlilik Süresi</th>
              </tr>
            </thead>
            <tbody>
              {tableDatabase.EhliyetSiniflari.map((item) => (
                <tr key={item.EhliyetID}>
                  <th>{item.EhliyetID}</th>
                  <td>{item.EhliyetSinifi}</td>
                  <td>{item.GecerlilikSuresi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center bg-base-300 py-40">
        <h1 className="text-5xl font-bold pt-10">Dersler</h1>
        <p className="max-w-3xl text-center text-lg">
          Bu tablo, farklı ehliyet sınıflarının geçerlilik sürelerini göstererek kullanıcıların hangi sınıf ehliyetin ne kadar süreyle geçerli olduğunu kolayca anlayabilmesini sağlar.
        </p>
        <div className="overflow-x-auto bg-base-300 min-w-full px-80">
          <table className="table text-center min-w-max">
            <thead>
              <tr>
                <th>Ders Kodu</th>
                <th>Ders Adı</th>
                <th>Ders Günü</th>
              </tr>
            </thead>
            <tbody>
              {tableDatabase.Dersler.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.DersAdi}</td>
                  <td>{item.DersGunu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center bg-base-200 py-40">
        <h1 className="text-5xl font-bold pt-10">Kurs Bilgileri</h1>
        <p className="max-w-3xl text-center text-lg">
          Bu tablo, farklı ehliyet sınıflarının geçerlilik sürelerini göstererek kullanıcıların hangi sınıf ehliyetin ne kadar süreyle geçerli olduğunu kolayca anlayabilmesini sağlar.
        </p>
        <div className="overflow-x-auto bg-base-200 min-w-full px-80">
          <table className="table text-center min-w-max">
            <thead>
              <tr>
                <th>Kurs ID</th>
                <th>Ücret</th>
                <th>Kurs Tel</th>
                <th>Email</th>
                <th>Kurs Adres</th>
              </tr>
            </thead>
            <tbody>
              {tableDatabase.KursBilgileri.map((item) => (
                <tr key={item.KursID}>
                  <th>{item.KursID}</th>
                  <td>{item.Ucret}</td>
                  <td>{item.KursTel}</td>
                  <td>{item.Email}</td>
                  <td>{item.KursAdres}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
