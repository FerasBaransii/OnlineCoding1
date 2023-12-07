import React from 'react';
import { useParams } from 'react-router-dom';

const CodeBlockPage = () => {
    // useParams is a hook from React Router that allows accessing URL parameters
    const { item } = useParams();
  
    return (
      <div>
        <h2>Details for {item}</h2>
        {/* Additional content based on the item parameter */}
      </div>
    );
  };
  
  export default CodeBlockPage;