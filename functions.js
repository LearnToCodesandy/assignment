const ls = localStorage;

const checkUserExistence = (name, email) => {
  const users = ls.getItem('users');
  if (users) {
    const usersArr = JSON.parse(users);
    const found = [];
    usersArr.forEach((user) => {
      if (user.name === name || user.email === email) {
        found.push(user);
      }
    });
    if (found.length !== 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const addNewUser = (data) => {
  const users = ls.getItem('users');
  if (users) {
    const newUsers = [data, ...JSON.parse(users)];
    ls.setItem('users', JSON.stringify(newUsers));
  } else {
    ls.setItem('users', JSON.stringify([data]));
  }
};

const isValidUserForSignIn = (name, password) => {
  const users = ls.getItem('users');
  if (users) {
    const userFound = JSON.parse(users).filter(
      (user) => user.name === name && user.password === password
    );
    if (userFound.length !== 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export { checkUserExistence, addNewUser, isValidUserForSignIn };
