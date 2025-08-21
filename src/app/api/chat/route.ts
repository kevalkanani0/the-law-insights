import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';

export async function POST(req: Request) {
  console.log('API route called!');
  
  try {
    const { messages } = await req.json();
    console.log('Messages received:', messages);
    
    // Check if API key exists
    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY not found!');
      return Response.json({ error: 'API key missing' }, { status: 500 });
    }
    
    console.log('API key found, calling Groq...');
    
    const result = await generateText({
      model: groq('llama3-8b-8192'),
      system: "You are The Law Insights AI, a helpful assistant for German law. Provide educational information only, not legal advice. Always end responses with: Educational info only, not legal advice.",
      messages,
      temperature: 0.7,
      // Remove maxTokens from here - it's not supported at this level
    });

    console.log('Groq response:', result.text);
    return Response.json({ message: result.text });
  } catch (error: unknown) {
    console.error('Detailed error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return Response.json({ 
      error: 'Failed to generate response', 
      details: errorMessage 
    }, { status: 500 });
  }
}