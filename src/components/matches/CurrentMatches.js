import { Typography } from '@material-ui/core'
import React from 'react'

export default function CurrentMatches({match}) {
  return (
    <div className="match">
      <div className="best-of">
        <Typography>
          BO{match.number_of_games}
        </Typography>
      </div>
      <div className="teams">
        {match.opponents.length > 1 ?
          <div className="team team1">
            <img src={match.opponents[0].opponent.image_url} alt="" />
            <div className="team-info">
              <h2>{match.opponents[0].opponent.name}</h2>
            </div>
          </div>
            : ''
        }
        <div className="score">
          <p>{match.results[0].score}</p>
          <p>vs</p>
          <p>{match.results[1].score}</p>
        </div>
        {match.opponents.length > 1 ?
          <div className="team team2">
            <img src={match.opponents[1].opponent.image_url} alt="" />
            <div className="team-info">
              <h2>{match.opponents[1].opponent.name}</h2>
            </div>
          </div>
        :
          ''
        }
      </div>
      <div className="league">
        <img src={match.league.image_url} alt="" />
      </div>
    </div>
  )
}
