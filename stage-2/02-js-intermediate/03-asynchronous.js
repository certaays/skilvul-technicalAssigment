import fetch from 'node-fetch'

const getGitHubUser = async (uname) => {
    try{
        if(!uname) return null
        const username = await fetch(`https://github.com/${uname}`)
        .then(response => response.json())
        if(username.id){
            return username
        }
        return "not Found"
      }catch(error){
       console.log('error');
       throw error
      }
}

const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();
