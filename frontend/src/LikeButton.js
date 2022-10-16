import React, { useState, useEffect } from "react";

export default function LikeButton(props) {
  const [liked, setLiked] = useState(false);
  const wording = props.wordings || { likedText: "已经点了", unlikeText: "点赞" };

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>
        {liked ? wording.likedText : wording.unlikeText}
      </button>
    </div>
  );
}
