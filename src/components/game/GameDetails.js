import React, { useEffect, useState,  } from "react"
import { getGames, deleteGame } from "./GameManager.js"
import { Link, useHistory, useParams } from "react-router-dom"


//!need a useParam here so it only shows game selected

export const GameList = (props) => {
  const [games, setGames] = useState([])
  const history=useHistory()
  const { gameId } = useParams()
  


  useEffect(() => {
    
    getGames().then(gameData => setGames(gameData))
  }, [gameId])



  return (
    <article className="games">
      {
        games.map(game => {
          return <section key={`game--${game.id}`} className="game">
            <h2 className="game__title">{game.title} </h2>
            <h3 className="game__title"> by {game.designer} </h3>
            <div className="game__description" value={game.description}>Brief description:{game.description}</div>
            <div className="game__players">{game.number_of_players} players needed</div>
            <div className="game__skillLevel">Game last {game.duration}</div>
            {/* <Link className="btn" to={`/games/${game.id}/update`}>Edit Game</Link>
            <button onClick={() => {
              deleteGame(game.id).then(getAllTheGames)
            }}>Delete Game</button> */}
          </section>
        })
      }

      /* <button className="btn btn-2 btn-sep icon-create"
          onClick={() => {
              history.push({ pathname: "/games/new" })
          }}
      >Register New Game</button> 
   
    </article>
  )
}


