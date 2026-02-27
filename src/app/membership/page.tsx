import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership | Post 205 - Janesville, WI",
  description:
    "Join Richard Ellis American Legion Post 205 in Janesville, WI. Learn about eligibility and membership benefits.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-legion-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Membership</h1>
          <p className="text-white/80 mt-2">
            Join our community of veterans
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Eligibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Eligibility
            </h2>
            <p className="text-legion-gray leading-relaxed mb-4">
              Membership in The American Legion is open to all U.S. military
              veterans who served at least one day of active military duty during
              an eligible war era or conflict, and were honorably discharged or
              are still serving.
            </p>
            <div className="bg-legion-light-blue rounded-lg p-6">
              <h3 className="font-bold text-legion-blue mb-3">
                Eligible Service Periods
              </h3>
              <ul className="text-legion-gray text-sm space-y-2">
                <li>&bull; World War II: Dec 7, 1941 &ndash; Dec 31, 1946</li>
                <li>&bull; Korean War: Jun 25, 1950 &ndash; Jan 31, 1955</li>
                <li>&bull; Vietnam Era: Feb 28, 1961 &ndash; May 7, 1975</li>
                <li>&bull; Lebanon/Grenada: Aug 24, 1982 &ndash; Jul 31, 1984</li>
                <li>&bull; Panama: Dec 20, 1989 &ndash; Jan 31, 1990</li>
                <li>
                  &bull; Gulf War/War on Terror: Aug 2, 1990 &ndash; present
                </li>
              </ul>
              <p className="text-legion-gray text-sm mt-4">
                The{" "}
                <a
                  href="https://www.legion.org/membership/eligibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-legion-blue font-semibold hover:underline"
                >
                  LEGION Act (2020)
                </a>{" "}
                expanded eligibility to include additional periods. If
                you&apos;re unsure about your eligibility, contact us &mdash;
                we&apos;re happy to help.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Why Join?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Brotherhood & Fellowship",
                  desc: "Connect with fellow veterans who understand your service and sacrifice.",
                },
                {
                  title: "Community Impact",
                  desc: "Make a difference in Janesville through volunteer programs and community events.",
                },
                {
                  title: "Veterans Advocacy",
                  desc: "Your membership strengthens our collective voice advocating for veterans' rights and benefits.",
                },
                {
                  title: "Programs & Activities",
                  desc: "Participate in Legion Baseball, Boys/Girls State, scholarships, and more.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-legion-light-gray rounded-lg p-5"
                >
                  <h3 className="font-bold text-legion-blue mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-legion-gray text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Family organizations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Legion Family
            </h2>
            <p className="text-legion-gray leading-relaxed mb-4">
              The American Legion Family includes organizations for the whole
              family:
            </p>
            <ul className="text-legion-gray space-y-2">
              <li>
                <strong>American Legion Auxiliary</strong> &mdash; Open to
                eligible family members of veterans
              </li>
              <li>
                <strong>Sons of The American Legion</strong> &mdash; Male
                descendants and stepsons of Legion members
              </li>
              <li>
                <strong>American Legion Riders</strong> &mdash; Members who are
                motorcycle enthusiasts
              </li>
            </ul>
          </div>

          {/* How to join */}
          <div className="bg-legion-blue rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Join?</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Join online through The American Legion&apos;s national website or
              contact us directly. Be sure to select Post 205, Janesville, WI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.legion.org/membership/join"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-legion-red hover:bg-legion-red-dark px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Join Online
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
