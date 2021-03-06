import axios from 'axios';

// export default axios.create({
//     baseURL: "http://192.168.29.105:4000"
// });

// const baseURL = "http://192.168.29.105:4000";
const baseURL = "https://native-task1.herokuapp.com";

// const getData1 = async () => {
//     let response = await Server.get("/getitembyid/1");
//     // let response = await fetch("http://192.168.29.105:4000/getitembyid/1");

//     if (response) {
//         let responseData = response.data.data
//         setData(responseData)
//         // console.log(response.data.data)
//     } else {
//         console.log("Error", response)
//     }



// }

// const getData2 = React.useCallback(() => {
//     fetch('http://192.168.29.105:4000/getitembyid/1')
//         .then((response) => response.json())
//         .then((json) => {
//             // setData(json)
//             console.log(json)
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }, [])

export function getItembyCatId(id) {
    return axios({
        method: "GET",
        url: baseURL + `/getitembycatid/${id}`
    })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log("object", error)
            return error.response;
        });
}

export function getItembyId(id) {
    return axios({
        method: "GET",
        url: baseURL + `/getitembyid/${id}`
    })
        .then(data => {
            // console.log("from service" ,data.data)
            return data;
        })
        .catch(error => {
            console.log("object", error)
            return error.response;
        });
}

export function cartItems() {
    return axios({
        method: "GET",
        url: baseURL + `/cartitems`
    })
        .then(data => {
            // console.log(data)
            return data;
        })
        .catch(error => {
            console.log("object", error)
            return error.response;
        });
}
export function deleteItem(id) {
    return axios({
        method: "DELETE",
        url: baseURL + `/deleteitem/${id}`
    })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log("object", error)
            return error.response;
        });
}
export function updateQuantity(id, quantity) {
    return axios({
        method: "PUT",
        url: baseURL + `/updatequantity/${id}`,
        data: {
            quantity: quantity
        }
    })
        .then(data => {
            // console.log(data)
            return data;
        })
        .catch(error => {
            console.log("object", error)
            return error.response;
        });
}
export function addToCart(itemId) {
    // console.log(itemId)
    return axios({
        method: "POST",
        url: baseURL + `/addtocart/${itemId}`
    })
        .then(data => {
            // console.log(data)
            return data;
        })
        .catch(error => {
            console.log("object", error.response)
            return error;
        });
}
export function emptyCart() {
    return axios({
        method: "DELETE",
        url: baseURL + `/emptycart`
    })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log("object", error)
            return error.response;
        });
}

