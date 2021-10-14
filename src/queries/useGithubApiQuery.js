import { graphql, useStaticQuery } from 'gatsby'

const useGithubApiQuery = () => {
  const data = useStaticQuery(graphql`query MyQuery {
    githubApiQuery {
      user(login: "SevaDer14") {
        name
        repositories(first: 10) {
          nodes {
            description
            createdAt
            id
            openGraphImageUrl
            url
            updatedAt
            forkCount
            name
          }
        }
      }
    }
  }`)

  return data
}

export default useGithubApiQuery
