"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from 'axios';

export default function Dashboard() {
  const { data: session } = useSession();
  const [drivers, setDrivers] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        const users = response.data;
        const drivers = users.filter(user => !user.dersKod && !user.kursID);
        const staff = users.filter(user => user.dersKod && user.kursID);
        setDrivers(drivers);
        setStaff(staff);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete('/api/users', { data: { id } })
      .then(() => {
        setDrivers(drivers.filter(driver => driver._id !== id));
        setStaff(staff.filter(member => member._id !== id));
      })
      .catch(error => console.error(error));
  };

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
              {drivers.map(driver => (
                <tr key={driver._id}>
                  <td>{driver.name}</td>
                  <td>{driver.surName}</td>
                  <td>{driver.address}</td>
                  <td>{driver.phone}</td>
                  <td>{driver.ehliyetID}</td>
                  <td>{driver.personelID}</td>
                  <td>
                    <button onClick={() => handleDelete(driver._id)} className="btn btn-primary">
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-7xl">
          <h1 className="text-3xl font-bold pb-5">Personel Bilgileri</h1>
          <div className="overflow-x-auto">
            <table className="table">
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
                {staff.map(member => (
                  <tr key={member._id}>
                    <td>{member.name}</td>
                    <td>{member.surName}</td>
                    <td>{member.address}</td>
                    <td>{member.phone}</td>
                    <td>{member.salary}</td>
                    <td>{member.job}</td>
                    <td>{member.dersKod}</td>
                    <td>{member.kursID}</td>
                    <td>
                      <button onClick={() => handleDelete(member._id)} className="btn btn-primary">
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
