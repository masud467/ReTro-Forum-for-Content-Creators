const loadCard = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    const data = await res.json()
    const cards = data.posts
    console.log(cards)
    displayCard(cards)
}


const displayCard = (cards) => {
    const postContainer = document.getElementById('post-container')

    cards.forEach(card => {
        const postCard = document.createElement('div')
        postCard.classList = 'card card-side bg-base-100 shadow-xl p-7'
        postCard.innerHTML = `
        <div  class="indicator">
        <figure class='w-16 h-16 rounded-2xl'><img src="${card.image}" alt="Movie"/></figure>
        <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
       
        <div>
            <div class="flex gap-8 ml-8">
               <p><span>#</span>${card.category}</p>
               <p><span>Author:</span> ${card.author.name}</p>
            </div>
            <div class="card-body">
                <h2 class="card-title">${card.title}</h2>
                <p>${card.description}</p>
                <hr>
               <div class="flex justify-around ">
              
               <div class="flex gap-6">
                  <div class="flex gap-3">
                      <img src="icon/comment.png" alt="">
                       <span>${card.comment_count}</span>
                   </div>
                  <div class="flex gap-3">
                      <img src="icon/eye.png" alt="">
                       <span>${card.view_count}</span>
                   </div>
                  <div class="flex gap-3">
                      <img src="icon/clock.png" alt="">
                       <span>${card.posted_time} min</span>
                   </div>
               </div>
                <div class="">
                <img onclick="" src="icon/Vector.svg" alt="">
                </div>
               </div>
            </div>
        </div>`

        postContainer.appendChild(postCard)
    });

    
}

loadCard()