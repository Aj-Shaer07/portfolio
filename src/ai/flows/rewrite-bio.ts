// src/ai/flows/rewrite-bio.ts
'use server';
/**
 * @fileOverview Rewrites a user's bio according to a specified writing style.
 *
 * - rewriteBio - A function that rewrites the bio.
 * - RewriteBioInput - The input type for the rewriteBio function.
 * - RewriteBioOutput - The return type for the rewriteBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteBioInputSchema = z.object({
  bioDraft: z.string().describe('The initial draft of the bio.'),
  writingStyle: z
    .string()
    .describe(
      'The desired writing style for the bio (e.g., professional, casual, humorous).'
    ),
});
export type RewriteBioInput = z.infer<typeof RewriteBioInputSchema>;

const RewriteBioOutputSchema = z.object({
  rewrittenBio: z.string().describe('The rewritten bio in the specified style.'),
});
export type RewriteBioOutput = z.infer<typeof RewriteBioOutputSchema>;

export async function rewriteBio(input: RewriteBioInput): Promise<RewriteBioOutput> {
  return rewriteBioFlow(input);
}

const rewriteBioPrompt = ai.definePrompt({
  name: 'rewriteBioPrompt',
  input: {schema: RewriteBioInputSchema},
  output: {schema: RewriteBioOutputSchema},
  prompt: `Rewrite the following bio in a {{{writingStyle}}} writing style.\n\nOriginal Bio: {{{bioDraft}}}`,
});

const rewriteBioFlow = ai.defineFlow(
  {
    name: 'rewriteBioFlow',
    inputSchema: RewriteBioInputSchema,
    outputSchema: RewriteBioOutputSchema,
  },
  async input => {
    const {output} = await rewriteBioPrompt(input);
    return output!;
  }
);
