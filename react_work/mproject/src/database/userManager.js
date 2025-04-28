import {supabase} from "./supabaseClient.js";

export const deleteUserByIds = async (ids) => {
    const res
        = await supabase.from('members').delete().in('id', ids);
    return res;
}

export const updateUserById = async (id, values) => {
    const res
        = await supabase.from('members').update(values).eq('id', id);
    return res;
}

export const getUsers = async () => {
    const users
        = await supabase
            .from('members')
            .select()
            .order('id', {ascending: false});
    // console.log(users);
    return users;
}

export const loginUser = async (email, password) => {
    console.log(email, password);

    const res =
        await supabase.from('members')
            .select()
            .eq('email', email)
            .limit(1);

    const {data} = res;
    if (data.length === 0) {
        return {message: 'email'}
    } else {
        return {
            message: 'ok',
            data: data[0]
        }
    }
}







