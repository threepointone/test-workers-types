export interface Env {}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    console.log(URL.canParse, Headers.prototype.getSetCookie);
    return new Response("Hello World!");
  },
};
