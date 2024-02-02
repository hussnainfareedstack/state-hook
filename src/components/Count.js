import React from "react";

function Count({ text, count }) {
  return (
    <>
      {console.log(`Rendering ${text}`)}
      <div>
        {text} {count}
      </div>
    </>
  );
}

export default React.memo(Count);
