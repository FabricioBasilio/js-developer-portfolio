async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/FabricioBasilio/js-developer-portfolio/refs/heads/projeto-base/data/profile.json"
    const data = await fetch(url).then(data => data.json());
    console.log(data);
    
    return data;
}

