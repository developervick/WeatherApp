window.onload = main()

function main() {

    const city  = document.querySelector("#city")
    document.querySelector("#get-weather").addEventListener("click", (e) => {
        e.preventDefault()
        getData(city.value).then((res) => {
            document.querySelector("#temp").innerText = res.current.temp_c
        })
    })
    
}

async function getData(query) {
    let data = await fetch("http://api.weatherapi.com/v1/current.json?"+ new URLSearchParams({
        q:`${query}`,
        key:"0d2da0b3f99d4b90b9e175953231808" }),
    {
        method:"GET",
    }
    )
    .then((res) => res.json())
    .then((data) => {
        return data
    })

    return data
}

function controllModel() {
    console.log("called")
    let model = document.querySelector("#model")
    model.classList.remove("hidden")
    model.classList.add("flex" ,"flex-col")

    document.querySelector("#cross").addEventListener("click", ()=>{
        document.querySelector("#model").style.display = "none"
    })
}