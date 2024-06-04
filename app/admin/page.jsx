"use client"
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function page() {
  const { data: session } = useSession();

  const isAdminT = session?.user?.isAdmin
  console.log(isAdminT)
  if (session?.user?.isAdmin === true) {
    return <p>You are an admin, welcome!</p>;
  }

  return (
    <section className="bg-base-200 min-h-screen">
      <div className="flex flex-col items-center py-20 gap-10">
        <h1 className="text-5xl text-center font-bold">User Dashboard</h1>
        <p className="text-md">
          İsim: <span className="font-bold">{session?.user?.name}</span>
        </p>
        <p className="text-md">
          Email: <span className="font-bold">{session?.user?.email}</span>
        </p>
      </div>
    </section>
  );
}
