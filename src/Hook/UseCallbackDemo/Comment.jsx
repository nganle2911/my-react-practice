import React, {memo} from "react";

const Comment = (props) => {
  console.log("comment");
  return (
    <div>
      <textarea></textarea>
      <br />
      <button className="btn btn-success">Send</button>
    </div>
  );
};

export default memo(Comment);
