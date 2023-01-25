import { useState } from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from "../components/errorMessage/ErrorMessage";

const style = {
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '20px',
    transition: 'color .2s linear',
};

const hover = {
    color: '#9f0013'
};

const Page404 = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div>
            <ErrorMessage />
            <Link
                to='/'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{ ...style, ...(isHover ? hover : null) }}>Back to main page</Link>
        </div>
    )
}

export default Page404;