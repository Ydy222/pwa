import {supabase} from "./supabaseClient.js";

export const getUsers = async ()=>{
    const users
        = await supabase.from('members').select();
    console.log(users);
    return users;
}