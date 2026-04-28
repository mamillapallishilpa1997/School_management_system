console.log("Supabase not ready");
const supabaseUrl = 'https://fhfdenltsmapnydmemtz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZmRlbmx0c21hcG55ZG1lbXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMjM0MjYsImV4cCI6MjA5MjU5OTQyNn0.J35_-frkJh-eHcI82MDXjEel6V-vS_f2VQZeQUXPM1o'

// get createClient from global supabase
const { createClient } = supabase

window.supabaseClient = createClient(supabaseUrl, supabaseKey)

console.log("Supabase ready");