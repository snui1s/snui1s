import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 22,
        background: "#ffffff", // white background
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#1a1a1a", // bold black
        fontWeight: 900,
        borderRadius: "50%",
        border: "3px solid #ff3e3e", // thick red border
      }}
    >
      P
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
