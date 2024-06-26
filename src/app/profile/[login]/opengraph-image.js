import { ImageResponse } from "next/og";

const apiUrl = process.env.API_URL;

export const runtime = "edge";
export const contentType = "image/png";

export default async function Image({ params }) {
  const resp = await fetch(`${apiUrl}/users/${params.login}/badge`);
  const data = await resp.text();

  return new ImageResponse(data);
}
