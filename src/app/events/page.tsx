import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Post 205 - Janesville, WI",
  description:
    "View upcoming events and activities at Richard Ellis American Legion Post 205 in Janesville, Wisconsin.",
};

// To set up the Google Calendar:
// 1. Create a Google Calendar for the post (e.g., "Post 205 Events")
// 2. Go to Calendar Settings > Integrate calendar
// 3. Copy the Calendar ID (looks like: abc123@group.calendar.google.com)
// 4. Replace CALENDAR_ID below with the real ID
// 5. Make sure the calendar is set to "Make available to public" in settings

const CALENDAR_ID = "8824f5a888e63390eafe486d5f79e2c426292690f47370abc496cc034671e5c8@group.calendar.google.com";

export default function EventsPage() {
  const calendarSrc = CALENDAR_ID
    ? `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}&ctz=America%2FChicago&showTitle=0&showNav=1&showPrint=0&showCalendars=0&showTz=0&mode=MONTH`
    : "";

  return (
    <>
      {/* Page header */}
      <section className="bg-legion-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Events</h1>
          <p className="text-white/80 mt-2">
            Stay up to date with Post 205 activities
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          {/* Regular meeting reminder */}
          <div className="bg-legion-light-blue rounded-lg p-6 mb-8 border-l-4 border-legion-blue">
            <h2 className="text-lg font-bold text-legion-blue mb-1">
              Monthly Meeting
            </h2>
            <p className="text-legion-gray">
              3rd Monday of each month at 6:30 PM &bull; Zoom option available
            </p>
          </div>

          {/* Google Calendar embed */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-legion-blue mb-4">
              Post 205 Calendar
            </h2>
            {calendarSrc ? (
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={calendarSrc}
                  className="w-full border-0"
                  height="600"
                  title="Post 205 Events Calendar"
                />
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <svg
                  className="w-12 h-12 mx-auto text-legion-gray/40 mb-4"
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
                <p className="text-legion-gray font-medium mb-2">
                  Calendar Coming Soon
                </p>
                <p className="text-legion-gray/60 text-sm max-w-md mx-auto">
                  Our events calendar is being set up. In the meantime, check
                  our{" "}
                  <a
                    href="https://www.facebook.com/RichardEllispost205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-legion-blue hover:underline"
                  >
                    Facebook page
                  </a>{" "}
                  for the latest events and announcements.
                </p>
              </div>
            )}
          </div>

          {/* Info about subscribing */}
          {calendarSrc && (
            <div className="bg-legion-light-gray rounded-lg p-6">
              <h3 className="font-bold text-legion-blue mb-2">
                Add to Your Calendar
              </h3>
              <p className="text-legion-gray text-sm">
                You can subscribe to our calendar in Google Calendar, Apple
                Calendar, or Outlook to stay up to date automatically. Click the{" "}
                <strong>+ Google Calendar</strong> button at the bottom of the
                calendar above.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
