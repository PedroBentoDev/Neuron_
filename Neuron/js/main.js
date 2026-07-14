import { supabase } from "./superbase.js";

async function testarConexao() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error(error);
        return;
    }

    console.log("Conectado ao Supabase!");
    console.log(data);
}

testarConexao();