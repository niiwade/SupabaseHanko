"use client"

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const api = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoProfile() {
  useEffect(() => {
    register(api!).catch((error) => {
      // handle error
    });
  }, []);

return <hanko-profile />;
}

