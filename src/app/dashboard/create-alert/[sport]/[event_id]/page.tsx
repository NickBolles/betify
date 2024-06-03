import { GetStaticPaths } from "next";
import Link from "next/link";
import { api, apiGenerateStaticParams } from "~/trpc/server";

export default async function CreateAlert({
  params,
}: {
  params: { event_id: string };
}) {
  const { event_id: __event_id } = params;
  const eventId = decodeURIComponent(__event_id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create a new alert for {eventId}
        </h1>

        <div className="flex flex-col items-center gap-2"></div>

        <DataShowcase eventId={eventId} />
      </div>
    </main>
  );
}

async function DataShowcase({ eventId }: { eventId: string }) {
  return (
    <>
      <ListPlayerProps eventId={eventId} />
    </>
  );
}
async function ListPlayerProps({ eventId }: { eventId: string }) {
  const response = await api.post.getPlayerProps({ eventId });
  const data = response.data.sport_event_players_props;
  return (
    <div className="">
      <h1 style={{ textDecoration: "underline", fontWeight: 600 }}>
        Player Props
      </h1>
      {data?.players_props?.length ? (
        data.players_props?.map(({ player, markets }) => (
          <div key={player?.id}>
            <p>{player?.name}</p>
            <ul>
              {markets?.map((market) => (
                <li key={market.id} className="m-4 bg-white/10 p-4">
                  {market.name} - {market.id}
                  <div>
                    {market?.books?.map((books) => (
                      <li key={books.id} className="m-4 bg-white/10 p-4">
                        <p>
                          {books.name} - {books.id}
                        </p>
                        <div>
                          {books?.outcomes?.map((outcome) => (
                            <pre key={outcome.id}>
                              {JSON.stringify(outcome, null, 2)}
                            </pre>
                          ))}
                        </div>
                      </li>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>no data returned.</p>
      )}
    </div>
  );
}
