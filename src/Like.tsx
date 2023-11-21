import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    onClick();
  };
  if (liked) {
    return (
      <>
        <AiFillHeart color="red" size={30} onClick={toggle} />
        <h1>liked</h1>
      </>
    );
  } else
    return (
      <>
        <AiOutlineHeart size={30} onClick={toggle} />
      </>
    );
};

export default Like;
