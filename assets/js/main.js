function updateProfileInfo(profileData) {
  const profilePhoto = document.getElementById("profile_photo");
  const profileName = document.getElementById("profile_name");
  const profileJob = document.getElementById("profile_job");
  const profileLocation = document.getElementById("profile_location");
  const profilePhone = document.getElementById("profile_phone");
  const profileEmail = document.getElementById("profile_email");

  profilePhoto.setAttribute("src", profileData.foto_perfil);
  profilePhoto.setAttribute("alt", profileData.nome);

  profileName.innerHTML = profileData.nome;

  profileJob.innerHTML = profileData.titulo;

  profileLocation.innerHTML = profileData.localidade.estado;

  profilePhone.innerHTML = profileData.telefone;
  profilePhone.setAttribute("href", "tel:(96) 98104-8077");

  profileEmail.innerHTML = profileData.email;
  profileEmail.setAttribute("href", "mailto:fabriciobasilioo@gmail.com");
}

function updateSoftSkills(softSkills) {
  const softSkillsList = document.getElementById("profile_soft_skills");
  softSkillsList.innerHTML = softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(hardSkills) {
  const hardSkillsList = document.getElementById("profile_hard_skills");
  hardSkillsList.innerHTML = hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.nome}" title="${skill.nome}" /></li>`
    )
    .join("");
}

function updateLanguages(idiomas) {
  const idiomasList = document.getElementById("profile_idiomas");
  idiomasList.innerHTML = idiomas
    .map((idioma) => `<li>${idioma.nome} (${idioma.nivel})</li>`)
    .join("");
}

function updatePortfolio(portfolio) {
  const portfolioElement = document.getElementById("profile_portfolio");
  portfolioElement.innerHTML = portfolio
    .map((project) => {
      return `<li>
      <h3 class="title github">${project.nome}</h3>
      <a href="${project.url}" target="_blank">${project.url}</a>
      </li>`;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfileData();
  console.log(profileData);

  updateProfileInfo(profileData);
  updateSoftSkills(profileData.skills.softSkills);
  updateHardSkills(profileData.skills.hardSkills);
  updateLanguages(profileData.idiomas);
  updatePortfolio(profileData.portfolio);
})();
