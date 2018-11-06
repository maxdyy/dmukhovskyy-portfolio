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
      createdAt
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
      postType
      postTitle
      postText
      readtime
    }
  }
`;

export const BLOG_POST_QUERY = id => {
  return `
    {
      blogPost(where: {
        id: "${id}"
      }) {
        status
          id
          createdAt
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
          postType
          postTitle
          postText
          postDescription
          postKeywords
          readtime
      }
    }`;
};
