import React from "react";

function Title() {
  return (
    <>
      {console.log("Rendering Title")}
      <h1>useCallback Hook</h1>
    </>
  );
}

export default React.memo(Title);
