import React, { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/commments`, {
      content,
    });
    setContent("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label value={content} onChange={(e) => setContent(e.target.value)}>
            New comment
          </label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
