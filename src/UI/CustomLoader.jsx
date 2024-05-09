import React from "react";

export default function CustomLoader({ children, customClass, isLoading }) {
  return isLoading ? (
    <div className={`container loader-container ${customClass}`}>
      <div class="loader"></div>
    </div>
  ) : (
    children
  );
}
