const endpoint = `https://api.github.com/users/pragdua/repos`;

const getRepos = (repos) => {

    const newRepos =
        repos
            .sort(
                (a, b) => Number(new Date(b.updated_at)) - Number(new Date(a.updated_at))
            )
            .slice(0, 2);

    const [
        {
            name: firstRepoName,
            html_url: firstRepoURL,
            description: firstRepoDescription
        },
        {
            name: secondRepoName,
            html_url: secondRepoURL,
            description: secondRepoDescription
        }
    ] = newRepos;

   document.querySelector(".repos").innerHTML = 
   `
   
   <a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${firstRepoURL}">"${firstRepoName}"</a>
   (${firstRepoDescription}) and 
   <a class = "repoLink" target="_blank" rel="noopener noreferrer" href="${secondRepoURL}">"${secondRepoName}"</a>
   (${secondRepoDescription})

   `


}

const fetchData = () => {

    fetch(endpoint)
        .then(res => res.json())
        .then(data => getRepos(data));

}


fetchData();

const getMusic = () => {


    const options = {

        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer BQDOUAi3zvi6k7PV1lDN0jM92GMo-Viuh0jzCuxfIMHHZ3ceeySzF7wJzhiOllhusy3MQZHi5CkKGCV8WPEANfnZS4zrO1ey1ExJJ7ij5cSuZGli5Myj_-QT7TqElLaseUDag4YwUsqWlECSC8w5Piv1wKKpcRNoE8Q4cvrM"
        }
    }

    const renderMusic = (musicData) => {

        const artist = musicData.item.name;
        console.log(artist); 

        document.querySelector(".circl").innerHTML = `${artist}`; 
    

        
    }  

    fetch("https://api.spotify.com/v1/me/player/currently-playing?market=IN" , options)
        .then(res => res.json())
        .then(data => renderMusic(data));



}

getMusic();