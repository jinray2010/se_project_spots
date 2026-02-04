const profile = document.querySelector(".profile");
const editProfileBtn = profile.querySelector(".profile__edit");
const newPostBtn = profile.querySelector(".profile__new-post");
const profileName = profile.querySelector(".profile__text-name");
const profileDesc = profile.querySelector(".profile__text-description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__exit");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#name");
const editProfileDescInput = editProfileModal.querySelector("#description");

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__exit");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector("#link");
const newPostCapInput = newPostModal.querySelector("#caption");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileName.textContent;
  editProfileDescInput.value = profileDesc.textContent;
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDesc.textContent = editProfileDescInput.value;
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

newPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(newPostLinkInput.value);
  console.log(newPostCapInput.value);
  newPostModal.classList.remove("modal_is-opened");
});
