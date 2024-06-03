import Link from "next/link";
import { api } from "~/trpc/server";

export default async function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create a new odds alert
        </h1>

        <div className="flex flex-col items-center gap-2"></div>

        <DataShowcase />
      </div>
    </main>
  );
}

async function DataShowcase() {
  return (
    <>
      <ListBooks />
      <ListSports />
    </>
  );
}

async function ListBooks() {
  const data = await api.post.getBooks();

  // const session = await getServerAuthSession();
  // if (!session?.user) return null;

  // const latestPost = await api.post.getLatest();

  return (
    <div className="">
      <h1 style={{ textDecoration: "underline", fontWeight: 600 }}>Books</h1>
      {data ? (
        data.data?.books?.map(({ id, name }) => (
          <p key={id}>
            {name} ({id})
          </p>
        ))
      ) : (
        <p>no data returned.</p>
      )}
    </div>
  );
}
async function ListSports() {
  const data = await api.post.getSports();
  return (
    <div className="">
      <h1 style={{ textDecoration: "underline", fontWeight: 600 }}>Sports</h1>
      {data ? (
        data.data?.sports?.map(({ id, name }) => (
          <div
            key={id}
            className="m-15 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            <Link href={`/dashboard/create-alert/${name}`}>
              {name} ({id})
            </Link>
          </div>
        ))
      ) : (
        <p>no data returned.</p>
      )}
    </div>
  );
}
