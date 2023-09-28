export const runtime = "edge";

export async function POST() {
    const { Bot } = await import("grammy");
    const bot = new Bot("123");
    console.log(bot);
    return new Response("OK");
}
