const { UserSchema } = require("./UserSchema");

// const insertUser = (userObj) => {
//   return new Promise((resolve, reject) => {
//     UserSchema(
//       userObj
//         .save()
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((err) => {
//           reject(err);
//         })
//     );
//   });
// };

const insertUser = (userObj) => {
  UserSchema(userObj)
    .save()
    .then((data) => console.log(data))
    .catch(console.error(error));
};

module.exports = {
  insertUser,
};
