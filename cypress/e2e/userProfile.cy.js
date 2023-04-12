// cy.intercept({
//     method: 'GET',
//     url: 'api/profiles/*',
//     { statusCode: 201,
//       data: {
//         age: age,
//         gender: gender,
//         email: email,
//         preference: '',
//         history: '',
//         description: '',
//         privacy: 'Private'
//     }}
// })

// cy.contains(profileUsername, username)
// cy.contains(profileAge, age)
// cy.contains(profileGender, gender)
// cy.contains(profileEmail, email)


const profileUsername = 'div[data-cy="profile-username"]'
const profileAge = 'div[data-cy="profile-age"]'
const profileGender = 'div[data-cy="profile-gender"]'
const profileEmail = 'div[data-cy="profile-email"]'