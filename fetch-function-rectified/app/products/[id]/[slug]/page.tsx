"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function ProductIdSlugPage() {
  const params: { id: string; slug: string } = useParams();

  return (
    <div>
      <h1>Params</h1>
      <p>ID: {params.id}</p>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
