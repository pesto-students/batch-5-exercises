console.log(JSON.stringify(process.env, null, 2));
// const { GraphQLClient } = require('graphql-request');

// const query = `
//   mutation saveExerciseSubmission($exerciseSubmissionInput: ExerciseSubmissionInput!) {
//     saveExerciseSubmission(exerciseSubmissionInput: $exerciseSubmissionInput)
//   }
// `;

// const graphqlEndPoint = new GraphQLClient('https://api.pesto.tech/graphql', {
//   headers: {

//   },
// });

// graphqlEndPoint.request(query, {
//   exerciseSubmissionInput: {
//     githubUsername: 'niinpatel',
//     batchId: 'f8b0b399-75b5-44d9-b618-5a172c6e912c',
//     day: 1,
//     segment: 2,
//     exerciseResults: [{ exerciseSlug: 'nimish', didPass: false }, { exerciseSlug: 'arfat', didPass: true }],
//   },
// }).then(console.log).catch(console.error);
