import React from 'react'
import MoviesOpenHero from '../../Components/MoviesOpenHero/MoviesOpenHero'
import { useParams } from "react-router-dom";

export default function MoviesPageOpenR() {
  const { id } = useParams();
  return (
    <>
    <MoviesOpenHero/>
    </>
  )
}
