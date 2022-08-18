import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🦙": "Llama",
  "🐃": "Water Buffalo",
  "🦏": "Rhinoceros",
  "🐑": "Ewe",
  "🦛": "Hippopotamus",
  "🐏": "Ram",
  "🐗": "Boar",
  "🦝": "Raccoon",
  
};

const emojiDictionary2 = {
 
"😀":  "Grinning Face",
"😃":  "Grinning Face with Big Eyes",
"😄":  "Grinning Face with Smiling Eyes",
"😁":  "Beaming Face with Smiling Eyes",
"😆":  "Grinning Squinting Face",
"😅":  "Grinning Face with Sweat",
"🤣":  "Rolling on the Floor Laughing",
"😂":  "Face with Tears of Joy",
"🙂":  "Slightly Smiling Face",
"🙃":  "Upside-Down Face",
};

const emojis = Object.keys(emojiDictionary); 
const emojis2 = Object.keys(emojiDictionary2); 


export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  const [emoji1, setEmoji1] = useState("");
   const [meaning1, setMeaning1] = useState("");

  // when input changes
  function changeHandler(event) {
    const inputEmoji = event.target.value; //taking the input value in the inputEmoji variable
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary2) {
      setMeaning("It meaning is: " + emojiDictionary2[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }


  //when clicked on emoji
  function emojiClickHandler(inputEmoji) {
    setEmoji1(inputEmoji)
    setMeaning1("This is " + emojiDictionary[inputEmoji]);
    
  }

  //output to b shown

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <p>Enter a smile emoji only and know its meaning:</p>
      <input placeholder = "Enter an emoji here" onChange={changeHandler} value={emoji}></input>
      <h3 style={{ fontSize: "3rem"}}> {emoji} </h3>
      <h3> {meaning} </h3>
      

      <p>Click on any of these animal emojis and know which animals are they</p>
      {emojis.map((emoji) => (
        <span
          key={emoji}
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
        

      ))}
      <h3 style={{ fontSize: "3rem"}}> {emoji1} </h3>
      <h3> {meaning1} </h3>
    </div>
  );
}
