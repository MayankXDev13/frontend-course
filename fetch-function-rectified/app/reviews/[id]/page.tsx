import { notFound } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (parseInt(id) > 10) {
    return notFound()
  }
  return <div>Review {id}</div>;
}
