"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const page = searchParams.get("page");

  return (
    <div>
      <h1>Search result for {query}</h1>
      <p>Category: {category}</p>
      <p>Page: {page}</p>
    </div>
  );
}

export default Search;
