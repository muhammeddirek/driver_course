"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Dashboard() {
  const { data: session } = useSession();
  const [kurs, setKurs] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      axios.get(`/api/user-courses?email=${session.user.email}`)
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => console.error(error));
    }
  }, [session?.user?.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = session?.user?.name;
    const email = session?.user?.email;

    try {
      const res = await fetch("api/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kursAdi: kurs,
          name,
          email
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        // Yeni kursu state'e ekleyin
        const newCourse = await res.json();
        setCourses([...courses, newCourse]);
      } else {
        console.log("Kurs satın alma başarısız.", res.ok);
      }
    } catch (error) {
      console.log("Hata oluştu: ", error);
    }
  };

  return (
    <section className="bg-base-200 min-h-screen">
      <div className="flex flex-row p-8 justify-center items-center py-20 gap-10">
        <h1 className="text-5xl text-center font-bold">User Dashboard</h1>
        <p className="text-md">
          İsim: <span className="font-bold">{session?.user?.name}</span>
        </p>
        <p className="text-md">
          Email: <span className="font-bold">{session?.user?.email}</span>
        </p>
        <button onClick={() => signOut()} className="btn btn-primary">
          Log Out
        </button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-5xl font-bold pb-10">Kurs Satın Al</h1>
        <div className="flex flex-row gap-5">
          <p className="font-bold">Trafik Eğitimi Kursu</p>
          <p className="font-normal text-base-content/80">10 Hafta</p>
          <p className="font-extrabold text-success">10.000 TL</p>
        </div>
        <div className="flex flex-row gap-5">
          <p className="font-bold">Sürüş Eğitimi Kursu</p>
          <p className="font-normal text-base-content/80">10 Hafta</p>
          <p className="font-extrabold text-success">20.000 TL</p>
        </div>
        <div className="flex flex-row gap-5">
          <p className="font-bold">İleri Sürüş Eğitimi Kursu</p>
          <p className="font-normal text-base-content/80">10 Hafta</p>
          <p className="font-extrabold text-success">50.000 TL</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex border border-secondary rounded"
        >
          <input
            type="text"
            placeholder="Kurs Adını Yazınız"
            onChange={(e) => setKurs(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Satın Al!
          </button>
        </form>
        <div className="mt-10 flex flex-col items-center py-10 max-w-7xl ">
          <h1 className="text-3xl font-bold pb-5">Satın Alınan Kurslar</h1>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Kurs Adı</th>
                  <th>Satın Alınan Tarih</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course._id}>
                    <td>{course.kursAdi}</td>
                    <td>{new Date(course.createdAt).toLocaleDateString()}</td>
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
