export async function getuserDetails(username) {
    // console.log("service", username);
    const users = await fetch(
      `https://api.github.com/users/${username}`
    ).then((res) => res.json());
    return users;
  }
  
  export async function getFollowersData(data) {
    // console.log("service", data);
    const followers = await fetch(data).then((res) => res.json());
    return followers;
  }

  export async function getUserRepo(repo) {
    // console.log("service", repo);
    const userRepo = await fetch(repo).then((res) => res.json());
    return userRepo;
  }