import { Configuration, OpenAIApi } from "openai";

export async function generateText(prompt, apiKey) {
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const words = prompt.trim().split(/\s+/).length;

  if (words < 5 || words > 250) {
    throw new Error("Please enter a text input between 5 and 250 words");
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Write a comprehensive, grammatically correct, and polished text based on the following prompt. Ensure that all spelling errors are corrected, and all information is clearly explained\n\n" + prompt + "\n\n",
      max_tokens: 250,
      temperature: 0,
    });

    return completion.data.choices[0].text;
  } catch (error) {
    if (error.response) {
        console.log("Enter valud APi")
      console.error(error.response.status, error.response.data);
      throw new Error("enter Valid API");
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      throw new Error("An error occurred during your request.");
    }
  }
}
