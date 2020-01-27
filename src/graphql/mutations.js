/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
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
export const updateProject = `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
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
export const deleteProject = `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
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
