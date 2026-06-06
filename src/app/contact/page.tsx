import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Post 205 - Janesville, WI",
  description:
    "Get in touch with Richard Ellis American Legion Post 205 in Janesville, Wisconsin.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-legion-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-white/80 mt-2">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-legion-blue mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-legion-blue mb-1">Address</h3>
                  <p className="text-legion-gray">
                    VFW Post 1621
                    <br />
                    1015 Center Ave
                    <br />
                    Janesville, WI 53546
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-legion-blue mb-1">Email</h3>
                  <a
                    href="mailto:richardellis.post205@gmail.com"
                    className="text-legion-blue hover:underline"
                  >
                    richardellis.post205@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-legion-blue mb-1">Facebook</h3>
                  <a
                    href="https://www.facebook.com/RichardEllispost205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-legion-blue hover:underline"
                  >
                    facebook.com/RichardEllispost205
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-legion-blue mb-1">Meetings</h3>
                  <p className="text-legion-gray">
                    3rd Monday of each month at 6:30 PM
                    <br />
                    Zoom option available for members
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-legion-light-blue rounded-lg p-6">
                <h3 className="font-bold text-legion-blue mb-2">
                  Interested in Joining?
                </h3>
                <p className="text-legion-gray text-sm">
                  Visit our{" "}
                  <a
                    href="/membership"
                    className="text-legion-blue font-semibold hover:underline"
                  >
                    Membership page
                  </a>{" "}
                  for eligibility information and how to become a member of Post
                  205.
                </p>
              </div>
            </div>

            {/* Map */}
            <div id="find-us" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-legion-blue mb-6">
                Find Us
              </h2>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=1015%20Center%20Ave%2C%20Janesville%2C%20WI%2053546&z=15&output=embed"
                  className="w-full border-0"
                  height="400"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Post 205 Location — 1015 Center Ave, Janesville, WI"
                />
              </div>
              <p className="text-legion-gray text-sm mt-3">
                1015 Center Ave, Janesville, WI 53546
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
