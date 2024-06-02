import React from "react";

export default function Dashboard() {
  return (
    <section className="bg-base-200 min-h-screen">
      <div className="flex flex-col items-center py-20 gap-10">
        <h1 className="text-5xl text-center font-bold">User Dashboard</h1>
        <p className="text-md">
          İsim: <span className="font-bold">Muhammed</span>
        </p>
        <p className="text-md">
          Email: <span className="font-bold">m@gmail.com</span>
        </p>
        <button className="btn btn-primary">Log Out</button>
      </div>
    </section>
  );
}
