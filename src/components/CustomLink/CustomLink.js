import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={
                    { borderBottom: match ? "1px solid blue" : "none", color: match ? "black" : "white", boxShadow: match ? "1px 1px 5px black" : "none", borderRadius: Math ? "5px" : "2px" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;