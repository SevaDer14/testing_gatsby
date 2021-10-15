import React from 'react'
import { Container, Typography, Button } from '@mui/material'

import useGithubApiQuery from '../queries/useGithubApiQuery'
import Header from '../components/Header'
import '../css/projects.css'


const Projects = () => {
  const data = useGithubApiQuery()
  const repos = data.githubApiQuery.user.repositories.nodes
  const userName = data.githubApiQuery.user.name

  return (
    <Container maxWidth='md'>    
      <Header>Projects</Header>
      <Typography component='h2' variant='h2' className='SubHeader'>{userName} first 10 Github Repos</Typography>
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
