import React from "react";
import { useDispatch } from "react-redux";

export const Card = ({ userId, count }) => {
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch
    }
  return (
    <>
      <div onClick={handleChange} className="flex h-32 w-32 text-center align-middle justify-center items-center bg-cardBg m-4 relative">
        <span className="h-1/2 w-1/2 bg-white rounded-full flex items-center justify-center">{userId}</span>
        <span className="absolute top-0 right-0 h-1/4 w-1/4 rounded-full bg-countBg  flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"> {count}</span>
      </div>
    </>
  );
};
