// ./components/PreviewEvents.tsx

import Link from "next/link";
import { usePreview } from "../../lib/sanity.preview";
import Events from "../Event/Events";

export default function PreviewEvents({ query }: { query: string }) {
  const data = usePreview(null, query);

  return (
    <>
      <Events events={data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/events/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}