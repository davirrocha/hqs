let list = document.querySelector("ul")
let mainColor = document.querySelector("main")

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
    mainColor.style.borderColor = "#FF0000"
}

function dcList() {
    const dcFilter = menuOptins.filter(comicsDc => comicsDc.publishingHouse === "dc"
    )
    allList(dcFilter)
    mainColor.style.borderColor = "#001a65"
}


const changeComics = document.querySelector(".select-chacter")
console.log(changeComics)

const filter = menuOptins.filter(items => items.codigo === 103


)

console.log(filter)




const filterMarvel = document.querySelector(".marvel")
filterMarvel.addEventListener('click', marvelList)
const filterDc = document.querySelector(".dc")
filterDc.addEventListener('click', dcList)
allList()