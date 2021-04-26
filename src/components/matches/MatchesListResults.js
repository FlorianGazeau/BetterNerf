import { List} from '@material-ui/core'
import React from 'react'
import CurrentMatches from './CurrentMatches'
import UpComingMatches from './UpComingMatches'

export default function MatchesListResults({ matches, type }) {

  const matchesList = matches.map((match, i) => {
    if (type === "currentMatches") return <CurrentMatches key={i} match={match} />
    return <UpComingMatches key={i} match={match} />
  })

  return (
    <List className="matches">
      {matchesList}
  </List>
  )
}
