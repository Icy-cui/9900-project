import React, { useState, useEffect } from "react";

export default function Lifecycle() {
  const [name, setName] = useState("rbtree");

  useEffect(() =>{
    console.log("组件挂载后的操作")
    return () => {
        console.log("组件卸载要做的操作")
    }
  })

  useEffect(() => {
    console.log("组件更新后的操作")
  }, [])

  return (
    <>
      <div>{name}</div>
      <button onClick={() => setName("aa")}>change name</button>
    </>
  );
}
