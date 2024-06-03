"use client";

import Link from "next/link";
import { api } from "~/trpc/react";
import type { api as serverAPI } from "~/trpc/server";

type RequestType = NonNullable<
  Awaited<ReturnType<typeof serverAPI.post.getSchedule>>["data"]
>;
type ScheduleDataType = NonNullable<RequestType["schedules"]>;
type SportEventType = NonNullable<ScheduleDataType[0]["sport_event"]>;
type CompetitorType = NonNullable<SportEventType["competitors"]>[number];

const formatCompetitor = (competitor: CompetitorType) => {
  // id?: string | undefined;
  // name?: string | undefined;
  // abbreviation?: string | undefined;
  // age_group?: string | undefined;
  // country?: string | undefined;
  // country_code?: string | undefined;
  // gender?: string | undefined;
  // qualifier?: string | undefined;
  // rotation_number?: number | undefined;
  // virtual?: boolean | undefined;
  return `${competitor.name} (${competitor.id})`;
};

export function ListSchedule({
  sport,
  date,
}: {
  sport: string;
  date?: string;
}) {
  const [response, scheduleQuery] = api.post.getSchedule.useSuspenseQuery({
    sportName: sport,
    date: date,
  });
  const { isFetching } = scheduleQuery;

  if (isFetching) {
    return <p>Loading...</p>;
  }

  const data = response.data.schedules;
  return (
    <div className="">
      <h1 style={{ textDecoration: "underline", fontWeight: 600 }}>Sports</h1>
      {data?.length ? (
        data.map(({ sport_event }) => (
          <Link
            href={`/dashboard/create-alert/${sport}/${sport_event?.id}`}
            key={sport_event?.id}
            className="m-15 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            <h3>
              {sport_event?.competitors?.map(formatCompetitor)?.join(" vs ") ??
                "unknown"}
            </h3>
            <p>Start Time: {sport_event?.start_time}</p>
          </Link>
        ))
      ) : (
        <p>no data returned.</p>
      )}
    </div>
  );
}
