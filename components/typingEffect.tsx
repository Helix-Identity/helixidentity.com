import React, { useState, useEffect } from "react";

interface Word {
  text: string;
  className?: string;
}

interface TypingEffectProps {
  words: Word[];
  typingSpeed?: number;
  pauseTime?: number;
  globalClassName?: string;
  prefix?: string; // Prefix text that stays the same
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed = 150,
  pauseTime = 1500,
  globalClassName = "",
  prefix = "", // Default to an empty string if no prefix is provided
}) => {
  const [index, setIndex] = useState(0); // Current word index
  const [text, setText] = useState(""); // Text to display
  const [isDeleting, setIsDeleting] = useState(false); // Track if deleting

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index].text;

      if (isDeleting) {
        // Remove characters
        setText(currentWord.slice(0, text.length - 1));
      } else {
        // Add characters
        setText(currentWord.slice(0, text.length + 1));
      }

      // Determine if the word is fully typed or deleted
      if (!isDeleting && text === currentWord) {
        // Pause after typing the full word
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        // Move to the next word and reset
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        setText("");
      }
    };

    // Set the speed for typing and deleting
    const speed = isDeleting ? typingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, words, index, typingSpeed, pauseTime]);

  return (
    <span className={globalClassName}>
      {prefix}
      {prefix != "" ? " " : ""}
      {text != "" ? (
        <span className={words[index].className || ""}>{text}</span>
      ) : (
        <br />
      )}
    </span>
  );
};

export default TypingEffect;
