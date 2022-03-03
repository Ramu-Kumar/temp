import axios from 'axios';
import { cuForm_POST_URL } from './../component/Utils/cuFormData';

const cuFormPost = (formData) => {

    return axios({
        method: "POST",
        url: cuForm_POST_URL,
        data: formData
    })
}

export {
    cuFormPost
}