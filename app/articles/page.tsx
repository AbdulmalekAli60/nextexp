import React from "react";
import Link from "next/link";
import { title } from "process";

// export const metadata = {
//     title:"artilces page"
// }

export default function ArticlesPage() {
  return (
    <div>
      articles
      <Link href="/posts">
        <button>Take Me to post page</button>
      </Link>
      <Link href="/articles/featuredArtilces">
        <button>Take Me to fetured</button>
      </Link>
    </div>
  );
}
