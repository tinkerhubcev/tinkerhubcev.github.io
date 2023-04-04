// ./pages/[slug].tsx

import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";

import { client } from "../../lib/sanity.client";
import Event from "../../components/Event/Event";

const PreviewEvent = lazy(() => import("../../components/Preview/PreviewEvent"));
const query = groq`*[_type == "event" && slug.current == $slug][0]{
  title,
  poster,
  description
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "event" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const queryParams = { slug: params?.slug ?? `` };

  if (preview) {
    return { props: { preview, data: { queryParams } } };
  }

  const event = await client.fetch(query, queryParams);

  return {
    props: {
      preview,
      data: {
        event,
        queryParams: {},
      },
    },
  };
};

export default function Page({
  preview,
  data,
}: {
  preview: Boolean;
  data: {
    event: SanityDocument;
    queryParams: {};
  };
}) {
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewEvent query={query} queryParams={data.queryParams} />
    </PreviewSuspense>
  ) : (
    <Event event={data.event} />
  );
}