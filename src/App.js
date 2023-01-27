import { useState } from "react";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";

const hedaerItems = {
  title: "React Application",
};

function App() {

  let [text, setText] = useState("Please write your text here");
  let [word, setWord] = useState(27);
  let [readingTime, setReadingTime] = useState(0.02);
  let [fullWord, setfullWord] = useState(5);

  const textFormats = {
    // text edit
    textEdit: (e) => {
      setText(e.target.value);
      let charCount = e.target.value.length;

      // show number of characters
      setWord(charCount);

      // set word count
      let str = e.target.value;
      str = str.replace(/(^\s*)|(\s*$)/gi, "");
      str = str.replace(/[ ]{2,}/gi, " ");
      let numOfWords = str.split(" ").length;
      setfullWord(numOfWords);

			// reading times
			let time = (numOfWords / 225);
			setReadingTime(time.toFixed(2));
    },

    // text clear

    textClear: () => {
      setText("");
      setWord(0);
      setfullWord(0);
			setReadingTime(0);
    },

    //uppercase

    textUpper: () => {
      let testResult = text.toUpperCase();
      setText(testResult);
    },

    textCount: word,

    wordCount: fullWord,

    time: readingTime,
  };

  return (
    <div className="App">
      <Nav data={hedaerItems}></Nav>
      <TextForm text={text} editTxt={textFormats}></TextForm>
    </div>
  );
}

export default App;
