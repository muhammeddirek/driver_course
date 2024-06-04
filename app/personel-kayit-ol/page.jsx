"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [dersKod, setDerskod] = useState("");
  const [kursID, setKursID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !surName ||
      !address ||
      !salary ||
      !job ||
      !phone ||
      !dersKod ||
      !kursID ||
      !email ||
      !password
    ) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch("api/personelRegister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surName,
          address,
          salary,
          job,
          phone,
          dersKod,
          kursID,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed. ", res.ok);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center  bg-base-200 gap-10 py-20 ">
      <div className="items-center flex flex-col gap-20">
        <h1 className="text-5xl font-bold">Personel Kayıt Ol</h1>
        <div className="min-w-96 flex flex-col gap-7">
          <form
            onSubmit={handleSubmit}
            className="min-w-96 flex flex-col gap-7"
          >
            <div className="flex flex-row gap-3 items-center justify-center">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Ad"
              />
            </label><label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                className="grow"
                placeholder="Soyad"
              />
            </label>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="grow"
                placeholder="Adress"
              />
            </label><label className="input input-bordered flex items-center gap-2 w-full">
              <input
                onChange={(e) => setSalary(e.target.value)}
                type="text"
                className="grow"
                placeholder="Maaş"
              />
            </label>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                onChange={(e) => setJob(e.target.value)}
                type="text"
                className="grow"
                placeholder="İş"
              />
            </label><label className="input input-bordered flex items-center gap-2 w-full">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="grow"
                placeholder="Telefon No"
              />
            </label>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center ">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                onChange={(e) => setDerskod(e.target.value)}
                type="text"
                className="grow"
                placeholder="Ders Kodu"
              />
            </label><label className="input input-bordered flex items-center gap-2 w-full">
              <input
                onChange={(e) => setKursID(e.target.value)}
                type="text"
                className="grow"
                placeholder="Kurs ID"
              />
            </label>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="grow"
                placeholder="Parola"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Kayıt Ol
            </button>
            {error && (
              <div className="bg-red-500 text-sm font-bold w-fit px-1.5 py-2 rounded">
                {error}
              </div>
            )}
            <div className="flex justify-center items-center w-full">
              Hesabınız var mı?{" "}
              <Link className="btn btn-link" href="/login">
                {" "}
                Giriş Yap!{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
