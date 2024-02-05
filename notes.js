
let addBtn = document.getElementById('addBtn');
shownotes();

addBtn.addEventListener(
    "click",
    (e) => {
        let addTxt = document.getElementById('addText');
        let notes = localStorage.getItem("notes") 
        if(notes == null)
        {
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes)
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        shownotes();
    }
)
function shownotes(){
    let show_notes = localStorage.getItem("notes")
        if(show_notes == null)
        {
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(show_notes)
        }
        let html = "";
        notesObj.forEach((element,index) => {
            html += `
            <div class="noteCard card" style="width: 18rem; height: 30vh; padding: 20px;">
                    <div class="card-body" style= "overflow: hidden; padding: 0 0 10px 0;">
                      <h5 class="card-title">Note ${index + 1}</h5>
                      <p class="card-text">${element}</p>
                    </div>
                      <button id= "${index}" onclick="deletenote(this.id)" class="btn btn-primary" style="width: 20vh;">Delete note</button>
            </div>`
        });  
        let noteselm = document.getElementById('notes');
        if (notesObj.lenght != 0){
            noteselm.innerHTML = html;
        }
        else{
            noteselm.innerHTML = `you don't have any notes yet! please add a note from the above section`;
        }
    }

    function deletenote(index){
        let notes = localStorage.getItem("notes") 
        if(notes == null)
        {
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes)
        }
        notesObj.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(notesObj));
        shownotes();
    }

    let search = document.getElementById('searchTxt')
    search.addEventListener(
        "input",
        function (){
            let inputval = search.value.toLowerCase();
            let cardbody = document.getElementsByClassName('noteCard');
            Array.from(cardbody).forEach(function(element){
                let cardtxt = element.getElementsByTagName("p")[0].innerText;
                if (cardtxt.includes(inputval)) {
                    element.style.display = "block";     
                }
                else{
                    element.style.display = "none";
                }
            })
        })
let darkmodeball = document.getElementById('darkmode-ball');
let darklightbtn = document.getElementById('dark-light-btn');
let mynote = document.querySelector('#mynote');
let addTet = document.getElementById('addText');
let isDarkMode = false;

darklightbtn.addEventListener("click", () => {
    // Toggle the dark mode status
    isDarkMode = !isDarkMode;

    // Update the margin based on the dark mode status
    if (isDarkMode) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#fff";
        darkmodeball.style.margin = "0 0 0 20px"; // Turn on
        darkmodeball.style.backgroundColor = "#fff";
        darklightbtn.style.border = "1px solid #fff";
        mynote.style.backgroundColor = "#1E1E1E";
        mynote.style.color = "#fff";
        addTet.style.backgroundColor = "#1E1E1E";
        addTet.style.color = "#fff";
    
    } else {
        darkmodeball.style.margin = "0 0 0 4px";  // Turn off
        darkmodeball.style.backgroundColor = "#000";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        darklightbtn.style.border = "1px solid #000";
        mynote.style.backgroundColor = "#fff";
        mynote.style.color = "#000";
        addTet.style.backgroundColor = "#fff";
        addTet.style.color = "#000";
    }
    let noteCards = document.querySelectorAll('.noteCard');
    noteCards.forEach(noteCard => {
        if (isDarkMode) {
            noteCard.style.backgroundColor = "#1E1E1E"; // Dark mode color
            noteCard.style.color = "#fff"; // Dark mode text color
        } else {
            noteCard.style.backgroundColor = "#fff"; // Light mode color
            noteCard.style.color = "#000"; // Light mode text color
        }
    });
});