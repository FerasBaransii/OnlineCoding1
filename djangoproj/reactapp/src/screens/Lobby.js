import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            console.log("here")
            const response = await fetch('http://localhost:8000/api/code_blocks/');
            const data = await response.json();
            
            // Extract only the titles from the data
            const titlesOnly = data.map(item => item.title);

            // Save titles in state
            setTitles(titlesOnly);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <p>Choose code block</p>
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lobby;
