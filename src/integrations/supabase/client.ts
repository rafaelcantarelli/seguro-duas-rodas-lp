
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hydycjqnsgnbhifydopa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5ZHljanFuc2duYmhpZnlkb3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMDE3MzYsImV4cCI6MjA1Njc3NzczNn0.AS0ZpLnYhqzMItInqACbFYPYVPboS6qHC4MjJ1NZ4rY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
