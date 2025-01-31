import React, { useState, useEffect } from 'react';
import { FaUser, FaFilm, FaEye } from 'react-icons/fa';
import './Counters.css'
export default function Counters() {
    const initialUsers = parseInt(localStorage.getItem("users")) || 1;
    const initialViews = parseInt(localStorage.getItem("views")) || 1;

    const [users, setUsers] = useState(1);
    const [views, setViews] = useState(1);

    useEffect(() => {
        localStorage.setItem("users", initialUsers);
        localStorage.setItem("views", initialViews);
    }, [initialUsers, initialViews]);

    useEffect(() => {
        const userInterval = setInterval(() => {
            setUsers((prev) => {
                if (prev < initialUsers) {
                    return prev + 1;
                } else {
                    clearInterval(userInterval);
                    return prev;
                }
            });
        }, 10); 

        const viewInterval = setInterval(() => {
            setViews((prev) => {
                if (prev < initialViews) {
                    return prev + 1;
                } else {
                    clearInterval(viewInterval);
                    return prev;
                }
            });
        }, 0.5); 

        return () => {
            clearInterval(userInterval);
            clearInterval(viewInterval);
        };
    }, [initialUsers, initialViews]);

    return (
        <>
            <div className="home-padding containerMon">
                <div className="icon-container">
                    <div className='MoAboutContainer'>
                        <FaUser className="icon" />
                        <div className='MOAbouth3'>
                            <h3>Number of Users: {users}</h3>
                        </div>
                    </div>

                    <div className='MoAboutContainer'>
                        <FaFilm className="icon" />
                        <div className='MOAbouth3'>
                            <h3>Number of Films: 50</h3>
                        </div>
                    </div>

                    <div className='MoAboutContainer'>
                        <FaEye className="icon" />
                        <div className='MOAbouth3'>
                            <h3>Number of Views: {views}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
