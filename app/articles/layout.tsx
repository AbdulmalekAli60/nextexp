import React from "react";

export const metadata = {
  title: "artilces page",
};
export default function ({ children }: any) {
  return (
    <div>
      <h1>Articles</h1>

      <div
        style={{
          marginTop: "50px",
          background: "blue",
          padding: "20px",
          borderRadius: "10PX",
        }}
      >
        {children}
      </div>
    </div>
  );
}
