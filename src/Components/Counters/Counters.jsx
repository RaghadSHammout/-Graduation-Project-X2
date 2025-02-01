import React, { useState, useEffect } from 'react';
import { FaUser, FaFilm, FaEye } from 'react-icons/fa';
import './Counters.css'

export default function Counters() {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const targetUsers = getRandomNumber(500, 2000);
    const targetViews = getRandomNumber(1000, 5000);
    const targetFilms = 50;

    const [users, setUsers] = useState(0);
    const [views, setViews] = useState(0);
    const [films, setFilms] = useState(0);

    useEffect(() => {
        const userInterval = setInterval(() => {
            setUsers(prev => {
                if (prev < targetUsers) {
                    return prev + getRandomNumber(1, 5);
                } else {
                    clearInterval(userInterval);
                    return targetUsers;
                }
            });
        }, 50);

        const viewInterval = setInterval(() => {
            setViews(prev => {
                if (prev < targetViews) {
                    return prev + getRandomNumber(5, 15);
                } else {
                    clearInterval(viewInterval);
                    return targetViews;
                }
            });
        }, 30);

        const filmInterval = setInterval(() => {
            setFilms(prev => {
                if (prev < targetFilms) {
                    return prev + 1;
                } else {
                    clearInterval(filmInterval);
                    return targetFilms;
                }
            });
        }, 100);

        return () => {
            clearInterval(userInterval);
            clearInterval(viewInterval);
            clearInterval(filmInterval);
        };
    }, []);

    return (
        <>
            <div className="home-padding containerMon">
                <div className="icon-container">
                    <div className='MoAboutContainer'>
                        <FaUser className="icon" />
                        <div className='MOAbouth3'>
                            <h3>Movies: {users}</h3>
                        </div>
                    </div>

                    <div className='MoAboutContainer'>
                        <FaFilm className="icon" />
                        <div className='MOAbouth3'>
                            <h3>Shows: {films}</h3>
                        </div>
                    </div>

                    <div className='MoAboutContainer'>
                        <FaEye className="icon" />
                        <div className='MOAbouth3'>
                            <h3>Users: {views}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
