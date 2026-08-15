"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Hls from "hls.js";
import Logo from "../Logo";
import { siteContent } from "../../content/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export default function CtaFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const startedRef = useRef(false);
  const [ready, setReady] = useState(false);

  const { cinematicCta, contact, copyright } = siteContent;
  const whatsappUrl = buildWhatsAppUrl(
    contact.whatsappNumber,
    contact.whatsappGeneralMessage
  );

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const playVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.play().catch(() => {});
    };

    const startVideo = () => {
      if (startedRef.current) {
        playVideo();
        return;
      }

      startedRef.current = true;
      const src = cinematicCta.videoUrl;

      // iPhone/iPad/Safari: use native HLS first.
      // This is more reliable than forcing hls.js on mobile Safari.
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.load();
        return;
      }

      // Chrome/Android and browsers without native HLS.
      if (Hls.isSupported()) {
        const hls = new Hls({
          startLevel: 0,
          capLevelToPlayerSize: true,
          maxBufferLength: 12,
          maxMaxBufferLength: 20,
          backBufferLength: 0,
        });

        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, playVideo);

        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            console.error("OCTO HLS fatal error:", data.type, data.details);
          }
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startVideo();
          observer.disconnect();
        }
      },
      {
        rootMargin: "900px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(section);

    // Mobile Safari can occasionally suspend autoplay while the page is
    // backgrounded or while scrolling. Retry playback when the tab becomes
    // active and on the user's first interaction.
    const resumePlayback = () => {
      if (startedRef.current) playVideo();
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") resumePlayback();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("touchstart", resumePlayback, { passive: true, once: true });
    window.addEventListener("pointerdown", resumePlayback, { passive: true, once: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("touchstart", resumePlayback);
      window.removeEventListener("pointerdown", resumePlayback);
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [cinematicCta.videoUrl]);

  return (
    <section ref={sectionRef} id="contacto" className="cinematic-cta section-line">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={() => videoRef.current?.play().catch(() => {})}
        onCanPlay={() => {
          setReady(true);
          videoRef.current?.play().catch(() => {});
        }}
        className={`cinematic-video ${ready ? "is-ready" : ""}`}
        aria-hidden="true"
      />

      <div className="cinematic-fade cinematic-fade-top" />
      <div className="cinematic-fade cinematic-fade-bottom" />
      <div className="cinematic-overlay" />

      <div className="cinematic-content shell">
        <div className="cinematic-copy">
          <h2>{cinematicCta.title}</h2>
          <p>{cinematicCta.description}</p>

          <div className="cinematic-actions">
            <a
              className="liquid-glass-strong cinematic-button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {cinematicCta.primaryCta.label}
            </a>
          </div>
        </div>

        <div className="cinematic-footer">
          <Logo />

          <div className="cinematic-footer-links">
            <a
              className="cinematic-social-icon"
              href={contact.instagramUrl}
              aria-label="Instagram"
            >
              <Image
                src="/icons/instagram-gray.png"
                alt=""
                width={22}
                height={22}
              />
            </a>
            <a href={`mailto:${contact.email}`}>CONTACTO</a>
          </div>

          <p>{copyright}</p>
        </div>
      </div>
    </section>
  );
}
