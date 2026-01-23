import React from "react";

type PageProps = {
  params: { id: string; reviewid: string };
};

async function Page({ params }: PageProps) {
    const { id, reviewid } = await params;
  return <div>Page {id} {reviewid}</div>;
}

export default Page;
