let list = document.querySelector("ul")
let myList = ''
const btnReload = document.querySelector('#reload')

btnReload.addEventListener('click', () => {
    location.reload()
})

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

const marvelFilter = document.querySelector('#marvel')

marvelFilter.addEventListener('click', () => {
    const marvel = menuOptins.filter(item => item.publishingHouse === "marvel")
    allList(marvel)
})

const dcFilter = document.querySelector('#dc')

dcFilter.addEventListener('click', () => {
    const dcComics = menuOptins.filter(item => item.publishingHouse === "dc")
    allList(dcComics)
})









changeComics.addEventListener("change", filter)


allList()
