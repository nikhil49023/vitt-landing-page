import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TextGenerateEffect({
  words,
  className = '',
  speed = 50
}) {
  const [displayedWords, setDisplayedWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex >= words.length) return;

    const currentWord = words[currentWordIndex];
    
    if (currentCharIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords(prev => {
          const newWords = [...prev];
          if (!newWords[currentWordIndex]) {
            newWords[currentWordIndex] = '';
          }
          newWords[currentWordIndex] = currentWord.substring(0, currentCharIndex + 1);
          return newWords;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, currentCharIndex, words, speed]);

  return (
    <div className={className}>
      {displayedWords.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {word}
          {index < displayedWords.length - 1 && ' '}
        </motion.span>
      ))}
      {currentWordIndex < words.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-[1em] bg-elemental-sky ml-1"
        />
      )}
    </div>
  );
}
