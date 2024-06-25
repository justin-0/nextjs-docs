export async function GET(request: Request) {
  const phrase = "hello";

  return Response.json(phrase);
}
