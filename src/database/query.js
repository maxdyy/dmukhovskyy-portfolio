export const PROJECT_QUERY = `
  {
    projects(orderBy:createdAt_DESC)  {
      status
      id
      projectTitle
      headerBackground
      projectLogo {
        handle
        width
        height
      }
      projectUrl
      projectFrontEnd
      projectBackEnd
      projectDescription
    }
  }
`;

export const BLOG_QUERY = `
  {
    blogPosts(orderBy:createdAt_DESC) {
      status
      id
      postTitle
      postThumbnail {
        handle
        width
        height
      }
      postDescription
      postText
      postPath
      readtime
    }
  }
`;
