"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { ListSchedule } from "~/app/_components/ListSchedule";

export default function CreateAlert({ params }: { params: { sport: string } }) {
  const { sport: __sport } = params;
  const sport = decodeURIComponent(__sport);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const dateParam = searchParams.get("date") as string | undefined;
  const date = (dateParam ? new Date(dateParam) : new Date())
    .toISOString()
    .split("T")[0];

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create a new alert for {sport}
        </h1>

        <div className="flex flex-col items-center gap-2"></div>
        <input
          type="date"
          value={date}
          onChange={(e) =>
            router.push(
              pathname + "?" + createQueryString("date", e.target.value),
            )
          }
        />

        <ListSchedule sport={sport} date={date} />
      </div>
    </main>
  );
}

// import sdk from "@api/sportradar-odds";
// import { env } from "~/env";

// /**
//  * Dynamically generate possible values for `sport` at build time
//  *
//  * [Docs](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params)
//  * @returns
//  */
// export async function generateStaticParams() {
//   // sdk.auth(env.SPORT_RADAR_API_KEY);
//   // const sports = await sdk.ocPlayerPropsSports({
//   //   access_level: "trial",
//   //   language_code: "en",
//   //   odds_format: "us",
//   //   format: "json",
//   // });
//   const sports = await apiGenerateStaticParams.post.getSports();

//   return (
//     sports.data?.sports?.map(({ name }) => ({
//       slug: name,
//     })) ?? []
//   );
// }
