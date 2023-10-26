import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gnysjpeeumstgwzllknd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdueXNqcGVldW1zdGd3emxsa25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNzU1OTQsImV4cCI6MjAwOTc1MTU5NH0.xGiRua3bBZT0Y_X4Rqc_vJQXMIL90ZJ_bZqPWfeN7F8';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testarConexao() {
  try {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Erro na conexão com o Supabase:', error.message);
    } else {
      console.log('Conexão com o Supabase bem-sucedida:', data);
    }
  } catch (error) {
    console.error('Erro na conexão com o Supabase:', error.message);
  }
}

testarConexao();

export default supabase;