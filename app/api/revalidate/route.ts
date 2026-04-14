import { revalidatePath, revalidateTag } from "next/cache";

function isAuthorized(request: Request) {
  const url = new URL(request.url);
  const headerSecret = request.headers.get("x-revalidate-secret");
  const querySecret = url.searchParams.get("secret");
  const secret = headerSecret ?? querySecret;

  return Boolean(process.env.REVALIDATE_SECRET && secret === process.env.REVALIDATE_SECRET);
}

async function revalidate(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json(
      { message: "Unauthorized revalidation request." },
      { status: 401 },
    );
  }

  const url = new URL(request.url);
  const body =
    request.method === "POST"
      ? await request.json().catch(() => ({}))
      : {};

  const path =
    (typeof body.path === "string" && body.path) ||
    url.searchParams.get("path");
  const tag =
    (typeof body.tag === "string" && body.tag) || url.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag, "max");
  } else {
    revalidateTag("cms", "max");
  }

  if (path) {
    revalidatePath(path);
  }

  return Response.json({
    ok: true,
    path,
    tag: tag ?? "cms",
    revalidatedAt: new Date().toISOString(),
  });
}

export async function GET(request: Request) {
  return revalidate(request);
}

export async function POST(request: Request) {
  return revalidate(request);
}
