import api from "../config/axios";

const create = () => {


    const getQuestions = (limit = '', category = '', difficulty = '') => api().get(`?amount=${limit}&category=${category}&difficulty=${difficulty}&type=multiple`);

    return {
        getQuestions
    }
}

const API = create();
export default API;