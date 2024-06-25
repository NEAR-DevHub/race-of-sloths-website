"use client";

import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    setShowConsent(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = (value) => {
    setShowConsent(false);
    setCookie("localConsent", value.toString(), {});
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-white text-black">
        <span className="text-base mr-16">
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our{" "}
          <Link className="text-_secondary hover:underline" href="/cookie">
            Cookie Policy.
          </Link>
        </span>
        <div className="flex md:flex-row flex-col gap-3">
          <button
            className="bg-black py-2 px-8 rounded text-white"
            onClick={() => acceptCookie(true)}
          >
            Accept
          </button>
          <button
            className="bg-white border-2 border-black py-2 px-8 rounded text-black"
            onClick={() => acceptCookie(false)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
