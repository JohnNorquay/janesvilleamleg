import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Post 205 - Janesville, WI",
  description:
    "Learn about Richard Ellis American Legion Post 205, chartered in 1946 and named for the first Janesville casualty of World War I.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-legion-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">About Post 205</h1>
          <p className="text-white/80 mt-2">
            Our history, our mission, our community
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Richard Ellis tribute */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Our Namesake: Richard Ellis
            </h2>
            <div className="bg-legion-light-blue rounded-lg p-6 border-l-4 border-legion-blue">
              <p className="text-legion-gray leading-relaxed mb-4">
                Richard Ellis American Legion Post 205 is named in honor of{" "}
                <strong>Richard Ellis</strong> of Company D, 28th Infantry
                Division &mdash; the first Janesville casualty of World War I.
              </p>
              <p className="text-legion-gray leading-relaxed mb-4">
                Richard Ellis made the ultimate sacrifice on{" "}
                <strong>May 15, 1918</strong> at the Battle of Cantigny, France.
                His courage and service represent the ideals that our post was
                founded upon and continues to uphold.
              </p>
              <p className="text-legion-gray leading-relaxed">
                We carry his name as a reminder of the cost of freedom and our
                duty to serve those who have served.
              </p>
            </div>
          </div>

          {/* Post history */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Our History
            </h2>
            <p className="text-legion-gray leading-relaxed mb-4">
              Post 205 was chartered in <strong>1946</strong> with 89 members,
              making it the fourth and largest American Legion post in Rock
              County at the time. For nearly 80 years, we have been a
              cornerstone of the Janesville veteran community.
            </p>
            <p className="text-legion-gray leading-relaxed mb-4">
              As part of Wisconsin&apos;s 1st District, Post 205 carries on the
              traditions of The American Legion &mdash; serving veterans,
              strengthening our community, and honoring those who have served.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Our Mission
            </h2>
            <p className="text-legion-gray leading-relaxed mb-6">
              The American Legion was chartered by Congress in 1919 as a
              patriotic veterans organization. Focusing on service to veterans,
              servicemembers, and communities, the Legion evolved from a group of
              war-weary volunteers of World War I into one of the most
              influential nonprofit groups in the United States.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Veterans Affairs & Rehabilitation",
                  desc: "Advocating for veterans' benefits and supporting those in need",
                },
                {
                  title: "National Security",
                  desc: "Promoting a strong national defense and supporting our military",
                },
                {
                  title: "Americanism",
                  desc: "Fostering patriotism and responsible citizenship",
                },
                {
                  title: "Children & Youth",
                  desc: "Programs like Boys State, scholarships, and scouting support",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-legion-light-gray rounded-lg p-4"
                >
                  <h3 className="font-bold text-legion-blue text-sm mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-legion-gray text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meetings */}
          <div>
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Meetings
            </h2>
            <div className="bg-legion-light-blue rounded-lg p-6">
              <p className="text-legion-gray leading-relaxed">
                Post 205 meets on the <strong>2nd Tuesday of each month</strong>{" "}
                at <strong>6:15 PM</strong>. A Zoom option is available for
                members who cannot attend in person. Check our{" "}
                <a
                  href="/events"
                  className="text-legion-blue font-semibold hover:underline"
                >
                  Events page
                </a>{" "}
                for details and any schedule changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
