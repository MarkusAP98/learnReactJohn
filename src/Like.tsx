import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { set } from "zod";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(true);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLike(false);
    setLiked(true);
  };
  const handleLikedClick = () => {
    setLike(true);
    setLiked(false);
  };
  return (
    <div onClick={onClick}>
      <div>
       {like && <div className="fs-4" onClick={handleClick}>
          <CiHeart></CiHeart>
        </div>}

        {liked && (
          <div className="text-danger m-1" onClick={handleLikedClick}>
            <FaHeart></FaHeart>
          </div>
        )}
      </div>
    </div>
  );
};

export default Like;
