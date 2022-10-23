import React from "react";

export function useCookieConsentStyle() {
  return React.useMemo(
    () => ({
      acceptButtonDisplay: true,
      acceptButtonColor: "#1ac99f",
      closeButtonRejects: true,
      rejectButtonColor: "#6c757d",
      rejectButtonCaptionColor: "white",
      position: "float-bottom-center",
      rejectButtonDisplay: true,
    }),
    [],
  );
}
