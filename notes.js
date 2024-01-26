
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
        
