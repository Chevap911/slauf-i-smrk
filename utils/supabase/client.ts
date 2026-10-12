import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Najviše 5 s po zahtjevu: zaglavljena baza ne smije pojesti vrijeme funkcije prije maila o
// upitu (app/api/contact), jer bi tada upit bio ni u bazi ni u mailu (12. 10. 2026.).
export const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
        fetch: (input, init) => fetch(input, { ...init, signal: init?.signal ?? AbortSignal.timeout(5000) }),
    },
});
