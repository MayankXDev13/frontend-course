import Image from "next/image";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/timer", {
    cache: "force-cache",
    next: {
      revalidate: 10, // cache for 10 sec,
      tags: ["timer"]
    }
  });
  const data = await response.json();
  return (
    <div>
      <h1>Nextjs Response default </h1>
      <p>Time: {data.readable}</p>
      <p>Request ID: {data.requestId}</p>
    </div>
  );
}
