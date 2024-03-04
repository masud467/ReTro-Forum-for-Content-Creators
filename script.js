const loadPost = async(categoryName=categoryName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    const data = await res.json()
    const cards = data.posts
    console.log(cards)
    displayPost(cards)
  
    
}


const displayPost = (cards) => {
    
    const postContainer = document.getElementById('post-container')
    postContainer.innerHTML = ''
    
    cards.forEach(card => {
        
        const postCard = document.createElement('div')
        postCard.classList = 'card card-side bg-base-100 shadow-xl p-7'
        postCard.innerHTML = `
        <div class="indicator">
        <figure class='w-16 h-16 rounded-2xl'><img src="${card.image}" alt="Movie"/></figure>
        <span id="indicator-color" class="badge badge-xs bg-green-600 badge-primary indicator-item"></span>
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
                <img onclick="detailShow()" src="icon/Vector.svg" alt="">
                </div>
               </div>
            </div>
        </div>`

        postContainer.appendChild(postCard)

        
    
    
    });   

   
    

    toggledLoadingSpinner(false)


   
}






const handleSearch = () => {
    toggledLoadingSpinner(true)
    const searchShow = document.getElementById('search-show')
    const searchShowText = searchShow.value 
    console.log(searchShowText)
   
    loadPost(searchShowText)
    
}


const toggledLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner-show')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

const detailShow = () => {
    const cardShowContainer = document.getElementById('card-show')
    const cardShow = document.createElement('div')
    
        cardShow.innerHTML= `
        <div class="flex gap-x-24">
        
    <div class="bg-white mt-5 p-7 flex gap-5">
        <h1>10 Kids Unaware of Their Halloween Costume </h1>
        <img class="w-5 h-5" src="icon/eye.png" alt="">
        <p>1568</p>

    </div>
    
    
    `

    cardShowContainer.appendChild(cardShow)

    

}



const LoadLatestPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const posts = await res.json()
    console.log(posts)
    displayLatestPost(posts)
}


const displayLatestPost = (posts) => {
    const latestPostContainer = document.getElementById('latest-post-container')
    
   posts.forEach(post =>{
    const latestPostCard = document.createElement('div')
    latestPostCard.classList = 'card w-96 bg-base-100 shadow-xl'
    latestPostCard.innerHTML = `
    <figure class="px-10 pt-10">
    <img src="${post.cover_image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body">
   <div class="flex gap-3">
   <img src="icon/calender.png" alt="">
  <h2 class="card-title">${post.author?.posted_date? post.author.posted_date : 'No publish date'}</h2>
   </div>
    <p class="font-extrabold">${post.title}</p>
    <p>${post.description}</p>
    <div class="flex gap-4">
    <img class='w-11 h-11 rounded-full mt-2'  src="${post.profile_image}" alt="Shoes" class="rounded-xl" />
    <div class="space-y-1">
    <p class="font-extrabold">${post.author.name}</p>
    <p>${post.author?.designation? post.author.designation : 'Unknown'}</p>
    </div>
    </div>
    
  </div> 
  
  `

  latestPostContainer.appendChild(latestPostCard)
   })

  
}




handleSearch()
loadPost()
LoadLatestPost()