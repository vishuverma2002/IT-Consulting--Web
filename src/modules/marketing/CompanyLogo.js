"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getLogoSources } from "@/utils/logoUrl";

/**
 * @param {{ company: import("@/types").ClientCompany }} props
 */
export default function CompanyLogo({ company }) {
  const sources = useMemo(() => {
    const remote = getLogoSources(company.website);
    return company.logoSrc ? [company.logoSrc, ...remote] : remote;
  }, [company.logoSrc, company.website]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const activeSrc = sources[sourceIndex];
  const exhausted = sourceIndex >= sources.length;

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [activeSrc]);

  if (!activeSrc || exhausted) {
    return (
      <span className="company-logo-wrap">
        <span className="company-logo-placeholder" aria-hidden="true">
          {getInitials(company.name)}
        </span>
      </span>
    );
  }
  return (
    <span className="company-logo-wrap">
      {!loaded ? (
        <span className="company-logo-placeholder company-logo-skeleton" aria-hidden="true">
          {getInitials(company.name)}
        </span>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        className={`company-logo-image${loaded ? " is-loaded" : ""}`}
        src={activeSrc}
        alt={`${company.name} logo`}
        width={160}
        height={64}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(false);
          setSourceIndex((index) => index + 1);
        }}
      />
    </span>
  );
}

/** @param {string} name */
function getInitials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
