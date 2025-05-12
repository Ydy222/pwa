import OpenAI from "openai";

export async function test() {
  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY, // ✅ 여기에 직접 넣어야 함
    dangerouslyAllowBrowser: true,
  });

  const response = await client.responses.create({
    model: "gpt-4o",
    input: "Write a one-sentence bedtime story about a unicorn.",
  });

  console.log(response.output_text);
}
