<<<<<<< HEAD
// utils/submitToSupabase.ts
import { supabase } from '@/lib/supabaseClient';

export interface SheetResponse {
  success: boolean;
  message: string;
}

export const submitEmailToSupabase = async (email: string, firstName: string): Promise<SheetResponse> => {
  try {
    const { error } = await supabase.from('subscribers').insert([
      {
        email,
        first_name: firstName,
        timestamp: new Date().toISOString(),
        source: window.location.href,
      },
    ]);

    if (error) throw error;

    return { success: true, message: 'You’re now subscribed!' };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'Something went wrong',
    };
  }
};
=======
// utils/submitToSupabase.ts
import { supabase } from '@/lib/supabaseClient';

export interface SheetResponse {
  success: boolean;
  message: string;
}

export const submitEmailToSupabase = async (email: string, firstName: string): Promise<SheetResponse> => {
  try {
    const { error } = await supabase.from('subscribers').insert([
      {
        email,
        first_name: firstName,
        timestamp: new Date().toISOString(),
        source: window.location.href,
      },
    ]);

    if (error) throw error;

    return { success: true, message: 'You’re now subscribed!' };
  } catch (err: any) {
    return {
      success: false,
      message: err.message || 'Something went wrong',
    };
  }
};
>>>>>>> 02664fa154458f9d05fd7b8de956479f8d70ad78
