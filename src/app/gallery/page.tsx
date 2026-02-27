import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Post 205 - Janesville, WI",
  description:
    "Photos from Richard Ellis American Legion Post 205 events and activities in Janesville, Wisconsin.",
};

const photos = [
  {
    src: "/images/gallery/533014431_789447486989341_2886521009776553703_n.jpg",
    alt: "American Legion Post 205 tent at community event",
    caption: "Community Outreach",
  },
  {
    src: "/images/gallery/532817134_789447483656008_6220823789795315520_n.jpg",
    alt: "Post 205 booth with American Legion banner and feather flag",
    caption: "Post 205 at Festival",
  },
  {
    src: "/images/gallery/516997542_760880106512746_3731886970917709380_n.jpg",
    alt: "Raffle flyer - Henry Commemorative .22cal Golden Boy",
    caption: "Fundraiser Raffle",
  },
  {
    src: "/images/gallery/482026281_666939185906839_2253542143253911256_n.jpg",
    alt: "Post 205 booth with American Legion table cloth and KIA Memorial fundraiser sign",
    caption: "KIA Memorial Fundraiser",
  },
  {
    src: "/images/gallery/481786141_666939199240171_6565079591916978145_n.jpg",
    alt: "Post 205 booth with KIA Memorial Fund Raiser sign by the river",
    caption: "KIA Memorial Fundraiser",
  },
  {
    src: "/images/gallery/481774873_666939189240172_744494332136997840_n.jpg",
    alt: "Post 205 tent setup at community event with American Legion emblem banner",
    caption: "Community Event Booth",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-legion-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
          <p className="text-white/80 mt-2">
            Post 205 in action around Janesville
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-3 bg-white">
                  <p className="text-sm font-medium text-legion-blue">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-legion-gray mb-4">
              Follow us on Facebook for more photos and updates
            </p>
            <a
              href="https://www.facebook.com/RichardEllispost205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-legion-blue hover:bg-legion-blue-dark text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Visit Our Facebook Page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
