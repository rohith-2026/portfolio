import { lazy, Suspense } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";
import { SceneFallback } from "./SceneFallback";

const HeroScene = lazy(async () => {
  const module = await import("./HeroScene");
  return { default: module.HeroScene };
});

export function SceneCanvas() {
  const supported = useWebGLSupport();
  const reduced = useReducedMotion();

  return (
    <div className="scene-shell" aria-label="Decorative animated 3D scene">
      {!supported || reduced ? (
        <SceneFallback />
      ) : (
        <Suspense fallback={<SceneFallback />}>
          <HeroScene />
        </Suspense>
      )}
      <div className="scene-caption">
        <span>01</span>
        <span>soft systems / curious mind</span>
      </div>
    </div>
  );
}
