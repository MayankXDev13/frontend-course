import Link from "next/link";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="">
      <h1>Dashboard</h1>
      <Link href={`/dashboard/reports`}>View Reports</Link>
      <Link href={`/dashboard/users`}>View Users</Link>
      <Link href={`/dashboard/settings`}>View Settings</Link>   
      <Link href={`/profile`}>View Profile</Link>
      <Link href={`/dashboard/section`}>View Section</Link>
    </div>
  );
}
