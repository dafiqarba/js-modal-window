let openModalTrigger = document.getElementById("button");

openModalTrigger.addEventListener("click", openModal);

function openModal() {
  document.getElementById("modal-wrapper").classList.add("visible");

  previewData();
}

function previewData() {
  let nameInput = document.getElementById("name").value;
  let nameCard = document.getElementById("previewName");
  nameCard.innerHTML = nameInput;

  let birthdateInput = document.getElementById("birthdate").value;
  let birthdateCard = document.getElementById("previewBirthdate");
  birthdateCard.innerHTML = birthdateInput;

  let educationInput = document.getElementById("education").value;
  let educationCard = document.getElementById("previewEducation");
  educationCard.innerHTML = educationInput;

  let skillsInput = document.getElementById("skills").value;
  let skillsCard = document.getElementById("previewSkills");
  skillsCard.innerHTML = skillsInput;

  let emailInput = document.getElementById("email").value;
  let emailCard = document.getElementById("previewEmail");
  emailCard.innerHTML = emailInput;

  let phoneInput = document.getElementById("phone").value;
  let phoneCard = document.getElementById("previewPhone");
  phoneCard.innerHTML = phoneInput;

  let genderInput1 = document.getElementById("laki-laki").value;
  if (genderInput1 == "laki-laki") {
    let genderCard = document.getElementById("previewGender");
    genderCard.innerHTML = "Laki-laki";
  }

  let genderInput2 = document.getElementById("perempuan").value;
  if (genderInput2 == "perempuan") {
    let genderCard = document.getElementById("previewGender");
    genderCard.innerHTML = "Perempuan";
  }

  let religionInput = document.getElementById("religion").value;
  if (religionInput == "islam") {
    let religionCard = document.getElementById("previewReligion");
    religionCard.innerHTML = "Islam";
  } else if (religionInput == "kristen") {
    let religionCard = document.getElementById("previewReligion");
    religionCard.innerHTML = "Kristen";
  } else if (religionInput == "katolik") {
    let religionCard = document.getElementById("previewReligion");
    religionCard.innerHTML = "Katolik";
  } else if (religionInput == "hindu") {
    let religionCard = document.getElementById("previewReligion");
    religionCard.innerHTML = "Hindu";
  } else {
    let religionCard = document.getElementById("previewReligion");
    religionCard.innerHTML = "Buddha";
  }

  let addressInput = document.getElementById("address").value;
  let addressCard = document.getElementById("previewAddress");
  addressCard.innerHTML = addressInput;

  let githubInput = document.getElementById("github").value;
  let githubCard = document.getElementById("previewGithub");
  githubCard.setAttribute("href", "https://github.com/" + githubInput);

  let instagramInput = document.getElementById("instagram").value;
  let instagramCard = document.getElementById("previewInstagram");
  instagramCard.setAttribute("href", "https://instagram.com/" + instagramInput);
}

let modalWindow = document.getElementById("modal-wrapper");
modalWindow.addEventListener("click", closeModal);

function closeModal() {
  modalWindow.classList.remove("visible");
}
