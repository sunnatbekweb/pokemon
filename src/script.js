const wrapper = document.querySelector(".wrapper")

const render = (arr) => {
    let res = "";
    arr.map((value) => {
        res += `
        <div class="card bg-white w-[310px] rounded-[28px] border-2 border-black">
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
                    <p class="font-bold text-2xl">${value.height}</p>
                </div>
            </div>
        </div>
        `
    })

    wrapper.innerHTML = res
}

render(pokemons)
