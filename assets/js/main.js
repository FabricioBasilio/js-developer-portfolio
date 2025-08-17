
function updateProfileInfo(profileData) {
    const profilePhoto = document.getElementById("profile_photo")
    const profileName = document.getElementById("profile_name")
    const profileJob = document.getElementById("profile_job")
    const profileLocation = document.getElementById("profile_location")
    const profilePhone = document.getElementById("profile_phone")
    const profileEmail = document.getElementById("profile_email")



    profilePhoto.setAttribute("src", profileData.foto_perfil)
    profilePhoto.setAttribute("alt", profileData.nome)

    profileName.innerHTML = profileData.nome;

    profileJob.innerHTML = profileData.titulo;

    profileLocation.innerHTML = profileData.localidade.estado;
    profilePhone.innerHTML = profileData.telefone
    profilePhone.setAttribute("href", "tel:(96) 98104-8077")

    profileEmail.innerHTML = profileData.email
    profileEmail.setAttribute("href", "mailto:fabriciobasilioo@gmail.com")


    

}


(async () => {
    const profileData = await fetchProfileData()
    console.log(profileData);

    updateProfileInfo(profileData)









})();