// utils/submitToSupabase.ts
import { supabase } from '@/lib/supabaseClient';

export interface SheetResponse {
  success: boolean;
  message: string;
}

export const submitEmailToSupabase = async (
  email: string,
  firstName: string
): Promise<SheetResponse> => {
  try {
    const { error } = await supabase.from('subscribers').insert([
      {
        email,
        first_name: firstName,
        timestamp: new Date().toISOString(),
        source: typeof window !== 'undefined' ? window.location.href : 'unknown',
      },
    ]);

    if (error) {
      // Log error for debugging
      console.error('Supabase insert error:', error);

      // Check if the error is a unique constraint violation (duplicate email)
      const isDuplicate =
        error.code === '23505' || // PostgreSQL unique_violation
        error.message.toLowerCase().includes('duplicate') ||
        error.message.toLowerCase().includes('already exists');

      return {
        success: false,
        message: isDuplicate
          ? 'This email is already on our list.'
          : error.message || 'Something went wrong',
      };
    }

    return { success: true, message: 'You’re now subscribed!' };
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return {
      success: false,
      message: err.message || 'Something went wrong',
    };
  }
};
