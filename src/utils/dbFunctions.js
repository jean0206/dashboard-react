import axios from 'axios'

const server = 'http://localhost:8000/users'

const addUser = async (user) => {
    const searchUser = await axios.get(server+'?email='+user.email)
    if (searchUser['data'].length===0){
        const newUser = await axios.post(server,user);
        return newUser;
    }else{
        return [];
    }
}

const getUsers = async () => {
    const allUsers = await axios.get(server)
    return allUsers.data;
}

const deleteUser = async (id) => {
    const deleteUsers = await axios.delete(server+'/'+id)
    console.log(deleteUsers)
}

const validateLogin = async ({email,password}) => {
    const user = await axios.get(server+'?email='+email)
    const userFind = user['data'][0]
    if (userFind.password===password){
        return {auth:true}
    }else {
        return {auth:false}
    }
    console.log(user.data)
}

export  {addUser,getUsers,deleteUser,validateLogin};