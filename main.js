const markAll= document.querySelector('#mark-all'); // un boton que dara una accion
const numberElement= document.querySelector('#number'); //seleccionamos el elemento number para modificarlo
const posts = document.querySelectorAll('.post');

posts.forEach(post=>{
    post.addEventListener('click',()=>{
        post.querySelector('.not-read').classList.remove('not-read');
        
        updateNotifications();
    })

})


markAll.addEventListener('click',()=>{ //la accion que realizara el boton
    //la cantidad de elementos con not-read es de 3 
    const notReadElements = document.querySelectorAll('.not-read'); //selecciona todos los elementos con nombre clase .not-read
    notReadElements.forEach(notReadElement=>{ //se le removera la clase not-read a cada elemento que lo tenga 
        notReadElement.classList.remove('not-read');
    })
    //despues de remover la calse not-read a cada elemento su tamaño es 0
   updateNotifications();
    
})

const updateNotifications= ()=>{
    const notReadElementsActual = document.querySelectorAll('.not-read'); //recalculamos la cantidad de elementos que que tenemos actualmente con not-read
    numberElement.innerText= notReadElementsActual.length;//se modifica el texto al elemnto number
}