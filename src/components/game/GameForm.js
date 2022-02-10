import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createGame, getGameTypes } from './GameManager.js'


export const GameForm = () => {
  const history = useHistory()

  /*
      Since the input fields are bound to the values of
      the properties of this state variable, you need to
      provide some default values.
  */
  const [currentGame, setCurrentGame] = useState({
    description: "",
    designer: "",
    year_released: "",
    number_of_players: 1,
    game_duration: 1,
    age_recommendation:1,
    title:""
  })

  const changeGameState = (domEvent) => {
    const copy = {...currentGame}
    // const copy = Object.assign({}, currentGame)
    copy[domEvent.target.name] = domEvent.target.value

    setCurrentGame(copy)
  }

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" required autoFocus className="form-control"
            value={currentGame.title}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="designer">Designer: </label>
          <input type="text" name="designer" required autoFocus className="form-control"
            value={currentGame.designer}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="number_of_player">Number of Players: </label>
          <input type="number" name="number_of_players" required autoFocus className="form-control"
            value={currentGame.number_of_players}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="year">Year released: </label>
          <input type="date" name="year" required autoFocus className="form-control"
            value={currentGame.year}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="game_duration">Game_duration: </label>
          <input type="date" name="game_duration" required autoFocus className="form-control"
            value={currentGame.game_duration}
            onChange={changeGameState}
          />
        </div>
      </fieldset>
    
      <fieldset>
        <div className="form-group">
          <label htmlFor="age_recommendation">Age Recommendation: </label>
          <input type="date" name="age_recommendation" required autoFocus className="form-control"
            value={currentGame.age_recommendation}
            onChange={changeGameState}
          />
        </div>
      </fieldset>



      {/* TODO: create the rest of the input fields */}

      <button type="submit"
        onClick={evt => {
          // Prevent form from being submitted
          evt.preventDefault()

          const game = {
            description: currentGame.description,
            designer: currentGame.title,
            year_released: currentGame.year_released,
            number_of_players: parseInt(currentGame.number_of_players),
            game_duration: parseInt(currentGame.game_duration),
            age_recommendation: parseInt(currentGame.age_recommendation),
            title:currentGame.title
          }

         //!!
          createGame(game)
            .then(() => history.push("/games"))
        }}
        className="btn btn-primary">Create</button>
    </form>
  )
}

