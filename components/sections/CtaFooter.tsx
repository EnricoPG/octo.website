"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import Logo from "../Logo";
import { siteContent } from "../../content/site";

export default function CtaFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { cinematicCta, contact, copyright } = siteContent;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const src = cinematicCta.videoUrl;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [cinematicCta.videoUrl]);

  return (
    <section id="contacto" className="cinematic-cta section-line">
      <video ref={videoRef} autoPlay loop muted playsInline className="cinematic-video" aria-hidden="true" />
      <div className="cinematic-fade cinematic-fade-top" />
      <div className="cinematic-fade cinematic-fade-bottom" />
      <div className="cinematic-overlay" />

      <div className="cinematic-content shell">
        <div className="cinematic-copy">
          <p className="cinematic-kicker">OCTO / TECHNOLOGY STUDIO</p>
          <h2>{cinematicCta.title}</h2>
          <p>{cinematicCta.description}</p>

          <div className="cinematic-actions">
            <a className="liquid-glass-strong cinematic-button" href={cinematicCta.primaryCta.href}>
              {cinematicCta.primaryCta.label}<span aria-hidden="true">↗</span>
            </a>
            <a className="cinematic-button cinematic-button-solid" href={cinematicCta.secondaryCta.href}>
              {cinematicCta.secondaryCta.label}<span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="cinematic-footer">
          <Logo />
          <div className="cinematic-footer-links">
            <a href={contact.instagramUrl}>INSTAGRAM</a>
            <a href={`mailto:${contact.email}`}>CONTACTO</a>
          </div>
          <p>{copyright}</p>
        </div>
      </div>
    </section>
  );
}
