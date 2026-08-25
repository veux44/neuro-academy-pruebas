// ==========================================================
// CONFIGURACIÓN DE CONEXIÓN A SUPABASE - Neuro Academy
// Este archivo se comparte entre login.html y cuenta.html
// La "anon key" es segura para exponer en el navegador (está
// diseñada para ser pública); la seguridad real vive en las
// reglas RLS configuradas dentro de Supabase.
// ==========================================================

const SUPABASE_URL = 'https://hrtyjewdftmijdvwycds.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhydHlqZXdkZnRtaWpkdnd5Y2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwOTcwNDcsImV4cCI6MjEwMjY3MzA0N30.6aUaSC0_mRlq-J-88bFb1QjC-KPC7t1VFuekzDNrjZo';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
