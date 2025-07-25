'use server';

import { rewriteBio, type RewriteBioInput } from '@/ai/flows/rewrite-bio';

export async function handleRewriteBio(input: RewriteBioInput) {
  try {
    const result = await rewriteBio(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}
