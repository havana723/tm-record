import React, { useEffect, useState } from "react";

interface Props {
  word: string;
  blinkInterval?: number;
}

const TypewriterWord: React.FC<Props> = (props) => {
  const { word, blinkInterval } = props;
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // typeWriter
  useEffect(() => {
    if (index === word.length + 1) {
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 50 + Math.floor(Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [index]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, blinkInterval || 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      {word.substring(0, index)}
      <span style={{ display: "inline-block", width: 0 }}>
        {blink ? "|" : ""}
      </span>
    </>
  );
};

export default TypewriterWord;
