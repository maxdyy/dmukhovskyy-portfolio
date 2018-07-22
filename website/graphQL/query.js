export const projects_query = 
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