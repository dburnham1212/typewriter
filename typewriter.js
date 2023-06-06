const sentence = "hello there from lighthouse labs";

let typwriter = (sentence) => {
  let timeOutValue = 0;
  for (const char of sentence) {
    setTimeout(() => { 
      process.stdout.write(char); 
    }, timeOutValue) // <= 1s delay to make it noticeable. Can dial it down later.
    timeOutValue += 50;
  }
  setTimeout(() => { 
    process.stdout.write("\n") 
  }, timeOutValue);
}

typwriter(sentence);