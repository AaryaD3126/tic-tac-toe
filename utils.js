let callPlayername1btn = document.getElementById("callName1");
let callPlayername2btn = document.getElementById("callName2");
let layoverp1 = document.querySelector(".namelayoverp1");
let layoverp2 = document.querySelector(".namelayoverp2");
let cancelLayover1 = document.querySelector(".cancelLayover1");
let cancelLayover2 = document.querySelector(".cancelLayover2");

let player_1_name_submit_btn = document.getElementById("player-1-name-submit-btn");
let player_2_name_submit_btn = document.getElementById("player-2-name-submit-btn");

callPlayername1btn.addEventListener("click", ()=>{
    layoverp1.style.display = "block";
})

callPlayername2btn.addEventListener("click", ()=>{
    layoverp2.style.display = "block";
})

cancelLayover1.addEventListener("click", ()=>{
    layoverp1.style.display = "none";
})
cancelLayover2.addEventListener("click", ()=>{
    layoverp2.style.display = "none";
})

player_1_name_submit_btn.addEventListener("click", () => {
    let name = document.getElementById("player-1-name").value;
    if (!isValidName(name)) {
        // Display an error message or take appropriate action
        return false;
    } else {
        document.querySelector(".playername1").textContent = name;
        layoverp1.style.display = "none";
    }
});

player_2_name_submit_btn.addEventListener("click", () => {
    let name = document.getElementById("player-2-name").value;
    if (!isValidName(name)) {
        // Display an error message or take appropriate action
        return false;
    } else {
        document.querySelector(".playername2").textContent = name;
        layoverp2.style.display = "none";
    }
});

function isValidName(name) {
    // Regular expression to check if the name is alphanumeric and less than 20 characters
    const nameRegex = /^[a-zA-Z0-9]{1,20}$/;
    return nameRegex.test(name);
}

  