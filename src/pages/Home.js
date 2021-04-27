import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Button, Chip, Container, Grid, List, Typography } from '@material-ui/core';
import './Home.css';
import MatchesListResults from 'src/components/matches/MatchesListResults';

// const API_KEY = 'eZcn3x0eOORd3EKU5q0r6J50QOGmlbbd3FG0C9LiMcEdRrw3c7w';

const Home = () => {
  const [runningMatches, setRunningMatches] = useState([]);
  const [upComingMatches, setUpComingMatches] = useState([])
  const [filter, setFilter] = useState('')

  // async function fetchData(query) {
  //   if (!query) {
  //     const response = await fetch('https://api.pandascore.co/matches/running?token=eZcn3x0eOORd3EKU5q0r6J50QOGmlbbd3FG0C9LiMcEdRrw3c7w');
  //     const data = await response.json();
  //     setRunningMatches(data);

  //     const resp = await fetch('https://api.pandascore.co/matches/upcoming?token=eZcn3x0eOORd3EKU5q0r6J50QOGmlbbd3FG0C9LiMcEdRrw3c7w')
  //     const dataUp = await resp.json()
  //     setUpComingMatches(dataUp);
  //   }
  //   else {
  //     const response = await fetch('https://api.pandascore.co/matches/running?token=eZcn3x0eOORd3EKU5q0r6J50QOGmlbbd3FG0C9LiMcEdRrw3c7w&filter[videogame]='+ query);
  //     const data = await response.json();
  //     setRunningMatches(data);

  //     const resp = await fetch('https://api.pandascore.co/matches/upcoming?token=eZcn3x0eOORd3EKU5q0r6J50QOGmlbbd3FG0C9LiMcEdRrw3c7w&filter[videogame]=' + query);
  //     const dataUp = await resp.json()
  //     setUpComingMatches(dataUp);
  //   }
  // }

  function fetchData() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ');
    headers.append('Origin','http://localhost:3000');

    fetch('https://api.pandascore.co/matches/upcoming?token=eZcn3x0eOORd3EKU5q0r6J50QOGmlbbd3FG0C9LiMcEdRrw3c7w', {
      mode: 'cors',
      // credentials: 'include',
      method: 'GET',
      headers: headers
    })
    .then(response => response.json())
    .then(json => setRunningMatches(json))
    .catch(error => console.log('Authorization failed : ' + error.message));
  }

  useEffect(() => {
    fetchData(filter);
  }, [filter]);

  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Button onClick={() => setFilter("")}>All</Button>
              <Button onClick={() => setFilter("23")}>Call Of Duty</Button>
              <Button onClick={() => setFilter("3")}>CS:GO</Button>
              <Button onClick={() => setFilter("4")}>DOTA 2</Button>
              <Button onClick={() => setFilter("1")}>League of Legends</Button>
              <Button onClick={() => setFilter("6")}>Pubg</Button>
              <Button onClick={() => setFilter("7")}>Overwatch</Button>
              <Button onClick={() => setFilter("22")}>Rocket League</Button>
              <Button onClick={() => setFilter("9")}>Ranbow Six Siege</Button>
              <Button onClick={() => setFilter("25")}>Fifa</Button>
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={8}
              xs={12}
            >
              <Typography>
                Up coming matches
              </Typography>
              <MatchesListResults matches={upComingMatches} type="upComingMatches" />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={4}
              xs={12}
            >
              <Typography>
                Matches in live
              </Typography>
              <MatchesListResults matches={runningMatches} type="currentMatches" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
