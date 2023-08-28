import React, { useState, useEffect } from "react";
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";
// import openai from "openai";
import { generateText } from "./generate";
export default function TextForm(props) {
  // const [data,setData]=useState([{}]);
  const [text, setText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [button, setButton] = useState(null);
  const [showOpenAIInputs, setShowOpenAIInputs] = useState(false);
  // const [openAIInputPrompt, setOpenAIInputPrompt] = useState("");
  const [openAIApiKey, setOpenAIApiKey] = useState("");
  useEffect(() => {
    if (finalText !== "" && button === 1) {
      console.log(button);
      fetch("http://127.0.0.1:5000/gpt2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input_text: finalText }), // Convert the input to JSON string
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle the response data from the server
          setFinalText(data.generated_text);
          console.log(data);
        });
    } else if (finalText !== "" && button === 0) {
      console.log(button);
      fetch("http://127.0.0.1:5000/lstm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input_text: finalText }), // Convert the input to JSON string
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle the response data from the server
          setFinalText(data.generated_text);
          console.log(data);
        });
    }
  }, [button]);

  const handleUpClick = () => {
    setFinalText(text);
    console.log(finalText);
    setText("");
    setButton(1);
    console.log(button);
  };

  const handleLSTM = () => {
    // let newText = text.toUpperCase();
    setFinalText(text);
    console.log(finalText);
    setText("");
    setButton(0);
    // console.log(button)
  };

  const handleOpenAIButtonClick = () => {
    setFinalText(text);
    setShowOpenAIInputs(true);
  };

  const handleOpenAISubmit =async  () => {
    setShowOpenAIInputs(false);

    if (!openAIApiKey) {
      setFinalText("Error: Please enter your OpenAI API key");
      return;
    }

    try {
      const generatedText = await generateText(text, openAIApiKey);
      setFinalText(generatedText);
    } catch (error) {
      console.error(error);
      setFinalText("Error: " + error.message);
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(text);
  };

  const handleWordCount = (str) => {
    // const arr = str.split(" ");
    // console.log(arr);
    return str.split(" ").filter((word) => word.length > 0).length;
    // return arr.length;
  };
  return (
    <>
      <div
        className="container text-center"
        style={{ marginTop: "55px", marginBottom: "20px" }}
      >
        <h2 style={{ color: props.theme === "light" ? "black" : "white" }}>
          {props.heading}
        </h2>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.theme === "light" ? "#F6F6F6" : "#292929",
            color: props.theme === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <div className="mx-0">
        <button className="btn btn-primary mx-2 my-3" onClick={handleLSTM}>
          Use LSTM
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>
          Use GPT-2_Large
        </button>
        <button
          onClick={handleOpenAIButtonClick}
          className="btn btn-primary mx-2 my-3"
        >
          Generate Text with OpenAI
        </button>
        {showOpenAIInputs && (
        <div>
          <input
            type="text"
            value={openAIApiKey}
            onChange={(e) => setOpenAIApiKey(e.target.value)}
            placeholder="Enter OpenAI API key"
          />
          <button onClick={handleOpenAISubmit}>Submit</button>
        </div>
      )}
      </div>
      <p style={{ color: props.theme === "light" ? "black" : "white" }}>
        Words : {handleWordCount(text)} and Characters : {text.length}
      </p>
      <div style={{ color: props.theme === "light" ? "black" : "white" }}>
        <h4>Your preview :</h4>
        <p id="para">{finalText}</p>
      </div>
    </>
  );
}
