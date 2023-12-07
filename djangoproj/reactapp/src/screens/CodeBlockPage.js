// CodeBlockPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CodeBlockPage = () => {
  const { code_block_id } = useParams();
  const [codeBlock, setCodeBlock] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
            if (code_block_id){
              const response = await fetch(`http://localhost:8000/code_block_page/${code_block_id}/`);
              const data = await response.json();
              // console.log("-------")
              // console.log(data)
              // console.log("-------")
              setCodeBlock(data);
            }
              
          } catch (error) {
              console.error('Error fetching code block details:', error);
          }
      };

      fetchData();
  }, [code_block_id]);

  return (
      <div>
          {codeBlock ? (
              <div>
                  <h2>Details for {codeBlock.title}</h2>
                  <p>Code: {codeBlock.code}</p>
              </div>
          ) : (
              <p>Loading...</p>
          )}
      </div>
  );
};

export default CodeBlockPage;