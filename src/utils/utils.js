export const addToFavorites = (path,title,year,id) =>{
    let favorites = [];
    let favMovie = {"imdbID":id,"Year":year,"Title":title,"Poster":path};
    if(localStorage.getItem("favorites") !== null){
        favorites = JSON.parse(localStorage.getItem("favorites"));
        favorites = [...favorites,favMovie];
    }else{
        favorites.push(favMovie);
    }
    localStorage.setItem("favorites",JSON.stringify(favorites))
}

export const removeFromFavorites = (id) =>{
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if(favorites){
        let favToSave = favorites.filter(fav=>fav.imdbID !== id);
        localStorage.setItem("favorites",JSON.stringify(favToSave))
    }
}

export const isMovieFavorite = (id) =>{
    if(localStorage.getItem("favorites") !== null){
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        return favorites.some(fav=>fav.imdbID === id);
    }
}

export const margeAndRemoveDuplicate = (array1,array2) =>{
    let newArray = [...array1,...array2];
    const uniqueArray = Array.from(new Set(newArray.map(a => a.imdbID)))
    .map(imdbID => {
      return newArray.find(a => a.imdbID === imdbID)
    })
    return uniqueArray;
}

       
