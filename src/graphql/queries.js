/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    title
    username
    description
    image {
      bucket
      region
      key
    }
    yarn
    amount
    craft
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      username
      description
      image {
        bucket
        region
        key
      }
      yarn
      amount
      craft
    }
    nextToken
  }
}
`;
