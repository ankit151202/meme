async function fetchMemes() {
    const apiUrl = "https://api.imgflip.com/get_memes";
    const container = document.getElementById("memeContainer");
    // meme.js
function searchMemes() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const memes = document.querySelectorAll('.card');
    
    memes.forEach(meme => {
        const title = meme.querySelector('h3').innerText.toLowerCase();
        if (title.includes(query)) {
            meme.style.display = 'block';
        } else {
            meme.style.display = 'none';
        }
    });
}

    

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
            const memes = data.data.memes;
            memes.forEach((meme) => {
                const card = document.createElement("div");
                card.className = "card";

                const img = document.createElement("img");
                img.src = meme.url;
                img.alt = meme.name;

                const title = document.createElement("h3");
                title.textContent = meme.name;
                card.appendChild(img);
                card.appendChild(title);
                container.appendChild(card);
            });
        } else {
            console.error("Failed to fetch memes:", data.error_message);
            container.textContent = "Failed to load memes. Please try again later.";
        }
    } catch (error) {
        console.error("Error fetching memes:", error);
        container.textContent = "An error occurred while fetching memes.";
    }
}
fetchMemes();
