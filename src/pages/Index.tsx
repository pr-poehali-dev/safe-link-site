import { useEffect, useRef } from "react";

export default function Index() {
  const flameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = flameRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.008;
      const x = 50 + Math.sin(t) * 4;
      const y = 50 + Math.cos(t * 0.7) * 3;
      el.style.backgroundPosition = `${x}% ${y}%`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="page-root">
      <div className="bg-layer" ref={flameRef} />
      <div className="noise-layer" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <main className="content">
        <div className="badge">Официальное уведомление</div>
        <h1 className="headline">
          <span className="headline-top">Газ</span>
          <span className="headline-location">в Пшаду</span>
          <span className="headline-date">В СЕНТЯБРЕ<br />2026</span>
        </h1>
        <div className="divider" />
        <p className="subtext">Подключение газоснабжения к посёлку Пшада</p>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #07060c;
          font-family: 'Golos Text', sans-serif;
        }

        .bg-layer {
          position: absolute;
          inset: -20%;
          background: 
            radial-gradient(ellipse 80% 60% at 20% 50%, #ff6a00 0%, transparent 55%),
            radial-gradient(ellipse 60% 80% at 80% 30%, #ee0979 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 50% 80%, #f7971e 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 70% 70%, #ff0844 0%, transparent 45%);
          background-size: 200% 200%;
          filter: blur(60px);
          opacity: 0.45;
          transition: background-position 0.1s linear;
        }

        .noise-layer {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .orb-1 {
          width: 500px; height: 500px;
          top: -100px; left: -100px;
          background: radial-gradient(circle, rgba(255,106,0,0.25) 0%, transparent 70%);
          animation: float1 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 400px; height: 400px;
          bottom: -80px; right: -80px;
          background: radial-gradient(circle, rgba(238,9,121,0.2) 0%, transparent 70%);
          animation: float2 10s ease-in-out infinite;
        }
        .orb-3 {
          width: 300px; height: 300px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(247,151,30,0.15) 0%, transparent 70%);
          animation: float3 6s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -40px) scale(1.08); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          animation: reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes reveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .badge {
          display: inline-block;
          font-family: 'Golos Text', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 190, 100, 0.85);
          border: 1px solid rgba(255, 150, 50, 0.3);
          background: rgba(255, 100, 0, 0.08);
          padding: 0.4em 1.2em;
          border-radius: 100px;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(8px);
          animation: reveal 1.2s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .headline {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          line-height: 0.92;
          text-transform: uppercase;
        }

        .headline-top {
          font-size: clamp(5rem, 18vw, 14rem);
          background: linear-gradient(135deg, #ffffff 0%, #ffe0b0 50%, #ffb347 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: reveal 1.2s 0.15s cubic-bezier(0.22, 1, 0.36, 1) both;
          letter-spacing: -0.02em;
        }

        .headline-location {
          font-size: clamp(2.5rem, 9vw, 6.5rem);
          font-weight: 300;
          color: rgba(255, 200, 120, 0.7);
          letter-spacing: 0.15em;
          animation: reveal 1.2s 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
          margin-top: 0.15em;
        }

        .headline-date {
          font-size: clamp(1.6rem, 5.5vw, 4rem);
          font-weight: 500;
          background: linear-gradient(90deg, #ff6a00, #ee0979, #ff6a00);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: reveal 1.2s 0.35s cubic-bezier(0.22, 1, 0.36, 1) both, shimmer 3s linear 1.5s infinite;
          letter-spacing: 0.12em;
          margin-top: 0.4em;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,150,50,0.6), transparent);
          margin: 2.5rem auto;
          animation: reveal 1.2s 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .subtext {
          font-family: 'Golos Text', sans-serif;
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          font-weight: 400;
          color: rgba(255, 200, 150, 0.45);
          letter-spacing: 0.05em;
          animation: reveal 1.2s 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </div>
  );
}
