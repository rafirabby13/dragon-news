import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondions = () => {
    return (
        <div>
            <p>This is our terms and conditions</p>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondions;