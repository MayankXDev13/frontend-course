import Link from "next/link";
import React from "react";

function SectionPage() {
  return (
    <div>
      <h1>Section</h1>
      <Link href={"/admin"}>Go to Admin</Link>
    </div>
  );
}

export default SectionPage;
