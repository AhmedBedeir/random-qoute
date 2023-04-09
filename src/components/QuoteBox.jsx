import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './QuoteBox.css';

export default function QuoteBox(props) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  document.body.classList.add(`bg-${props.color}`);
  useEffect(() => {
    if (document.body.classList.length > 0) {
      document.body.classList.remove(document.body.classList[0]);
      document.body.classList.add(`bg-${props.color}`);
    }
    const url = 'https://api.quotable.io/random';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, [props.color]);
  return (
    <div id="quote-box">
      <p className={`text ${props.color} default ${props.animation}`} id="text">
        <Icon name="quote left" className="default" color={props.color} />
        {quote}
      </p>
      <p id="author" className={`text ${props.color}`}>
        _{author}
      </p>
      <div className="buttons">
        <a
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote} - ${author}`}
          target="_blank"
          id="tweet-quote"
          className="default"
          title="Tweet Quote"
        >
          <Icon name="twitter square" size="big" color={props.color} />
        </a>
        <a
          href={`https://www.reddit.com/r/test/submit?title=Quote_For_the_day&text=${quote} - ${author}`}
          target="_blank"
          id="reddit-quote"
          className="default"
          title="Reddit Quote"
        >
          <Icon name="reddit" size="big" color={props.color} />
        </a>

        <Button
          id="new-quote"
          color={props.color}
          className="default"
          onClick={props.setColor}
        >
          New Quote
        </Button>
      </div>
    </div>
  );
}
