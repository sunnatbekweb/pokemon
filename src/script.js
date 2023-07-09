const wrapper = document.querySelector(".wrapper")

const render = (arr) => {
    let res = "";
    arr.map((value) => {
        res += `
        <div class="card bg-white w-[310px] rounded-[28px] border-2 border-black hover:shadow-xl transition-all">
            <div class="border-b-2 border-black">
                <img src="${value.img}" class="mx-auto mt-8 mb-[66px]" alt="image">
            </div>
            <div class="card_body pt-5 px-5 pb-[30px]">
                <div class="flex justify-between">
                    <h2 class="font-bold text-2xl">${value.name}</h2>
                    <i class="bi bi-suit-heart font-bold text-2xl"></i>
                </div>
                <p class="font-medium text-xl mb-[25px]">${value.type}</p>
                <div class="flex justify-between">
                    <pc class="font-bold text-2xl">${value.weight}</pc>
                    <p class="font-bold text-2xl">${value.candy_count}</p>
                </div>
            </div>
        </div>
        `
    })

    wrapper.innerHTML = res
}

render(pokemons)

// ----------------------- Search ------------------------

const search = document.querySelector(".search")

search.addEventListener("input", (e) => {
    let result = pokemons.filter((v) => v.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    render(result)
})

// ----------------------- Search end -------------------------

// ----------------------- Filtered search ------------------------

const gross = document.getElementById("filter")

let ty = [];
pokemons.forEach((e) => {
    for (const iterator of e.type) {
        ty.push(iterator)
    }
})

const types = [...new Set(ty)];

types.forEach((v) => {
    let opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    gross.append(opt);
})