// Image Previewer
function showPreview(event) {
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("previewAvatar");
    preview.src = src;
  }
}

// Check if it's not null, fully loaded
let openModalTrigger = document.getElementById("button");
if (openModalTrigger) {
  openModalTrigger.addEventListener("click", openModal);
}

// Open modal window and show preview data
function openModal() {
  document.getElementById("modal-wrapper").classList.add("visible");

  previewData();
}

// Check if modal window opened and active
let modalWindow = document.getElementById("modal-wrapper");
if (modalWindow) {
  modalWindow.addEventListener("click", closeModal);
}

// Close modal window
function closeModal() {
  modalWindow.classList.remove("visible");
}

// Data Acquisition for Preview
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

  let genderInput1 = document.getElementById("laki-laki");
  let genderCard = document.getElementById("previewGender");

  if (genderInput1.checked) {
    genderCard.innerHTML = "Laki-laki";
  } else {
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

  // Fixed
  /* let avatarInput = document.getElementById("avatar").value;
  let avatarCard = document.getElementById("previewAvatar");
  avatarCard.setAttribute("src", "img/" + avatarInput.split("\\").pop());
 */
}
