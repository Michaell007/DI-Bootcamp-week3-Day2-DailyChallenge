// sublit form function
document.getElementById("lib-button").addEventListener("click", (e) => {
    e.preventDefault();

    // get all value inputs
    let inputNoun = document.getElementById("noun").value;
    let inputAdjective = document.getElementById("adjective").value;
    let inputPerson = document.getElementById("person").value;
    let inputVerb = document.getElementById("verb").value;
    let inputPlace = document.getElementById("place").value;

    // Make sure the values are not empty
    if (inputNoun != "" && inputAdjective != "" && inputPerson != "" && inputVerb != "" && inputPlace != "") {
        console.log("yello")
        let sentence = `${inputNoun} ${inputVerb} a ${inputAdjective} to ${inputPerson} in ${inputPlace}`;
        let story = document.getElementById("story");
        story.textContent = sentence;
    }
})