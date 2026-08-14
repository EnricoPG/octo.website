"use client";
import { useEffect,useRef,useState } from "react";
import Image from "next/image";
import Hls from "hls.js";
import Logo from "../Logo";
import { siteContent } from "../../content/site";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export default function CtaFooter(){
  const sectionRef=useRef<HTMLElement>(null);
  const videoRef=useRef<HTMLVideoElement>(null);
  const hlsRef=useRef<Hls|null>(null);
  const [ready,setReady]=useState(false);
  const [started,setStarted]=useState(false);
  const {cinematicCta,contact,copyright}=siteContent;
  const whatsappUrl = buildWhatsAppUrl(contact.whatsappNumber, contact.whatsappGeneralMessage);

  useEffect(()=>{
    const section=sectionRef.current, video=videoRef.current;
    if(!section||!video) return;
    const observer=new IntersectionObserver(([entry])=>{
      if(!entry.isIntersecting||started) return;
      setStarted(true); observer.disconnect();
      const src=cinematicCta.videoUrl;
      if(Hls.isSupported()){
        const hls=new Hls({startLevel:0,capLevelToPlayerSize:true,maxBufferLength:12,maxMaxBufferLength:20,backBufferLength:0});
        hlsRef.current=hls; hls.loadSource(src); hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,()=>video.play().catch(()=>{}));
      }else if(video.canPlayType("application/vnd.apple.mpegurl")){
        video.src=src; video.load(); video.play().catch(()=>{});
      }
    },{rootMargin:"700px 0px",threshold:.01});
    observer.observe(section);
    return()=>{observer.disconnect();hlsRef.current?.destroy();hlsRef.current=null}
  },[cinematicCta.videoUrl,started]);

  return <section ref={sectionRef} id="contacto" className="cinematic-cta section-line">
    <video ref={videoRef} muted loop playsInline preload="metadata" onCanPlay={()=>setReady(true)} className={`cinematic-video ${ready?"is-ready":""}`} aria-hidden="true"/>
    <div className="cinematic-fade cinematic-fade-top"/><div className="cinematic-fade cinematic-fade-bottom"/><div className="cinematic-overlay"/>
    <div className="cinematic-content shell">
      <div className="cinematic-copy">
        <h2>{cinematicCta.title}</h2>
        <p>{cinematicCta.description}</p>
        <div className="cinematic-actions">
          <a className="liquid-glass-strong cinematic-button" href={whatsappUrl} target="_blank" rel="noreferrer">{cinematicCta.primaryCta.label}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="cinematic-footer">
        <Logo/>
        <div className="cinematic-footer-links">
          <a className="cinematic-social-icon" href={contact.instagramUrl} aria-label="Instagram">
            <Image src="/icons/instagram-gray.png" alt="" width={22} height={22}/>
          </a>
          <a href={`mailto:${contact.email}`}>CONTACTO</a>
        </div>
        <p>{copyright}</p>
      </div>
    </div>
  </section>
}
