# TechSurf2023 
## Running the client

This repository contains a React web application that interacts with the Flask server to generate text using LSTM models, GPT-2, and OpenAI's Text-Da-Vinci-003 model.

### Getting Started

To use the client app and preview text generation, follow these steps:

#### Prerequisites

- Node.js and npm (Node Package Manager)

#### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/anubhavchawla2071/techsurf2023_client.git
cd techsurf2023_client
```

2. To install the required dependencies for the client app, open your terminal and navigate to the `techsurf2023_client` directory that you cloned from the repository. Then, run the following command:

```bash
npm install
```

#### Starting the App
```bash
npm start
```
- The app will run on port 3000 by default. You can access it in your web browser at http://localhost:3000.
#### Project Preview
- [Watch the video](https://drive.google.com/file/d/1fv0qtkuDjbJmrezATNLqZtDWEW6Avs-c/view?usp=sharing)
#### LSTM model generation
![1st](https://github.com/anubhavchawla2071/techsurf2023_client/blob/main/Screenshots/Screenshot%20(59).png)
![2nd](https://github.com/anubhavchawla2071/techsurf2023_client/blob/main/Screenshots/Screenshot%20(60).png)

#### gpt-2 model generation
- the title is "global warming and climate change"
![3rd](https://github.com/anubhavchawla2071/techsurf2023_client/blob/main/Screenshots/Screenshot%20(64).png)

#### openAI api for text-da-vinci-003
- The api's are paid , so the user has to enter their own. and if it si valid they would get the result.
![4th](https://github.com/anubhavchawla2071/techsurf2023_client/blob/main/Screenshots/Screenshot%20(63).png)

#### Dark mode feature
![5th](https://github.com/anubhavchawla2071/techsurf2023_client/blob/main/Screenshots/Screenshot%20(58).png)

### Important Notes

- Ensure that the [Flask server](https://github.com/anubhavchawla2071/techsurf2023_server) is running and accessible at the specified endpoint.
- The client app provides an intuitive interface to preview text generation using different models.
- Please keep in mind that text generation results may vary based on input prompts.

### License

This project is licensed under the [MIT License](LICENSE).
