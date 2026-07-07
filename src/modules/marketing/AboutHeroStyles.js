export default function AboutHeroStyles() {
  return (
    <style>{`
      @keyframes about-hero-fade-up {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes about-hero-float {
        0%, 100% { transform: scale(1.03) translateY(0); }
        50% { transform: scale(1.03) translateY(-14px); }
      }

      @keyframes about-hero-glow {
        0%, 100% { opacity: 0.85; }
        50% { opacity: 1; }
      }

      /* ---- About hero (matches landing [data-component="hero"] exactly) ---- */
      [data-component="about-hero"] {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        border: none;
        padding-block: 0;
        color: var(--hero-text);
        background-color: var(--hero-bg);
      }

      [data-component="about-hero"] .hero-inner,
      [data-component="about-hero"] .hero-grid {
        overflow: visible;
      }

      [data-component="about-hero"]::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -2;
        background: url("/images/about-hero-bg.png") center center / cover no-repeat;
        filter: saturate(0.95) contrast(1.05);
        opacity: 0.7;
        transform: scale(1.03);
        image-rendering: -webkit-optimize-contrast;
        -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 20%, #000 80%, transparent 100%);
        mask-image: linear-gradient(180deg, transparent 0%, #000 20%, #000 80%, transparent 100%);
        animation: about-hero-float 16s ease-in-out infinite;
      }

      [data-component="about-hero"]::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        background:
          linear-gradient(90deg, rgba(11, 17, 33, 0.96) 0%, rgba(11, 17, 33, 0.9) 22%, rgba(11, 17, 33, 0.78) 45%, rgba(11, 17, 33, 0.64) 68%, rgba(11, 17, 33, 0.52) 100%),
          radial-gradient(60% 60% at 82% 18%, var(--accent-soft) 0%, transparent 70%),
          linear-gradient(180deg, rgba(11, 17, 33, 0.55) 0%, rgba(11, 17, 33, 0.2) 22%, transparent 45%, transparent 62%, rgba(11, 17, 33, 0.35) 82%, rgba(11, 17, 33, 0.6) 100%);
        animation: about-hero-glow 9s ease-in-out infinite;
      }

      [data-component="about-hero"] .hero-badge,
      [data-component="about-hero"] .hero-copy h1,
      [data-component="about-hero"] .hero-sub,
      [data-component="about-hero"] .hero-check,
      [data-component="about-hero"] .hero-cta,
      [data-component="about-hero"] .hero-microcopy {
        opacity: 0;
        animation: about-hero-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
      }

      [data-component="about-hero"] .hero-badge { animation-delay: 0.05s; }
      [data-component="about-hero"] .hero-copy h1 { animation-delay: 0.15s; }
      [data-component="about-hero"] .hero-sub { animation-delay: 0.28s; }
      [data-component="about-hero"] .hero-check { animation-delay: 0.4s; }
      [data-component="about-hero"] .hero-cta { animation-delay: 0.52s; }
      [data-component="about-hero"] .hero-microcopy { animation-delay: 0.62s; }

      [data-component="about-hero"] .hero-card,
      [data-component="about-hero"] .about-promise-card {
        opacity: 0;
        animation: about-hero-card-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both;
      }

      [data-component="about-hero"] .hero-logos {
        opacity: 0;
        animation: about-hero-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both;
      }

      @keyframes about-hero-card-in {
        from { opacity: 0; transform: translateY(24px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      @media (min-width: 980px) {
        [data-component="about-hero"]::before {
          background-position: 62% center;
        }
      }

      @media (max-width: 979px) {
        [data-component="about-hero"]::before {
          background-position: center;
          opacity: 0.5;
        }

        [data-component="about-hero"]::after {
          background:
            linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.7) 100%),
            radial-gradient(80% 50% at 50% 0%, rgba(99, 102, 241, 0.14) 0%, transparent 70%);
        }
      }

      [data-component="about-hero"] [data-component="container"] {
        padding-inline: var(--space-5);
      }

      @media (min-width: 640px) and (max-width: 979px) {
        [data-component="about-hero"] [data-component="container"] {
          padding-inline-start: var(--space-5);
          padding-inline-end: var(--space-8);
        }
      }

      @media (min-width: 980px) {
        [data-component="about-hero"] {
          --hero-title-size: clamp(1.875rem, 3.6vw, 2.5rem);
          --hero-title-leading: calc(var(--hero-title-size) * 1.18);
        }

        [data-component="about-hero"] [data-component="container"] {
          padding-inline-start: var(--space-6);
          padding-inline-end: var(--space-10);
        }
      }

      [data-component="about-hero"] .hero-inner {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 5.25rem);
        padding-block: var(--space-10) var(--space-8);
        gap: var(--space-10);
      }

      [data-component="about-hero"] .hero-grid {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-12);
        align-items: center;
        justify-items: start;
        width: 100%;
      }

      @media (min-width: 980px) {
        [data-component="about-hero"] .hero-grid {
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          column-gap: var(--space-16);
          align-items: start;
          justify-items: stretch;
        }
      }

      [data-component="about-hero"] .hero-content {
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        max-width: 100%;
        margin-top: var(--space-8);
      }

      @media (min-width: 640px) and (max-width: 979px) {
        [data-component="about-hero"] .hero-content {
          margin-top: var(--space-10);
          padding-inline-end: var(--space-4);
        }
      }

      @media (min-width: 980px) {
        [data-component="about-hero"] .hero-content {
          margin-top: var(--space-10);
          transform: translateX(calc(-1 * var(--space-6)));
        }
      }

      @keyframes about-promise-swing {
        0%, 100% { transform: rotate(-1.2deg); }
        50% { transform: rotate(1.2deg); }
      }

      [data-component="about-hero"] .hero-card-wrap.about-promise-hanger {
        --cable-length: 5rem;
        overflow: visible;
      }

      [data-component="about-hero"] .about-promise-swing {
        position: relative;
        isolation: isolate;
        transform-origin: 50% calc(-1 * var(--cable-length));
        animation: about-promise-swing 5.5s ease-in-out infinite;
        will-change: transform;
      }

      [data-component="about-hero"] .about-promise-cables {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 100%;
        height: var(--cable-length);
        pointer-events: none;
        z-index: 0;
      }

      [data-component="about-hero"] .about-promise-cable {
        position: absolute;
        top: 0;
        bottom: -8px;
        width: 2px;
        border-radius: 2px;
        background: linear-gradient(180deg, var(--hero-badge-text) 0%, var(--hero-accent) 45%, var(--accent-secondary) 100%);
        box-shadow: 0 0 6px rgba(99, 102, 241, 0.35);
        z-index: 0;
      }

      [data-component="about-hero"] .about-promise-cable--left {
        left: 1.35rem;
        transform: translateX(-50%);
      }

      [data-component="about-hero"] .about-promise-cable--right {
        right: 1.35rem;
        transform: translateX(50%);
      }

      [data-component="about-hero"] .about-promise-cable::before {
        content: "";
        position: absolute;
        top: -5px;
        left: 50%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent-soft-bg);
        border: 2px solid var(--hero-accent);
        transform: translateX(-50%);
      }

      [data-component="about-hero"] .about-promise-cable::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 50%;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--accent-secondary);
        border: 2px solid var(--hero-badge-text);
        transform: translateX(-50%);
        z-index: 0;
      }

      [data-component="about-hero"] .hero-card-wrap {
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        width: 100%;
        margin-top: var(--space-16);
      }

      @media (min-width: 640px) and (max-width: 979px) {
        [data-component="about-hero"] .hero-card-wrap {
          margin-top: var(--space-20);
        }
      }

      @media (min-width: 980px) {
        [data-component="about-hero"] .hero-card-wrap {
          margin-top: calc(
            var(--space-10)
            + 2rem
            + var(--space-5)
            + var(--hero-title-leading)
            + var(--hero-title-leading)
          );
          align-items: flex-end;
          margin-inline-start: var(--space-6);
          transform: translateX(var(--space-12));
        }
      }

      [data-component="about-hero"] .hero-copy {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-5);
        width: 100%;
      }

      [data-component="about-hero"] .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: 0.375rem 0.875rem;
        border-radius: var(--radius-pill);
        background: var(--hero-badge-bg);
        border: 1px solid var(--hero-badge-border);
        color: var(--hero-badge-text);
        font-size: 0.8125rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        backdrop-filter: blur(4px);
      }

      [data-component="about-hero"] .hero-badge::before {
        content: "";
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: var(--hero-accent);
        box-shadow: 0 0 0 3px rgba(165, 180, 252, 0.25);
      }

      [data-component="about-hero"] .hero-copy h1 {
        max-width: 38rem;
        margin: 0;
        font-size: clamp(1.875rem, 3.6vw, 2.5rem);
        line-height: 1.18;
        letter-spacing: -0.02em;
        font-weight: 700;
        color: var(--hero-text);
        text-wrap: balance;
      }

      [data-component="about-hero"] .hero-sub {
        max-width: 34rem;
        margin: 0;
        font-size: 1.0625rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.78);
      }

      [data-component="about-hero"] .hero-check {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        margin: var(--space-1) 0 0;
        padding: 0;
        list-style: none;
      }

      [data-component="about-hero"] .hero-check li {
        display: flex;
        align-items: flex-start;
        gap: var(--space-3);
        font-size: 0.9375rem;
        font-weight: 500;
        color: var(--hero-check-text);
      }

      [data-component="about-hero"] .hero-check li::before {
        content: "✓";
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 1.35rem;
        height: 1.35rem;
        border-radius: 50%;
        background: var(--hero-badge-bg);
        border: 1px solid var(--hero-badge-border);
        color: var(--hero-badge-text);
        font-size: 0.75rem;
        font-weight: 700;
      }

      [data-component="about-hero"] .hero-cta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-3);
        margin-top: var(--space-2);
      }

      [data-component="about-hero"] .hero-cta [data-variant="secondary"] {
        background: rgba(255, 255, 255, 0.08);
        border-color: transparent;
        color: var(--hero-text);
        backdrop-filter: blur(4px);
      }

      [data-component="about-hero"] .hero-cta [data-variant="secondary"]:hover {
        background: rgba(255, 255, 255, 0.16);
        border-color: var(--hero-text);
        color: var(--hero-text);
      }

      [data-component="about-hero"] .hero-microcopy {
        margin: 0;
        font-size: 0.8125rem;
        color: var(--hero-micro-text);
      }

      @keyframes about-promise-flip {
        0% {
          opacity: 0;
          visibility: hidden;
          transform: perspective(720px) translateX(48px) rotateY(-22deg) scale(0.94);
          z-index: 0;
        }
        3% {
          opacity: 1;
          visibility: visible;
          transform: perspective(720px) translateX(0) rotateY(0deg) scale(1);
          z-index: 2;
        }
        22% {
          opacity: 1;
          visibility: visible;
          transform: perspective(720px) translateX(0) rotateY(0deg) scale(1);
          z-index: 2;
        }
        25% {
          opacity: 0;
          visibility: hidden;
          transform: perspective(720px) translateX(-36px) rotateY(18deg) scale(0.96);
          z-index: 0;
        }
        100% {
          opacity: 0;
          visibility: hidden;
          transform: perspective(720px) translateX(48px) rotateY(-22deg) scale(0.94);
          z-index: 0;
        }
      }

      @keyframes about-promise-dot {
        0%, 22% {
          opacity: 1;
          transform: scale(1.3);
          background: var(--dot-color, var(--hero-accent));
          box-shadow: 0 0 0 3px var(--dot-glow, rgba(165, 180, 252, 0.25));
        }
        25%, 100% {
          opacity: 0.3;
          transform: scale(1);
          background: transparent;
          box-shadow: none;
        }
      }

      @keyframes about-icon-shine {
        0%, 100% { transform: translateX(-120%) rotate(18deg); }
        40%, 60% { transform: translateX(120%) rotate(18deg); }
      }

      [data-component="about-hero"] .hero-card,
      [data-component="about-hero"] .about-promise-card {
        position: relative;
        z-index: 2;
        width: 100%;
        padding: var(--space-4);
        background: rgba(11, 17, 33, 0.92);
        border: 1px solid transparent;
        border-radius: var(--radius-lg);
        box-shadow:
          0 24px 48px -20px rgba(0, 0, 0, 0.65),
          0 0 0 1px rgba(99, 102, 241, 0.08);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        transition: box-shadow 0.35s ease, border-color 0.35s ease;
      }

      [data-component="about-hero"] .hero-card:hover,
      [data-component="about-hero"] .about-promise-card:hover {
        border-color: var(--accent-glow);
        box-shadow:
          0 32px 64px -18px rgba(0, 0, 0, 0.75),
          0 12px 24px -12px rgba(99, 102, 241, 0.35);
      }

      @media (min-width: 980px) {
        [data-component="about-hero"] .hero-card,
        [data-component="about-hero"] .about-promise-card {
          max-width: 27rem;
        }
      }

      [data-component="about-hero"] .about-promise-title {
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -0.02em;
        color: var(--hero-text);
      }

      [data-component="about-hero"] .about-promise-viewport {
        position: relative;
        height: 4.75rem;
        overflow: hidden;
        perspective: 720px;
        transform-style: preserve-3d;
      }

      [data-component="about-hero"] .about-promise-slide {
        position: absolute;
        inset: 0;
        opacity: 0;
        visibility: hidden;
        transform-origin: right center;
        animation: about-promise-flip 12s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        animation-delay: calc(var(--slide-i, 0) * -3s);
        will-change: transform, opacity;
      }

      [data-component="about-hero"] .about-promise-list {
        display: none;
      }

      [data-component="about-hero"] .about-promise-item {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-2) var(--space-3);
        border-radius: var(--radius-md);
        background: linear-gradient(
          105deg,
          var(--accent-soft, rgba(99, 102, 241, 0.12)) 0%,
          rgba(255, 255, 255, 0.03) 55%
        );
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 3px solid var(--accent-from, var(--accent-secondary));
        height: 100%;
        box-shadow: none;
      }

      [data-component="about-hero"] .about-promise-dots {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
      }

      [data-component="about-hero"] .about-promise-dot {
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        background: transparent;
        animation: about-promise-dot 12s ease-in-out infinite;
        animation-delay: calc(var(--dot-i, 0) * -3s);
        transition: background 0.3s ease;
      }

      [data-component="about-hero"] .about-promise-industries {
        display: none;
      }

      [data-component="about-hero"] .about-promise-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 12px;
        background: linear-gradient(
          145deg,
          var(--accent-from, var(--accent-secondary)) 0%,
          var(--accent-to, var(--accent)) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.22);
        color: var(--hero-text);
        box-shadow:
          0 6px 18px -6px var(--accent-glow, rgba(99, 102, 241, 0.55));
        overflow: hidden;
      }

      [data-component="about-hero"] .about-promise-icon::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          105deg,
          transparent 30%,
          transparent 50%,
          transparent 70%
        );
        animation: about-icon-shine 12s ease-in-out infinite;
        animation-delay: calc(var(--slide-i, 0) * -3s);
        pointer-events: none;
      }

      [data-component="about-hero"] .about-promise-icon svg {
        position: relative;
        z-index: 1;
        width: 1.2rem;
        height: 1.2rem;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
      }

      [data-component="about-hero"] .about-promise-text strong {
        font-size: 0.8125rem;
        font-weight: 600;
        line-height: 1.3;
        color: var(--hero-text);
      }

      [data-component="about-hero"] .about-promise-text span {
        font-size: 0.75rem;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.62);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      [data-component="about-hero"] .about-promise-text {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
        min-width: 0;
      }

      [data-component="about-hero"] .about-promise-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-2);
        padding-top: var(--space-2);
        border-top: 1px solid transparent;
      }

      [data-component="about-hero"] .about-promise-assurance {
        margin: 0;
        font-size: 0.75rem;
        line-height: 1.4;
        color: var(--hero-eyebrow);
      }

      [data-component="about-hero"] .about-promise-link {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.8125rem;
        font-weight: 600;
        color: var(--hero-badge-text);
        text-decoration: none;
        white-space: nowrap;
        transition: color 0.2s ease, gap 0.2s ease;
      }

      [data-component="about-hero"] .about-promise-link:hover {
        color: var(--hero-text);
        gap: 0.5rem;
      }

      [data-component="about-hero"] .card-eyebrow {
        margin: 0;
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--hero-eyebrow);
      }

      [data-component="about-hero"] .hero-logos {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        align-self: flex-start;
        width: 100%;
        gap: var(--space-5) var(--space-8);
        padding-top: var(--space-6);
        border-top: 1px solid rgba(255, 255, 255, 0.15);
      }

      @media (min-width: 980px) {
        [data-component="about-hero"] .hero-logos {
          transform: translateX(calc(-1 * var(--space-6)));
          padding-inline-end: var(--space-12);
        }
      }

      [data-component="about-hero"] .logos-label {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.45);
      }

      [data-component="about-hero"] .logos-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-5) var(--space-8);
        margin: 0;
        padding: 0;
        list-style: none;
      }

      [data-component="about-hero"] .logos-list li {
        font-size: 1.0625rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: rgba(255, 255, 255, 0.4);
        filter: grayscale(1);
        transition: color 0.15s ease;
      }

      [data-component="about-hero"] .logos-list li:hover {
        color: var(--hero-text);
      }

      @media (max-width: 979px) {
        [data-component="about-hero"] .hero-card-wrap {
          order: 2;
        }

        [data-component="about-hero"] .hero-inner {
          min-height: auto;
        }

        [data-component="about-hero"] .hero-content,
        [data-component="about-hero"] .hero-card-wrap,
        [data-component="about-hero"] .hero-logos {
          transform: none;
        }

        [data-component="about-hero"] .hero-content {
          margin-right: 0;
        }

        [data-component="about-hero"] .hero-logos {
          padding-inline-end: 0;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        [data-component="about-hero"]::before,
        [data-component="about-hero"]::after,
        [data-component="about-hero"] .hero-badge,
        [data-component="about-hero"] .hero-copy h1,
        [data-component="about-hero"] .hero-sub,
        [data-component="about-hero"] .hero-check,
        [data-component="about-hero"] .hero-cta,
        [data-component="about-hero"] .hero-microcopy,
        [data-component="about-hero"] .hero-card,
        [data-component="about-hero"] .about-promise-card,
        [data-component="about-hero"] .hero-logos {
          animation: none;
          opacity: 1;
        }

        [data-component="about-hero"] .about-promise-slide {
          animation: none;
          opacity: 1;
          visibility: visible;
          position: static;
          transform: none;
        }

        [data-component="about-hero"] .about-promise-slide:not(:first-child) {
          display: none;
        }

        [data-component="about-hero"] .about-promise-viewport {
          height: auto;
        }

        [data-component="about-hero"] .about-promise-dot {
          animation: none;
          opacity: 0.3;
          box-shadow: none;
        }

        [data-component="about-hero"] .about-promise-dot:first-child {
          opacity: 1;
          background: var(--dot-color, var(--hero-accent));
        }

        [data-component="about-hero"] .about-promise-icon::after {
          animation: none;
          display: none;
        }

        [data-component="about-hero"] .about-promise-swing {
          animation: none;
        }
      }

      [data-component="about-hero"][data-hero-layout="simple"] .hero-inner {
        min-height: auto;
        padding-block: var(--space-16) var(--space-12);
      }

      [data-component="about-hero"][data-hero-layout="simple"] .hero-content {
        margin-top: 0;
      }

      @media (min-width: 980px) {
        [data-component="about-hero"][data-hero-layout="simple"] .hero-content {
          transform: none;
        }
      }

      /* Tools hero — matches case-outcomes dark grid backdrop (screenshot 1) */
      [data-component="about-hero"][data-hero-bg="outcomes"] {
        background-color: #050714;
        background-image:
          radial-gradient(ellipse 72% 58% at 50% 38%, rgba(26, 43, 109, 0.62) 0%, transparent 72%),
          radial-gradient(ellipse 42% 38% at 88% 92%, rgba(56, 109, 255, 0.24) 0%, transparent 68%),
          linear-gradient(180deg, #050714 0%, var(--hero-bg) 48%, #050714 100%);
        border-block: 1px solid rgba(255, 255, 255, 0.06);
      }

      [data-component="about-hero"][data-hero-bg="outcomes"]::before,
      [data-component="about-hero"][data-hero-bg="outcomes"]::after {
        content: none;
        display: none;
        animation: none;
      }

      [data-component="about-hero"][data-hero-bg="outcomes"] .outcome-bg {
        z-index: 0;
      }

      [data-component="about-hero"][data-hero-bg="outcomes"] [data-component="container"] {
        position: relative;
        z-index: 1;
      }
    `}</style>
  );
}
