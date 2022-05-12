

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        loadingData(true)

        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
            // console.log(data);
            pintarData(data)

    } catch (error) {

        
    }finally{
        
        loadingData(false)        
    }
}       


const pintarData = (data ) => {
    const cards = document.getElementById('card-dinamica');
    const templateCard = document.getElementById('template-card').content;  
    const fragment = document.createDocumentFragment();
    // console.log(data);

    data.results.forEach(item => {
        // console.log(item);
        const clone = templateCard.cloneNode(true);

        clone.querySelector('h5').textContent = item.name
        clone.querySelector('p').textContent = item.species
        clone.querySelector('img').setAttribute("src", item.image)




        fragment.appendChild(clone);
        cards.appendChild(fragment)

    });
}

/*sacar y colocar el spinner*/
const loadingData = estado => {
    const loading = document.getElementById('loading')
    if (estado) {
        loading.classList.remove('d-none');
    }else{
        loading.classList.add('d-none');
    }
    
}