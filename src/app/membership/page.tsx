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

      {/* Member Portal */}
      <section className="bg-legion-light-blue">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center">
          <h2 className="text-xl font-bold text-legion-blue mb-2">
            Current Members
          </h2>
          <p className="text-legion-gray mb-4">
            Access your member portal to manage your account, renew dues, and
            stay connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.mylegion.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-legion-blue hover:bg-legion-blue-dark text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              myLegion.org Member Portal
            </a>
            <a
              href="https://1dwilegion.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-legion-blue hover:bg-legion-blue-dark text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              1st District WI Legion
            </a>
            <a
              href="https://wilegion.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-legion-blue hover:bg-legion-blue-dark text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              WI American Legion
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Eligibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Eligibility
            </h2>
            <div className="bg-legion-light-blue rounded-lg p-6">
              <p className="text-legion-gray leading-relaxed">
                If you have served at least one day of active military duty since
                December 7, 1941 and were honorably discharged, or you are still
                serving active military duty honorably, you are eligible for
                membership with The American Legion.
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
                href="https://www.legion.org/join"
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
