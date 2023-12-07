import React from 'react'
import {Link} from 'react-router-dom'

const Lobby = () => {
    const itemList = ["Item 1", "Item 2", "Item 3", "Item 4"];

    return (
        <div>
            <p>
                Choose code block
            </p>
            <ul>
                {itemList.map((item, index) => (
                    <li key={index}>
                        {item}
                        <Link to={`/CodeBlockPage/${item}`}>
                            <button>
                            Click me
                            </button>
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    );
};

export default Lobby