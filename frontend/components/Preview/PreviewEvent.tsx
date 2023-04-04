// ./components/PreviewMovie.tsx

import Link from "next/link";
import { usePreview } from "../../lib/sanity.preview";
import Event from "../Event/Event";

export default function PreviewEvent({ query, queryParams }: { query: string, queryParams: {[key: string]: any} }) {
  const data = usePreview(null, query, queryParams);

  return (
    <>
      <Event event={data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/events/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}