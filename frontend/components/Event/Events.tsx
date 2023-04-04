import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity.client";

const builder = imageUrlBuilder(client);

export default function Events({ events }: { events: SanityDocument[] }) {
  return (
    <>
      <Head>
        <title>{events.length} Events</title>
      </Head>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Link
            key={event._id}
            href={`events/${event.slug.current}`}
            className="bg-white shadow-sm hover:shadow-md rounded-md overflow-hidden"
          >
            <div className="bg-gray-100 h-48">
              {/* use your favorite image component to display the event image */}
              <Image
                className="w-full h-full object-cover"
                src={builder.image(event.poster).url()}
                width={300}
                height={300}
                alt={event.title}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-700">{event.description}</p>
              <p className="text-sm font-medium text-gray-500 mt-2">
                {new Date(event.dateAndTime.startDateTime).toLocaleString(
                  "en-US",
                  {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }
                )}
              </p>
            </div>
          </Link>
        ))}
        </div>
      </main>
    </>
  );
}
