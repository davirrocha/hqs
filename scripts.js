let list = document.querySelector("ul")
let mainColor = document.querySelector("main")
let myList = ''

menuOptins.forEach(item => {
    myList += `
        <li>
            <img src=${item.capa}>
            <p>${item.name}</p
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


const changeComics = document.querySelector(".select-chacter");

function filter() {

    const batman = menuOptins.filter(item => item.codigo === 101 && changeComics.value === "101")
    const flash = menuOptins.filter(item => item.codigo === 102 && changeComics.value === "102")
    const spider = menuOptins.filter(item => item.codigo === 103 && changeComics.value === "103")
    const xmen = menuOptins.filter(item => item.codigo === 105 && changeComics.value === "105")
    const iron = menuOptins.filter(item => item.codigo === 106 && changeComics.value === "106")
    const superman = menuOptins.filter(item => item.codigo === 104 && changeComics.value === "104")
    allList(batman)
    allList(flash)
    allList(spider)
    allList(xmen)
    allList(superman)
    allList(iron)
}








changeComics.addEventListener("change", filter)
const filterMarvel = document.querySelector(".marvel")
filterMarvel.addEventListener('click', marvelList)
const filterDc = document.querySelector(".dc")
filterDc.addEventListener('click', dcList)
allList()
