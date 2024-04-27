let list = document.querySelector("ul")


let myList = ''
menuOptins.forEach(item => {
    myList += `
        <li>
            <img src=${item.capa}>
            <p>${item.name}</p>
            <p>ANO: ${item.year}</p>
        </li>
     `
    list.innerHTML = myList
})


function allList(comics) {
    let myList = ''

    comics.forEach(item => {
        myList += `
            <li>
                <img src=${item.capa}>
                <p>${item.name}</p>
                <p>ANO: ${item.year}</p>
            </li>
     `
        list.innerHTML = myList


    })
}


function marvelList() {
    const marvelFilter = menuOptins.filter(comicsMarvel => comicsMarvel.publishingHouse === "marvel"
    )
    allList(marvelFilter);
        list.style.borderColor = "#FF0000"
}

function dcList() {
    const dcFilter = menuOptins.filter(comicsDc => comicsDc.publishingHouse === "dc"
    )
    allList(dcFilter);
        list.style.borderColor = "#001a65"
}


const filterMarvel = document.querySelector(".marvel")
filterMarvel.addEventListener('click', marvelList)
const filterDc = document.querySelector(".dc")
filterDc.addEventListener('click', dcList)
allList()


