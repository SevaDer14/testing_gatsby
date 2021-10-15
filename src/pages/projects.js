import React from 'react'
import { Container, Button } from '@mui/material'

import useGithubApiQuery from '../queries/useGithubApiQuery'


const Projects = () => {
  const data = useGithubApiQuery()
  const repos = data.githubApiQuery.user.repositories.nodes
  const userName = data.githubApiQuery.user.name

  return (
    <Container maxWidth='md'>    
      <h1>Projects</h1>
      <h2>{userName} first 10 Github Repos</h2>
      <ul>
        {
          repos.map(repo =>
            <li key={repo.id}>{repo.name}: {repo.updatedAt}</li>
          )
        }
      </ul>
      <Button variant='contained' color='secondary'>I do nothing</Button>
    </Container>
  )
}

export default Projects
