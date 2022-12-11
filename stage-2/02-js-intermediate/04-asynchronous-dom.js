const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (uname) => {
    try{
        if(!uname) return null

        const username = await fetch(`https://api.github.com/users/${uname}`)
        .then(response => response.json())
        
        if(username.id) return username
        return "Not Found"
    }catch(error){
       console.log('error');
       throw error
      }
};

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();

  const coba = await getGitHubUser(elFormUsername.firstElementChild.value)

  if(coba.id){
      elCardImg.src = coba.avatar_url
      elCardTitle.innerHTML = coba.login
      elCardBtn.href = coba.html_url
      elCardBtn.classList.remove("d-none")
      elCardImg.classList.remove("d-none")
  }else{
    elCardTitle.innerHTML = "Not Found"
    elCardBtn.classList.add("d-none")
    elCardImg.classList.add("d-none")
  }
  elCard.classList.remove("d-none")
};
