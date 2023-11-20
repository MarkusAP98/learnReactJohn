import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
  const [like, setLike] = useState(true);

  const toggleLike = () => {
    setLike(!like);
    onClick();
  }

  if (like)
    return <AiFillHeart color="red" size={35} onClick={toggleLike} />;
  return <AiOutlineHeart size={35} onClick={toggleLike} />;
};

export default Like;
