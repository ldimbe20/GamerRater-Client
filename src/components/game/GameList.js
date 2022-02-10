import React, { useEffect, useState,  } from "react"
import { getGames, deleteGame } from "./GameManager.js"
import { Link, useHistory } from "react-router-dom"




export const GameList = (props) => {
  const [games, setGames] = useState([])
  const history=useHistory()
  


  useEffect(() => {
    
    getGames().then(gameData => setGames(gameData))
  }, [])



  return (
    <article className="games">
      {
        games.map(game => {
          return <section key={`game--${game.id}`} className="game">
            <h2 className="game__title">{game.title} </h2>
          </section>
        })
      }

   
    </article>
  )
}

//!need to add a hyperlink to route to gameDetails