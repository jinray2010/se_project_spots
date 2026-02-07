const initialCards = [
  {
    name: "Val Thorien",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Resturaunt Terrace",
    link: "./images/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest...",
    link: "./images/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".cards");

const profile = document.querySelector(".profile");
const editProfileBtn = profile.querySelector(".profile__edit");
const newPostBtn = profile.querySelector(".profile__new-post");
const profileName = profile.querySelector(".profile__text-name");
const profileDescription = profile.querySelector(".profile__text-description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__exit");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#name");
const editProfileDescriptionInput =
  editProfileModal.querySelector("#description");

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__exit");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector("#link");
const newPostCaptionInput = newPostModal.querySelector("#caption");

const previewModal = document.querySelector("#preview-modal");
const previewLink = previewModal.querySelector(".modal__preview-image");
const previewExit = previewModal.querySelector(".modal__preview-exit");
const previewCaption = previewModal.querySelector(".modal__preview-text");

function openModal(obj) {
  obj.classList.add("modal_is-opened");
}

function closeModal(obj) {
  obj.classList.remove("modal_is-opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardCaption = cardElement.querySelector(".card__caption");
  cardCaption.textContent = data.name;

  const cardLink = cardElement.querySelector(".card__image");
  cardLink.src = data.link;
  cardLink.alt = data.name;

  const cardLike = cardElement.querySelector(".card__like");
  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("card__like_active");
  });

  const cardTrash = cardElement.querySelector(".card__trash");
  cardTrash.addEventListener("click", () => {
    cardElement.remove();
  });

  cardLink.addEventListener("click", () => {
    previewCaption.textContent = data.name;
    previewLink.src = data.link;
    previewLink.alt = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

newPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  cardsContainer.prepend(
    getCardElement({ name: newPostCaptionInput.value, link: newPostLinkInput }),
  );
  closeModal(newPostModal);
});

previewExit.addEventListener("click", () => {
  closeModal(previewModal);
});

initialCards.forEach(function (pic) {
  cardsContainer.prepend(getCardElement(pic));
});
