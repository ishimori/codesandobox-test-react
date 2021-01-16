import React from "react";

const ColorfullMessage = (props) => {
  console.log(props);

  const { color, children } = props;

  const contentStyle = {
    color, // 変数名と同じだと省略できる
    fontSize: "18px"
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};
export default ColorfullMessage;
