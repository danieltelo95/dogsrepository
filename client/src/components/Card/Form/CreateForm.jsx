import { useState } from "react"
import axios from "axios"

import './form.styles.css'

const FormCreate = () => {
    const [postDog, setPostDog] = useState(false)
    const [create, setCreate] = useState(true)
    const [input, setInput] = useState({
        name: '',
        image: '',
        minheight: '',
        maxheight: '',
        minweight:'',
        maxweight: '',
        life_span: '',
        temperament: [],
    })

    // const [error, setError] = useState ({
    //     name: '',
    //     image: '',
    //     minheight: '',
    //     maxheight: '',
    //     minweight:'',
    //     maxweight: '',
    //     life_span: '',
    //     teperament: [],
    // })

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })    
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!input.name || !input.minheight || !input.minweight ||!input.life_span || !input.temperament){
            alert('Complete los campos obligatorios')
        return
        }
    try {
        let newDog = {
            name: input.name,
            image: input.image,
            height: `${input.minheight} - ${input.maxheight}`,
            weight: `${input.minweight} - ${input.maxheight}`,
            life_span: input.life_span,
            temperament: input.temperament
        }

        const response = await axios.post('http://localhost:3001/dogs/', newDog)

        if(response){
            setPostDog(true)
            setCreate(false)
        }else console.log('Hubo un error al crear al perro');
    } catch (error) {
        console.error('Error al enviar los datos a la base de datos: ', error)
    }
    }

    return (
        <>
        {postDog &&
            <div>
                <h2>Dog breed created succesfully</h2>
            </div>
        }
            {create &&
                <div className="form-container">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <h2 className="form-title">Create a new dog breed</h2>
                            <label className="form-label">Name:</label>
                            <input className="form-input" name="name" value={input.name} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label className="form-label">Image:</label>
                            <input className="form-input" name="image" value={input.image} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label className="form-label">Minimun Height:</label>
                            <input className="form-input" name="minheight" value={input.minheight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label className="form-label">Maximun Height:</label>
                            <input className="form-input" name="maxheight" value={input.maxheight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label className="form-label">Minimun Weight:</label>
                            <input className="form-input" name="minweight" value={input.minweight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label className="form-label">Maximun Weight:</label>
                            <input className="form-input" name="maxweight" value={input.maxweight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label className="form-label">Life span:</label>
                            <input className="form-input" name="life_span" value={input.life_span} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label className="form-label">Temperament:</label>
                            <input className="form-input" name="temperament" value={input.temperament} onChange={handleChange}/>                
                        </div>
                        <button className="form-button" type="submit">Submit</button>
                    </form>
                </div>
            }
         </>
    )

}

export default FormCreate