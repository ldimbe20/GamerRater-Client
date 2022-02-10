import React from "react"
import { Route } from "react-router-dom"
import { GameForm } from "./game/GameForm.js"
import { GameList } from "./game/GameList.js"



export const ApplicationViews = () => {
  return <>
    <main style={{
      margin: "5rem 2rem",
      lineHeight: "1.75rem"
    }}>
      <Route exact path="/games">
        <GameList />
      </Route>

      <Route exact path="/games/new">
        <GameForm />
      </Route>
      

    </main>
  </>
}

