import React from "react";

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <div>Page {id}</div>;
}
