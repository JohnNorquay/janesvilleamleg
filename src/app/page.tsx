import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-legion-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <Image
            src="/images/legion-emblem.png"
            alt="American Legion Emblem"
            width={100}
            height={100}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Richard Ellis American Legion
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-2">Post 205</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Serving the veterans and community of Janesville, Wisconsin since
            1946
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-legion-red hover:bg-legion-red-dark px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/events"
              className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Meeting info cards */}
      <section className="bg-legion-light-blue">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <svg
                className="w-10 h-10 mx-auto text-legion-blue mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-bold text-legion-blue mb-2">
                Monthly Meetings
              </h3>
              <p className="text-legion-gray text-sm">
                3rd Monday of each month
                <br />
                6:30 PM &bull; Zoom available
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <svg
                className="w-10 h-10 mx-auto text-legion-blue mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-lg font-bold text-legion-blue mb-2">
                Find Us
              </h3>
              <p className="text-legion-gray text-sm">
                1015 Center Ave
                <br />
                Janesville, WI 53546
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <svg
                className="w-10 h-10 mx-auto text-legion-blue mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-lg font-bold text-legion-blue mb-2">
                Join Our Post
              </h3>
              <p className="text-legion-gray text-sm">
                Open to all eligible veterans
                <br />
                and their families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-legion-blue mb-6">
              About Post 205
            </h2>
            <p className="text-legion-gray leading-relaxed mb-4">
              Richard Ellis American Legion Post 205 was chartered in 1946 and
              is named in honor of Richard Ellis of Company D, 28th Infantry
              Division &mdash; the first Janesville casualty of World War I, who
              gave his life on May 15, 1918 at the Battle of Cantigny, France.
            </p>
            <p className="text-legion-gray leading-relaxed mb-8">
              As part of Wisconsin&apos;s 1st District, Post 205 continues to
              serve the veterans and community of Janesville through advocacy,
              programs, and fellowship.
            </p>
            <Link
              href="/about"
              className="text-legion-blue font-semibold hover:text-legion-blue-light transition-colors"
            >
              Learn more about our history &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Be The One CTA */}
      <section className="bg-legion-light-gray">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-legion-blue mb-4">
            Be The One
          </h2>
          <p className="text-legion-gray max-w-2xl mx-auto mb-8">
            The American Legion&apos;s{" "}
            <strong>Be The One</strong> initiative encourages everyone to act to
            help prevent veteran suicide. Be the one to ask. Be the one to
            listen. Be the one to reach out.
          </p>
          <a
            href="https://www.legion.org/betheone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-legion-red hover:bg-legion-red-dark text-white px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Learn About Be The One
          </a>
        </div>
      </section>
    </>
  );
}
