"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function page() {
  const { data: session } = useSession();

  const isAdminT = session?.user?.isAdmin;
  console.log(isAdminT);
  if (session?.user?.isAdmin === true) {
    return <p>You are an admin, welcome!</p>;
  }

  return (
    <section className="bg-base-200 min-h-screen flex flex-col items-center">
      <div className="flex flex-row justify-center items-center py-20 gap-10">
        <h1 className="text-5xl text-center font-bold">Admin Dashboard</h1>
        <p className="text-md">
          İsim: <span className="font-bold">{session?.user?.name}</span>
        </p>
        <p className="text-md">
          Email: <span className="font-bold">{session?.user?.email}</span>
        </p>
      </div>
      <div className="max-w-7xl ">
        <h1 className="text-3xl font-bold pb-5">Sürücü Bilgileri</h1>
        <div className="overflow-x-auto pb-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Adı</th>
                <th>Soyadı</th>
                <th>Adresi</th>
                <th>Telefon Numarası</th>
                <th>Ehliyet ID</th>
                <th>Personel ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <td>soy</td>
                <td>addr</td>
                <td>tel</td>
                <td>ders kod</td>
                <td>kurs id</td>
                <th>
                  <button className="btn btn-primary ">Sil</button>
                </th>
              </tr>
              {/* row 2 */}
            </tbody>
          </table>
        </div>
        <div className="max-w-7xl">
        <h1 className="text-3xl font-bold pb-5">Personel Bilgileri</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Adı</th>
                <th>Soyadı</th>
                <th>Adresi</th>
                <th>Telefon Numarası</th>
                <th>Maaşı</th>
                <th>Görevi</th>
                <th>Ders Kod</th>
                <th>Kurs ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </td>
                <td>soy</td>
                <td>addr</td>
                <td>tel</td>
                <td>maaş</td>
                <td>görev</td>
                <td>ders kod</td>
                <td>kurs id</td>
                <th>
                  <button className="btn btn-primary ">Sil</button>
                </th>
              </tr>
              {/* row 2 */}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
}
