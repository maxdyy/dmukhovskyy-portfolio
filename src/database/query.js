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
      postThumbnail {
        handle
        width
        height
      }
      postImage {
        handle
        width
        height
      }
      postTitle
      postText
      readtime
    }
  }
`;
