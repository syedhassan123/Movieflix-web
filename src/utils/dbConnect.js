const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

console.log("username" , username);
console.log("password" , password);


export const connection=`mongodb+srv://${username}:${password}@cluster0.7pvt8xf.mongodb.net/user-data?retryWrites=true&w=majority&appName=Cluster0`

