function toggleMenu(){
    const menu = document.getElementById("menu");
    const body = document.getElementById("body");
    menu.classList.toggle("menu-hide");
    if (menu.classList.contains("menu-hide")) {
        body.style.gridTemplateColumns = "1fr";
        body.style.gridTemplateRows = "auto 1fr auto";
        body.style.gridTemplateAreas = `
            "header"
            "main"
            "footer"
        `;
    } else {
        body.style.gridTemplateColumns = "300px 1fr";
        body.style.gridTemplateRows = "auto 1fr auto";
        body.style.gridTemplateAreas = `
            "header header"
            "sidebar main"
            "footer footer"
        `;
    }

}

document.addEventListener("DOMContentLoaded", function () {
  const settingsBox = document.createElement("div");
  settingsBox.id = "settings-box";
  settingsBox.style.width = "250px";
  settingsBox.style.padding = "20px";
  settingsBox.style.border = "2px solid #333";
  settingsBox.style.fontFamily = "Arial, sans-serif";

  function createOption(text, handler) {
    const option = document.createElement("div");
    option.textContent = text;
    option.style.margin = "10px 0";
    option.style.cursor = "pointer";
    option.style.color = "blue";

    option.addEventListener("mouseover", () => {
      option.style.textDecoration = "underline";
    });
    option.addEventListener("mouseout", () => {
      option.style.textDecoration = "none";
    });

    option.addEventListener("click", handler);
    return option;
  }

  settingsBox.appendChild(createOption("Reset Inventory Records", resetInventory));
  settingsBox.appendChild(createOption("Reset Order Records", resetOrders));
  settingsBox.appendChild(createOption("Change PIN", changePIN));
  settingsBox.appendChild(createOption("Change Password", changePassword));
  settingsBox.appendChild(createOption("Logout", logout));

  //document.body.appendChild(settingsBox);
document.querySelector("main").appendChild(settingsBox);


  const savedPIN = localStorage.getItem("userPIN");

  if (savedPIN) {
    const inputPIN = prompt("Enter your PIN to continue:");
    if (inputPIN !== savedPIN) {
      alert("Incorrect PIN. Access denied.");
      settingsBox.style.display = "none";
    }
  } else {
    alert("No PIN set. Please set one using 'Change PIN'.");
  }
});

function resetInventory() {
  alert("Inventory records have been reset.");
}

function resetOrders() {
  alert("Order records have been reset.");
}

function changePIN() {
  const newPIN = prompt("Enter new PIN:");
  if (newPIN) {
    localStorage.setItem("userPIN", newPIN);
    alert("PIN saved successfully.");
  } else {
    alert("PIN not changed.");
  }
}

function changePassword() {
  const newPassword = prompt("Enter new password:");
  if (newPassword) {
    localStorage.setItem("userPassword", newPassword);
    alert("Password saved successfully.");
  } else {
    alert("Password not changed.");
  }
}

function logout() {
  alert("Logged out.");
}

