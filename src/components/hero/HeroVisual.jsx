import { useRef, useState } from "react";
import "./HeroVisual.css";

// ─────────────────────────────────────────────
//  REPLACE THESE WITH YOUR ACTUAL CDN URLS
// ─────────────────────────────────────────────
const VIDEO_MP4  = "https://cdn.jsdelivr.net/gh/abhishek4516/sunichome@main/public/hero.mp4";   
const VIDEO_WEBM = "YOUR_VIDEO_CDN_URL.webm";    
const VIDEO_POSTER = "YOUR_POSTER_CDN_URL.jpg";  
// ─────────────────────────────────────────────

export default function HeroVisual() {
  const videoRef = useRef(null);
  const [muted, setMuted]     = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted((m) => !m);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <div className="hv-root">

      {/* ── Floating accent rings ── */}
      <div className="hv-ring hv-ring--1" aria-hidden="true" />
      <div className="hv-ring hv-ring--2" aria-hidden="true" />

      {/* ── Corner bracket decorations ── */}
      <div className="hv-bracket hv-bracket--tl" aria-hidden="true" />
      <div className="hv-bracket hv-bracket--br" aria-hidden="true" />

      {/* ── Main video card ── */}
      <div className="hv-card">

        {/* inner glow border */}
        <div className="hv-card-glow" aria-hidden="true" />

        {/* video element */}
        <video
          ref={videoRef}
          className="hv-video"
          src={VIDEO_MP4}
          poster={VIDEO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Hero background video"
        >
          <source src={VIDEO_WEBM} type="video/webm" />
          <source src={VIDEO_MP4}  type="video/mp4" />
        </video>

        {/* dark gradient overlay at bottom */}
        <div className="hv-video-overlay" aria-hidden="true" />

        {/* ── Floating stat chip – top left ── */}
        <div className="hv-chip hv-chip--tl">
          <span className="hv-chip-dot" />
          <span className="hv-chip-label">Live Operations</span>
        </div>

        {/* ── Floating stat chip – bottom right ── */}
        <div className="hv-chip hv-chip--br">
          <span className="hv-chip-value">99.9%</span>
          <span className="hv-chip-sublabel">Uptime SLA</span>
        </div>

        {/* ── Video controls ── */}
        <div className="hv-controls" role="group" aria-label="Video controls">

          {/* Play / Pause */}
          <button
            className="hv-ctrl-btn"
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? (
              /* Pause icon */
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <rect x="5"  y="3" width="3" height="14" rx="1" />
                <rect x="12" y="3" width="3" height="14" rx="1" />
              </svg>
            ) : (
              /* Play icon */
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            )}
          </button>

          {/* Mute / Unmute */}
          <button
            className="hv-ctrl-btn"
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? (
              /* Muted icon */
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9 4L5 8H2v4h3l4 4V4z" />
                <line x1="14" y1="9" x2="18" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="18" y1="9" x2="14" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              /* Unmuted icon */
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9 4L5 8H2v4h3l4 4V4z" />
                <path d="M14 7a4 4 0 010 6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M16.5 5a7 7 0 010 10" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* ── Small floating metric card ── */}
      <div className="hv-metric-card">
        <span className="hv-metric-label">Deployments</span>
        <span className="hv-metric-value">2,400+</span>
        <span className="hv-metric-sub">enterprise clients</span>
      </div>

    </div>
  );
}