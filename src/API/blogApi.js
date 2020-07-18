import axios from 'axios';

//Add blog
export const addBlog = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://filterio.herokuapp.com/blogPackage/addBlog";
        axios.post(REQUEST_URL,body)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                console.log(err);
                reject(null);
            })
    });
};

//Get Blog

export const getBlog = () => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://filterio.herokuapp.com/blogPackage/get";
        axios.get(REQUEST_URL)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};

//Get Selected Blog

export const getSelectedBlog = ({body=null}) => {
    return new Promise((resolve, reject) => {
        let REQUEST_URL = "https://filterio.herokuapp.com/blogPackage/getSelectedBlog/" + body._id;
        axios.get(REQUEST_URL,body)
            .then((response) => {
                resolve(response.data)
            }).catch((err) => {
                reject(null);
            })
    });
};