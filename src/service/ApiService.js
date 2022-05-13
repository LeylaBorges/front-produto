import axios from "axios";

const PROD_API_BASE_URL = 'http://localhost:8080';

const ApiService = { 
    // LISTAR
    listarUsuarios() {
        return axios.get(PROD_API_BASE_URL + '/listar-cosmeticos');
    }
}

export default ApiService;