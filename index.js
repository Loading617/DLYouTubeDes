const link = document.createElement("a");
const image = document.createElement("img");
image.src = "./icons/dlyoutubedes.png";
image.alt = "DLYouTubeDes";
link.href = "https://dlyoutubedes.com";
link.appendChild(image);
document.body.appendChild(link);

document.querySelector(".button").addEventListener("click", () => {
    chrome.tabs.create({ url: "https://github.com/Loading617/DLYouTubeDes/issues/new", 
    });
});

const button = document.querySelector(".button");
button.addEventListener("click", () => {
    chrome.tabs.create({ url: "https://github.com/Loading617/DLYouTubeDes/issues/new", 
    });
});

const button = document.querySelector(".button");
button.addEventListener("click", () => {
    chrome.tabs.create({ url: "https://github.com/Loading617/DLYouTubeDes", 
    });
});

/* const button = document.querySelector(".button");
button.addEventListener("click", () => {
    chrome.tabs.create({ url: "https://dlyoutubedes.com/changelog", 
    });
}); */