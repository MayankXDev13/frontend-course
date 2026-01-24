import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <Image src={"/not-found.svg"} alt="Not Found" height={400} width={400} />

      <Link href={"/"}> Back to Home</Link>

    </div>
  );
}

export default NotFoundPage;
