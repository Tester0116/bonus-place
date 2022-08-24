import React, { MouseEvent, RefObject } from 'react';

function useOutsideClick(setToggle:(value: boolean)=>void, refModal:RefObject<HTMLDivElement>) {
  
  const handleClick: any = (e: MouseEvent<HTMLBodyElement> | void) => {
  //   if (!e.path.includes(refModal.current)) {
  //       setToggle(false)
  //   }
  }
  // document.body.addEventListener("click", handleClick)
}

export default useOutsideClick;