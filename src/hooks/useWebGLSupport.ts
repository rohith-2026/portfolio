import { useEffect, useState } from "react";

export function useWebGLSupport() {
  const [supported, setSupported] = useState(true);
  useEffect(() => { try { const canvas = document.createElement("canvas"); setSupported(Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))); } catch { setSupported(false); } }, []);
  return supported;
}
