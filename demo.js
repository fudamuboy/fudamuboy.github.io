// KARTAL GENERATOR
function addEagleItems(container, count) {
    for (let i = 0; i < count; i++) {
        const eagleItem = document.createElement("div");
        eagleItem.classList.add("binary-item");
        eagleItem.textContent = "kartal"; // 0 & 1 yerine "kartal"
        container.appendChild(eagleItem);
    }
}

// Sayfa Yüklendiğinde
document.addEventListener("DOMContentLoaded", function () {
    const binaryContainer = document.getElementById("binary-container");
    const itemCount = 6000;
    addEagleItems(binaryContainer, itemCount);
});
