import React, { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService';

const AddProduto = () => {

    const [nome, setNome] = useState('');
    const [linha, setLinha] = useState('');
    const [validade, setValidade] = useState('');
    const [valor, setValor] = useState('');
    const [produto, setProduto] = useState(null);

    const guardarDados = (e) => {
        
        e.preventDefault()
        
        if(!nome.trim()){
            console.log('campo nome esta vazio')
            return
        }
        
        if(!linha.trim()){
            console.log('campo linha vazio')
            return
        }
        if(!validade.trim()){
            console.log('campo linha vazio')
            return
        }

            if(!valor.trim()){
                console.log('campo linha vazio')
                return
            }
            
            setProduto(
                {
                    nome,
                    linha,
                    validade,
                    valor
                }
            )
    }

    useEffect(() => {

        ApiService.salvarProduto(produto).then( (res) => {
            alert('Produto: ', res, "adicionado")
            return setProduto([])
        })

    }, [produto]);

    return (
        <div className=''>

            <h2 className='bg-warning p-1 m-2 text-center' >Adicionar Produtos</h2>
            <form onSubmit={ guardarDados } >
                <input 
                    type="text"
                    placeholder="nome"
                    className="form-control mb-2"
                    onChange={ (e) => setNome(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="linha"
                    className="form-control mb-2"
                    onChange={ e => setLinha(e.target.value) }
                />
                 <input 
                    type="text"
                    placeholder="validade"
                    className="form-control mb-2"
                    onChange={ (e) => setValidade(e.target.value) }
                />
                 <input 
                    type="text"
                    placeholder="valor"
                    className="form-control mb-2"
                    onChange={ (e) => setValor(e.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>

        </div>
    )
}

export default AddProduto;