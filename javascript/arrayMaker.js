const makeObject = document.getElementById('makeObject');
makeObject.addEventListener('click',()=>{
    //all properties
    const nameOfItem = document.getElementById('nameOfItem').value;
    const type1 = document.getElementById('type1').value;
    const type2 = document.getElementById('type2').value;
    const language = document.getElementById('language').value;
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const year = document.getElementById('year').value;
    const quality = document.getElementById('quality').value;
    
    // merging as an object
    const myObject = `{name:"${nameOfItem}",releaseYear:"${year}", type1:"${type1}", type2:"${type2}",language:"${language}",quality:"${quality}", duration:{hour:${hour}, minute:${minute} }}`;
    //inserting in div
    const div = document.getElementById('status');
    div.innerHTML = div.innerHTML + `<p>${myObject},</p>`
})
//copy button
const copy = document.getElementById('copy');
copy.addEventListener('click',()=>{
    const copyText = document.getElementById('status').innerText;

    navigator.clipboard.writeText(copyText);
})

// Get the input field
var minute = document.getElementById("minute");

// Execute a function when the user presses a key on the keyboard
minute.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    makeObject.click();
  }
});