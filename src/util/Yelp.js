

const apiKey = 'AzVSpSale9UCZ3qkcExtwzoX-9dPqEQgjQ4fch8XtTSmnxyt0aqfTnrNBJgOMq_voHAz8VNkajMpTkyubU-IbY7ehCd46egLrRy9xtGOHHBJQIZiZTKgyEQkUtNPY3Yx'

const Yelp = {

search (term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
     {headers : {
        Authorization: `Bearer ${apiKey}`,
        },
    }).then(response => {
        return response.json()
    }).then(jsonResponse => {
        if (jsonResponse.businesses){
            //console.log(businesses);
            return jsonResponse.businesses.map(business => {
                 return { id : business.id, 
                 imageSrc : business.image_url,
                 business :  business.name,  
                 address : business.location.address1, 
                 city : business.location.city, 
                 state : business.location.state, 
                 zipCode : business.location.zipCode, 
                 category : business.categories[0].title,  
                 rating : business.rating, 
                 reviewCount : business.review_count};
            })

        }  });

}

}

export default Yelp;