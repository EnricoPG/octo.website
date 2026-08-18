"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export interface InteractiveNebulaShaderProps {
  hasActiveReminders?: boolean;
  hasUpcomingReminders?: boolean;
  disableCenterDimming?: boolean;
  className?: string;
}

export function InteractiveNebulaShader({
  hasActiveReminders = false,
  hasUpcomingReminders = false,
  disableCenterDimming = false,
  className = "",
}: InteractiveNebulaShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useEffect(() => {
    const mat = materialRef.current;
    if (!mat) return;

    mat.uniforms.hasActiveReminders.value = hasActiveReminders;
    mat.uniforms.hasUpcomingReminders.value = hasUpcomingReminders;
    mat.uniforms.disableCenterDimming.value = disableCenterDimming;
  }, [hasActiveReminders, hasUpcomingReminders, disableCenterDimming]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.15 : 1.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform bool hasActiveReminders;
      uniform bool hasUpcomingReminders;
      uniform bool disableCenterDimming;
      uniform float qualityLevel;
      varying vec2 vUv;

      #define t iTime

      mat2 m(float a){
        float c = cos(a), s = sin(a);
        return mat2(c,-s,s,c);
      }

      float map(vec3 p){
        p.xz *= m(t*0.4);
        p.xy *= m(t*0.3);
        vec3 q = p*2.0 + t;
        return length(p + vec3(sin(t*0.7))) * log(length(p)+1.0)
          + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
      }

      void mainImage(out vec4 O, in vec2 fragCoord) {
        vec2 uv = fragCoord / min(iResolution.x, iResolution.y) - vec2(.9, .5);
        uv.x += .4;
        vec3 col = vec3(0.0);
        float d = 2.5;

        for (int i = 0; i < 6; i++) {
          if (float(i) >= qualityLevel) break;

          vec3 p = vec3(0.0,0.0,5.0) + normalize(vec3(uv,-1.0)) * d;
          float rz = map(p);
          float f = clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);

          vec3 base = hasActiveReminders
            ? vec3(0.05,0.2,0.5) + vec3(4.0,2.0,5.0)*f
            : hasUpcomingReminders
            ? vec3(0.05,0.3,0.1) + vec3(2.0,5.0,1.0)*f
            : vec3(0.08,0.05,0.16) + vec3(2.6,0.8,4.0)*f;

          col = col * base + smoothstep(2.5, 0.0, rz) * 0.7 * base;
          d += min(rz, 1.0);
        }

        float dist = distance(fragCoord, iResolution*0.5);
        float radius = min(iResolution.x, iResolution.y) * 0.5;
        float dim = disableCenterDimming
          ? 1.0
          : smoothstep(radius*0.3, radius*0.5, dist);

        O = vec4(col, 1.0);

        if (!disableCenterDimming) {
          O.rgb = mix(O.rgb * 0.3, O.rgb, dim);
        }
      }

      void main() {
        mainImage(gl_FragColor, vUv * iResolution);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      hasActiveReminders: { value: hasActiveReminders },
      hasUpcomingReminders: { value: hasUpcomingReminders },
      disableCenterDimming: { value: disableCenterDimming },
      qualityLevel: { value: isMobile ? 4.0 : 6.0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);
      renderer.setSize(width, height, false);
      uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let heroVisible = true;
    let documentVisible = document.visibilityState === "visible";
    let lastFrame = 0;
    const minFrameInterval = isMobile ? 1000 / 30 : 1000 / 60;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );

    visibilityObserver.observe(container);

    const onVisibilityChange = () => {
      documentVisible = document.visibilityState === "visible";
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    renderer.setAnimationLoop((time) => {
      if (!heroVisible || !documentVisible) return;
      if (time - lastFrame < minFrameInterval) return;
      lastFrame = time;

      if (!prefersReducedMotion) {
        uniforms.iTime.value = clock.getElapsedTime();
      }

      renderer.render(scene, camera);
    });

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      renderer.setAnimationLoop(null);

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      materialRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`interactive-nebula ${className}`}
      aria-hidden="true"
    />
  );
}

export default InteractiveNebulaShader;
