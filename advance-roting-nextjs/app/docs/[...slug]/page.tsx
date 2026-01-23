import React from "react";

type PageProps = {
  params: {
    slug: string[];
  };
};

async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <div>{slug.join("/")}</div>;
}

export default Page;
