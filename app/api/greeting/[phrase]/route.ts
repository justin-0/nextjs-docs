export async function GET(
  request: Request,
  { params }: { params: { phrase: string } }
) {
  const phrase = params.phrase;

  return Response.json(phrase); // 'a', 'b', or 'c'
}
