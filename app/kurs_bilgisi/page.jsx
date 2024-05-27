import React from 'react'

export default function page() {
  return (
    <section>
    <div className="flex flex-col min-h-screen gap-10 items-center bg-base-200 py-10 ">
    <h1 className="text-5xl font-bold pt-20">Ehliyet Sınıfları</h1>
    <p className="max-w-3xl text-center text-lg">Bu tablo, farklı ehliyet sınıflarının geçerlilik sürelerini göstererek kullanıcıların hangi sınıf ehliyetin ne kadar süreyle geçerli olduğunu kolayca anlayabilmesini sağlar.</p>
      <div className="overflow-x-auto bg-base-200 min-w-full px-80">
            <table className="table text-center min-w-max">
                {/* head */}
                <thead>
                <tr>
                    <th>Ehliyet ID</th>
                    <th>Ehliyet Sınıfı</th>
                    <th>Geçerlilik Süresi</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>17428</th>
                    <td>A1</td>
                    <td>10 Yıl</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>22314</th>
                    <td>A2</td>
                    <td>10 Yıl</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>35213</th>
                    <td>A</td>
                    <td>10 Yıl</td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>49832</th>
                    <td>B1</td>
                    <td>10 Yıl</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>56521</th>
                    <td>B</td>
                    <td>10 Yıl</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>67382</th>
                    <td>BE</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>75812</th>
                    <td>C1</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>10315</th>
                    <td>C1E</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>15251</th>
                    <td>C</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>18382</th>
                    <td>CE</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>13153</th>
                    <td>D1</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>98714</th>
                    <td>D1E</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>32415</th>
                    <td>D</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>57816</th>
                    <td>DE</td>
                    <td>5 Yıl</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>32515</th>
                    <td>F</td>
                    <td>10 Yıl</td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>87216</th>
                    <td>G</td>
                    <td>10 Yıl</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>52117</th>
                    <td>M</td>
                    <td>10 Yıl</td>
                </tr>
                </tbody>
            </table>
            </div>
    </div>
    <div className="flex flex-col gap-10 items-center bg-base-300 py-40 ">
    <h1 className="text-5xl font-bold pt-10">Dersler</h1>
    <p className="max-w-3xl text-center text-lg">Bu tablo, farklı ehliyet sınıflarının geçerlilik sürelerini göstererek kullanıcıların hangi sınıf ehliyetin ne kadar süreyle geçerli olduğunu kolayca anlayabilmesini sağlar.</p>
      <div className="overflow-x-auto bg-base-300 min-w-full px-80">
            <table className="table text-center min-w-max">
                {/* head */}
                <thead>
                <tr>
                    <th>Ders Kodu</th>
                    <th>Ders Adı</th>
                    <th>Ders Günü</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>174</th>
                    <td>Trafik Kuralları</td>
                    <td>Perşembe</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>223</th>
                    <td>İlk Yardım</td>
                    <td>Cuma</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>353</th>
                    <td>Motor ve Araç Tekniği</td>
                    <td>Pazartesi</td>
                </tr>
                {/* row 1 */}
                <tr>
                    <th>498</th>
                    <td>Güvenli Sürüş Teknikleri</td>
                    <td>Çarşamba</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                    <th>565</th>
                    <td>Direksiyon Eğitimi</td>
                    <td>Salı</td>
                </tr>
                </tbody>
            </table>
            </div>
    </div>
    <div className="flex flex-col gap-10 items-center bg-base-200 py-40 ">
    <h1 className="text-5xl font-bold pt-10">Kurs Bilgileri</h1>
    <p className="max-w-3xl text-center text-lg">Bu tablo, farklı ehliyet sınıflarının geçerlilik sürelerini göstererek kullanıcıların hangi sınıf ehliyetin ne kadar süreyle geçerli olduğunu kolayca anlayabilmesini sağlar.</p>
      <div className="overflow-x-auto bg-base-200 min-w-full px-80">
            <table className="table text-center min-w-max">
                {/* head */}
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
                {/* row 1 */}
                <tr>
                    <th>17823</th>
                    <td>20.000 TL</td>
                    <td>0850 231 45 21</td>
                    <td>info@driver.com</td>
                    <td>Elazığ / Merkez Palu</td>
                </tr>
                </tbody>
            </table>
            </div>
    </div>
    </section>
  );
}
