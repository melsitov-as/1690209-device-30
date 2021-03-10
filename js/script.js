var popupWriteLink = document.querySelector(".main-contacts__btn");
var popupWrite = document.querySelector(".popup-write-us");
var popupWriteClose = document.querySelector(".popup-write-us__close");
var userName = popupWrite.querySelector("input[name=user-name]");
var userEmail = popupWrite.querySelector("input[name=user-email]");
var userTextArea = popupWrite.querySelector("textarea[name=user-message]");
var popupWriteForm = popupWrite.querySelector(".popup-form");
var popupMapLink = document.querySelector(".main-contacts__map");
var popupMap = document.querySelector(".popup-map");
var popupMapClose = document.querySelector(".popup-map__close");

let isStorageSupport = true;
let storageUserName = "";
let storageUserEmail = "";

try {
  storageUserName = localStorage.getItem("username");
  storageUserEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

popupWriteLink.addEventListener("click", function(evt){
  evt.preventDefault();
  popupWrite.classList.add("popup-write-us--active");
  if (storageUserName) {
    userName.value = storageUserName;
    userEmail.focus();
  } else {
    userName.focus();
  };

  if (storageUserEmail) {
    userEmail.value = storageUserEmail;
    userTextArea.focus();
  } else {
    userEmail.focus();
  };
});

popupWriteClose.addEventListener("click", function(evt){
  evt.preventDefault();
  popupWrite.classList.remove("popup-write-us--active");
})

popupWriteForm.addEventListener("submit", function(evt){
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupWrite.classList.add("popup-write-us--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", userName.value);
    localStorage.setItem("email", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWrite.classList.contains("popup-write-us--active")) {
      popupWrite.classList.remove("popup-write-us--active");
      popupWrite.classList.remove("popup-write-us--error");
    }
  }
});

popupMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-map--active");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("popup-map--active")) {
      popupMap.classList.remove("popup-map--active");
    }
  }
});

popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-map--active");
});