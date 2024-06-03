import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import invariant from "tiny-invariant";

import ___sdk from "@api/sportradar-odds";
import { env } from "~/env";

const getSDK = () => {
  ___sdk.auth(env.SPORT_RADAR_API_KEY);
  return ___sdk;
};

const getSportsHelper = async () => {
  const sdk = getSDK();
  return sdk.ocPlayerPropsSports({
    access_level: "trial",
    language_code: "en",
    odds_format: "us",
    format: "json",
  });
};

const getSportIDHelper = async (sportName: string, sportId?: string) => {
  // If we didn't pass an ID, but we passed a name, get the ID from the name
  // todo: cache this?
  if (!sportId) {
    const response = await getSportsHelper();
    const foundSport = response.data.sports?.find(
      (sport) => sport.name === sportName,
    );
    sportId = foundSport?.id;
  }
  invariant(sportId, "sportId not found");
  return sportId;
};

export const postRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     await ctx.db.insert(posts).values({
  //       name: input.name,
  //       createdById: ctx.session.user.id,
  //     });
  //   }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.query.posts.findFirst({
  //     orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  //   });
  // }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
  getBooks: protectedProcedure
    // .input(z.object({ name: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      return getSDK().ocPlayerPropsBooks({
        access_level: "trial",
        language_code: "en",
        format: "json",
      });
    }),
  getSchedule: protectedProcedure
    .input(
      z.object({
        sportName: z.string(),
        sportId: z.string().optional(),
        date: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      // todays date in yyyy-mm-dd format
      const dateInput = input.date;
      const date = (dateInput == undefined ? new Date() : new Date(dateInput))
        .toISOString()
        .split("T")[0];
      invariant(date, "date is not defined");

      const sportId = await getSportIDHelper(input.sportName, input.sportId);

      const result = await getSDK().ocPlayerPropsDailySchedules({
        access_level: "trial",
        language_code: "en",
        format: "json",
        date,
        sport_id: sportId,
      });
      console.log("Get Schedule", JSON.stringify(result.data, null, 2));
      return result;
    }),
  getSports: protectedProcedure.query(async ({ ctx, input }) => {
    // todays date in yyyy-mm-dd format
    return getSportsHelper();
  }),
  getPlayerProps: protectedProcedure
    .input(z.object({ eventId: z.string() }))
    .query(async ({ ctx, input }) => {
      const result = await getSDK().ocPlayerPropsSportEventPlayerProps({
        access_level: "trial",
        language_code: "en",
        sport_event_id: input.eventId,
        format: "json",
      });
      console.log("Get Player Props", JSON.stringify(result.data, null, 2));
      return result;
    }),
});
