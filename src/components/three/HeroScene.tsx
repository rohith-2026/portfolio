import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { FloatingGeometry } from "./FloatingGeometry";
import { ParticleField } from "./ParticleField";

function SceneRig() { const group = useRef<THREE.Group>(null); useFrame(({ pointer }) => { if (group.current) { group.current.rotation.y += (pointer.x * 0.08 - group.current.rotation.y) * 0.03; group.current.rotation.x += (pointer.y * 0.04 - group.current.rotation.x) * 0.03; } }); return <group ref={group}><FloatingGeometry /><ParticleField /><Sparkles count={45} scale={5.5} size={1.8} speed={0.35} color="#c3b4ec" /></group>; }
export function HeroScene() { return <Canvas dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}><PerspectiveCamera makeDefault position={[0, 0, 5.4]} fov={40} /><ambientLight intensity={1.9} color="#fff9ff" /><directionalLight position={[3, 4, 4]} intensity={3.2} color="#fff1e8" /><pointLight position={[-3, -2, 2]} intensity={3} color="#bca7ed" /><SceneRig /><Environment preset="studio" /><OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /></Canvas>; }
