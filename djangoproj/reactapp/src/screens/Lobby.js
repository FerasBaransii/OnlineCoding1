// Lobby.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
    const [titles, setTitles] = useState([]);
    const [codeBlocks, setCodeBlocks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            
            const response = await fetch('http://localhost:8000/api/code_blocks/');
            const data = await response.json();
            // Extract only the titles from the data
            const titlesOnly = data.map(item => item.title);
            setCodeBlocks(data);
            

            // Save titles in state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <p>Choose code block</p>
            <ul>
                {codeBlocks.map((codeBlock, index) => (
                    <li key={index}>
                        {/* <Link to={`/CodeBlockPage/?code_block_id = ${codeBlock.id}`}>{codeBlock.title}</Link> */}
                        <Link to={`/CodeBlockPage/${codeBlock.id}/`}>{codeBlock.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lobby;
