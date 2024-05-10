import React from "react";

function Logo() {
  return (
    <div>
      <h1 style={{ color: "#f4cd2a", fontWeight: 600 }}>
        <a href="/">Larosy</a>
      </h1>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
