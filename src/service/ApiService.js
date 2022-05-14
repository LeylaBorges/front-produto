import axios from "axios";

const PROD_API_BASE_URL = 'http://localhost:8080';

class ApiService { 
    /**
    * Busca os veiculos
    * @returns{Promise<AxiosResponse<any>>}
    */
    // LISTAR
    listarUsuarios() {
        return axios.get(PROD_API_BASE_URL + '/listar-cosmeticos');
    }

    // SALVAR
    salvarProduto(produto) {
        return axios.post(PROD_API_BASE_URL + '/salvar-cosmetico' , produto);
    }
}

export default new ApiService();