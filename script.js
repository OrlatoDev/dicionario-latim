document.getElementById("search").onclick = () => {
    let word = document.getElementById("word").value
    let url = `https://api-dicionario-portugues-latim.herokuapp.com/?palavra=${word}`

    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()

    document.getElementById("results").innerHTML = ""

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText)
        
        for (let i = 0; i < Object.keys(data).length - 1; i++) {
            const element = data[i];

            try {
                document.getElementById("results").innerHTML += `
                <div class="p-5">
                    <h3 class="font-bold text-lg">${element[0]}</h3>
                    <p class="mt-1">
                        ${element[1].replace("\n", "<br>")}
                    </p>
                </div>`
            } catch (error) {
                document.getElementById("results").innerHTML += `
                <div class="p-5">
                    <h3 class="font-bold text-lg">${element[0]}</h3>
                </div>`
            }
        }
    }
}