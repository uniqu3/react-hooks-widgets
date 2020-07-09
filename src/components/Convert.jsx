import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(translatedText);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const fetchTranslateApi = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_GOOGLE_KEY,
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText);
    };

    if (debouncedText) fetchTranslateApi();
  }, [language, debouncedText]);

  return <p>{translatedText}</p>;
};

export default Convert;
