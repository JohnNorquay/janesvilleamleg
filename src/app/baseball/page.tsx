import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baseball Schedule | Post 205 - Janesville, WI",
  description:
    "2026 American Legion Post 205 baseball schedule. All home games at the Janesville Sports Complex, Diamond 6.",
};

type Game = {
  date: string;
  opponent: string;
  venue?: string;
  time?: string;
  away: boolean;
  tournament?: boolean;
};

const games: Game[] = [
  { date: "Jun 20", opponent: "Fort Atkinson", venue: "Jones Park", time: "11:00 AM", away: true },
  { date: "Jun 24", opponent: "Beloit", time: "5:00 PM", away: false },
  { date: "Jun 25", opponent: "Genoa City", venue: "Krisik Park", time: "7:00 PM", away: true },
  { date: "Jun 30", opponent: "Orfordville", time: "5:30 PM", away: false },
  { date: "Jul 6", opponent: "Oconomowoc", time: "6:00 PM", away: true },
  { date: "Jul 9–12", opponent: "Verona Tournament", away: true, tournament: true },
  { date: "Jul 14", opponent: "Oconomowoc", time: "5:30 PM", away: false },
  { date: "Jul 15", opponent: "Oregon", time: "5:30 PM", away: false },
  { date: "Jul 16", opponent: "Beloit", away: true },
  { date: "Jul 21", opponent: "Orfordville", time: "5:00 PM", away: true },
  { date: "Jul 23", opponent: "Elkhorn", time: "6:00 PM", away: true },
  { date: "Jul 24–26", opponent: "Janesville Tournament", away: false, tournament: true },
  { date: "Jul 28", opponent: "Elkhorn", time: "5:45 PM", away: false },
];

export default function BaseballPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-legion-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold">Legion Baseball</h1>
          <p className="text-white/80 mt-2">Post 205 &bull; 2026 Season Schedule</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          {/* Schedule list */}
          <ul className="divide-y divide-legion-light-gray border-y border-legion-light-gray">
            {games.map((game, i) => (
              <li
                key={i}
                className="flex items-center gap-3 sm:gap-4 py-4 px-1 sm:px-3 hover:bg-legion-light-blue/40 transition-colors"
              >
                {/* Date */}
                <div className="w-16 sm:w-24 flex-shrink-0 font-bold text-legion-blue text-sm sm:text-base">
                  {game.date}
                </div>

                {/* Matchup */}
                <div className="flex-1 min-w-0">
                  <p className="text-legion-gray font-medium">
                    <span className="text-legion-gray/60">
                      {game.tournament ? "" : game.away ? "@ " : "vs "}
                    </span>
                    {game.opponent}
                  </p>
                  {game.venue && (
                    <p className="text-legion-gray/70 text-sm">{game.venue}</p>
                  )}
                  {game.time && (
                    <p className="text-legion-gray/70 text-sm sm:hidden">
                      {game.time}
                    </p>
                  )}
                </div>

                {/* Time (desktop column) */}
                <div className="w-20 flex-shrink-0 text-right text-legion-gray text-sm hidden sm:block">
                  {game.time ?? ""}
                </div>

                {/* Home/Away pill */}
                <div className="flex-shrink-0">
                  <span
                    className={`inline-block rounded-full px-2.5 sm:px-3 py-1 text-xs font-semibold ${
                      game.away
                        ? "bg-legion-light-gray text-legion-gray"
                        : "bg-legion-blue text-white"
                    }`}
                  >
                    {game.away ? "Away" : "Home"}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Home field note */}
          <div className="bg-legion-light-blue rounded-lg p-6 mt-8">
            <h2 className="font-bold text-legion-blue mb-1">Home Games</h2>
            <p className="text-legion-gray text-sm">
              All home games are held at the{" "}
              <strong>Janesville Sports Complex, Diamond 6</strong>.
            </p>
          </div>

          <p className="text-legion-gray/60 text-xs mt-6">
            Schedule subject to change. Check our{" "}
            <a
              href="https://www.facebook.com/RichardEllispost205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-legion-blue font-semibold hover:underline"
            >
              Facebook page
            </a>{" "}
            for updates.
          </p>
        </div>
      </section>
    </>
  );
}
