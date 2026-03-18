let userSettings = {
  postsPerPage: 10,
  theme: "light",
};

export async function GET() {
  return Response.json(userSettings);
}

export async function POST(req) {
  const body = await req.json();

  userSettings = {
    ...userSettings,
    ...body,
  };

  return Response.json({ success: true });
}
