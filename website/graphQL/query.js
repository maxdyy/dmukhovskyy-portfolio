const PROJECT_QUERY = 
`
  {
    projects(orderBy:createdAt_DESC)  {
      status
      id
      projectTitle
      headerBackground
      projectLogo {
        id
        url
      }
      projectUrl
      projectFrontEnd
      projectBackEnd
      projectDescription
    }
  }
`

export default PROJECT_QUERY