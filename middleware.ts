import { NextResponse, NextRequest } from "next/server";

import { jwtVerify, createRemoteJWKSet } from "jose";

const apiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function middleware(req: NextRequest) {
    const hanko = req.cookies.get("hanko")?.value;

    const JWKS = createRemoteJWKSet(
        new URL(`${apiUrl}/.well-known/jwks.json`)
    );

    try {
        const verifiedJWT = await jwtVerify(hanko ?? "", JWKS);
    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/dashboard"],
};
