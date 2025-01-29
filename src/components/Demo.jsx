import { useEffect, useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log(count);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log("component" + count);
  });
  console.log("component rendered" + count);
  return <div>Count is: {count}</div>;
};
export default Demo;
