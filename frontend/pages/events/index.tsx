// ./pages/index.tsx

import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../lib/sanity.client";
import Events from "../../components/Event/Events";
import { PreviewSuspense } from "next-sanity/preview";

const PreviewEvents = lazy(() => import("../../components/Preview/PreviewEvents"));
const query = groq`*[_type == "event" && defined(slug.current)]{
  _id,
  title, 
  slug,
  poster,
  dateAndTime,
}`;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};

export default function Home({
  preview,
  data,
}: {
  preview: Boolean;
  data: SanityDocument[];
}) {
  // PreviewSuspense shows while data is being fetched
  // The fetch happens inside PreviewEvents
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewEvents query={query} />
    </PreviewSuspense>
  ) : (
    <Events events={data} />
  );
}
