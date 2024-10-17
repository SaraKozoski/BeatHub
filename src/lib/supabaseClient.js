import { createClient } from '@supabase/supabase-js'

/*const supabaseUrl = 'https://jxyojhujdfmsmbrargew.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eW9qaHVqZGZtc21icmFyZ2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0NzQ1NDksImV4cCI6MjA0NDA1MDU0OX0.ExWfANe361A3veMmAUbIrGEaMTBkjY4LX2iE3LHOTXU' ;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);*/

export const supabase = createClient('https://jxyojhujdfmsmbrargew.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4eW9qaHVqZGZtc21icmFyZ2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0NzQ1NDksImV4cCI6MjA0NDA1MDU0OX0.ExWfANe361A3veMmAUbIrGEaMTBkjY4LX2iE3LHOTXU')

