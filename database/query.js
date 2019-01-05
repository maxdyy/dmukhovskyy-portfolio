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
