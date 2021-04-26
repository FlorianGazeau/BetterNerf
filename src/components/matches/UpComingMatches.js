import { Typography } from '@material-ui/core'
import React from 'react'
import moment from 'moment';

export default function UpComingMatches({match}) {

  return (
    <div className="match">
      <div>
        <div className="best-of">
          <Typography>
            BO{match.number_of_games}
          </Typography>
        </div>
        <div>
          <Typography>
            {moment(match.begin_at).format('DD MMM, YYYY')}
          </Typography>
        </div>
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
          <p>vs</p>
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
