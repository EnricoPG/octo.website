"use client";

import { useEffect, useRef } from "react";

export interface InteractiveNebulaShaderProps {
  hasActiveReminders?: boolean;
  hasUpcomingReminders?: boolean;
  disableCenterDimming?: boolean;
  className?: string;
}

/**
 * OCTO Nebula background.
 * Same GLSL concept as the original Three.js version, implemented with
 * native WebGL to avoid a heavy runtime dependency and deployment/type issues.
 */
export function InteractiveNebulaShader({
  hasActiveReminders = false,
  hasUpcomingReminders = false,
  disableCenterDimming = false,
  className = "",
}: InteractiveNebulaShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    container.appendChild(canvas);

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });

    if (!gl) {
      canvas.remove();
      return;
    }

    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const vertexSource = `
      attribute vec2 position;
      varying vec2 vUv;

      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision mediump float;

      uniform vec2 iResolution;
      uniform float iTime;
      uniform float hasActiveReminders;
      uniform float hasUpcomingReminders;
      uniform float disableCenterDimming;
      uniform float qualityLevel;

      varying vec2 vUv;

      #define t iTime

      mat2 m(float a) {
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c);
      }

      float mapField(vec3 p) {
        p.xz *= m(t * 0.4);
        p.xy *= m(t * 0.3);
        vec3 q = p * 2.0 + t;

        return length(p + vec3(sin(t * 0.7))) * log(length(p) + 1.0)
          + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
      }

      void mainImage(out vec4 O, in vec2 fragCoord) {
        vec2 uv =
          fragCoord / min(iResolution.x, iResolution.y) - vec2(0.9, 0.5);

        uv.x += 0.4;

        vec3 col = vec3(0.0);
        float d = 2.5;

        for (int i = 0; i < 6; i++) {
          if (float(i) >= qualityLevel) {
            break;
          }

          vec3 p =
            vec3(0.0, 0.0, 5.0) + normalize(vec3(uv, -1.0)) * d;

          float rz = mapField(p);
          float f =
            clamp((rz - mapField(p + 0.1)) * 0.5, -0.1, 1.0);

          vec3 base;

          if (hasActiveReminders > 0.5) {
            base =
              vec3(0.05, 0.2, 0.5) + vec3(4.0, 2.0, 5.0) * f;
          } else if (hasUpcomingReminders > 0.5) {
            base =
              vec3(0.05, 0.3, 0.1) + vec3(2.0, 5.0, 1.0) * f;
          } else {
            // OCTO palette
            base =
              vec3(0.07, 0.035, 0.13) + vec3(2.7, 0.85, 4.15) * f;
          }

          col =
            col * base +
            smoothstep(2.5, 0.0, rz) * 0.7 * base;

          d += min(rz, 1.0);
        }

        float dist = distance(fragCoord, iResolution * 0.5);
        float radius =
          min(iResolution.x, iResolution.y) * 0.5;

        float dim =
          disableCenterDimming > 0.5
            ? 1.0
            : smoothstep(radius * 0.3, radius * 0.5, dist);

        O = vec4(col, 1.0);

        if (disableCenterDimming < 0.5) {
          O.rgb = mix(O.rgb * 0.3, O.rgb, dim);
        }
      }

      void main() {
        mainImage(gl_FragColor, vUv * iResolution);
      }
    `;

    const compileShader = (
      type: number,
      source: string
    ): WebGLShader | null => {
      const compiled = gl.createShader(type);
      if (!compiled) return null;

      gl.shaderSource(compiled, source);
      gl.compileShader(compiled);

      if (!gl.getShaderParameter(compiled, gl.COMPILE_STATUS)) {
        console.error(
          "OCTO shader compile error:",
          gl.getShaderInfoLog(compiled)
        );
        gl.deleteShader(compiled);
        return null;
      }

      return compiled;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(
      gl.FRAGMENT_SHADER,
      fragmentSource
    );

    if (!vertexShader || !fragmentShader) {
      canvas.remove();
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      canvas.remove();
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(
        "OCTO shader link error:",
        gl.getProgramInfoLog(program)
      );
      canvas.remove();
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const positionLocation =
      gl.getAttribLocation(program, "position");

    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(
      positionLocation,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    const resolutionLocation =
      gl.getUniformLocation(program, "iResolution");
    const timeLocation =
      gl.getUniformLocation(program, "iTime");
    const activeLocation =
      gl.getUniformLocation(program, "hasActiveReminders");
    const upcomingLocation =
      gl.getUniformLocation(program, "hasUpcomingReminders");
    const dimmingLocation =
      gl.getUniformLocation(program, "disableCenterDimming");
    const qualityLocation =
      gl.getUniformLocation(program, "qualityLevel");

    gl.uniform1f(
      activeLocation,
      hasActiveReminders ? 1 : 0
    );
    gl.uniform1f(
      upcomingLocation,
      hasUpcomingReminders ? 1 : 0
    );
    gl.uniform1f(
      dimmingLocation,
      disableCenterDimming ? 1 : 0
    );
    gl.uniform1f(
      qualityLocation,
      isMobile ? 4 : 6
    );

    const pixelRatio = Math.min(
      window.devicePixelRatio || 1,
      isMobile ? 1.0 : 1.35
    );

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(
        resolutionLocation,
        canvas.width,
        canvas.height
      );
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let visible = true;
    let pageVisible =
      document.visibilityState === "visible";
    let raf = 0;
    let lastFrame = 0;
    const startTime = performance.now();
    const frameInterval = isMobile
      ? 1000 / 30
      : 1000 / 60;

    const intersectionObserver =
      new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0.01 }
      );

    intersectionObserver.observe(container);

    const handleVisibility = () => {
      pageVisible =
        document.visibilityState === "visible";
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);

      if (!visible || !pageVisible) return;
      if (now - lastFrame < frameInterval) return;

      lastFrame = now;

      const elapsed = prefersReducedMotion
        ? 0
        : (now - startTime) / 1000;

      gl.uniform1f(timeLocation, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (buffer) gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);

      canvas.remove();
    };
  }, [
    hasActiveReminders,
    hasUpcomingReminders,
    disableCenterDimming,
  ]);

  return (
    <div
      ref={containerRef}
      className={`interactive-nebula ${className}`}
      aria-hidden="true"
    />
  );
}

export default InteractiveNebulaShader;
