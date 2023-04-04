// ./components/Movie.tsx

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { client } from "../../lib/sanity.client";
import Head from "next/head";
// import {getImageDimensions} from '@sanity/asset-utils'

const builder = imageUrlBuilder(client);

export default function event({ event }: { event: SanityDocument }) {
  return (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <main className="prose  prose-lg container mx-auto p-4">
        <h1>{event.title}</h1>
        <Image
          className="float-left m-0 mr-4 w-1/3 rounded-lg"
          src={builder.image(event.poster).width(300).height(300).url()}
          width={300}
          height={300}
          alt={event.title}
        />
        <PortableText value={event.description} />
      </main>
    </>
  );
}
