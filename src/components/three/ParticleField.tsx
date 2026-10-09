import { useMemo } from "react";

export function ParticleField() { const positions = useMemo(() => { const values = new Float32Array(240 * 3); for (let i = 0; i < 240; i++) { values[i * 3] = (Math.random() - 0.5) * 7; values[i * 3 + 1] = (Math.random() - 0.5) * 5; values[i * 3 + 2] = (Math.random() - 0.5) * 4; } return values; }, []); return <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color="#8d79c5" size={0.025} transparent opacity={0.5} sizeAttenuation /></points>; }
