import { match } from "assert";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/", req.url));
  // return NextResponse.next();
}

export const config = {
  matcher: "/product",
};
