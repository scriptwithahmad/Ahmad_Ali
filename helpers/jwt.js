import { jwtVerify, SignJWT } from "jose";

async function GenAccessToken(data) {
  const token = await new SignJWT(data)

    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .setIssuedAt()
    .sign(new TextEncoder().encode(process.env.SECURE_URL));
  return token;
}

async function JWTVerify(token) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECURE_URL)
    );

    return payload.id;
  } catch (error) {
    return false;
  }
}

export { GenAccessToken, JWTVerify };
