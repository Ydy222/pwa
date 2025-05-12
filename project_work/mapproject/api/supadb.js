import {SupabaseClient} from '@supabase/supabase-js';

const supabase = new SupabaseClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const fetchCities = async () => {
    try{
        const {data} = await supabase.from('cities').select('*').order('category');
        return data;
    }catch (e) {
        return [];
    }
}
