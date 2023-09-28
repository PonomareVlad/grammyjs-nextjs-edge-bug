import { Bot } from "grammy";

export const runtime = "edge";

const bot = new Bot("123");

export function POST() {
  console.log(bot);
  return new Response("OK");
}
