import { useState } from "react"
import axios from "axios"

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
                <h2>Perro creado con éxito</h2>
            </div>
        }
            {create &&
                <div>
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label>Name:</label>
                            <input name="name" value={input.name} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label>Image:</label>
                            <input name="image" value={input.image} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label>Minimun Height:</label>
                            <input name="minheight" value={input.minheight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label>Maximun Height:</label>
                            <input name="maxheight" value={input.maxheight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label>Minimun Weight:</label>
                            <input name="minweight" value={input.minweight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label>Maximun Weight:</label>
                            <input name="maxweight" value={input.maxweight} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label>Life span:</label>
                            <input name="life_span" value={input.life_span} onChange={handleChange}/>                
                        </div>
                        <div>
                            <label>Temperament:</label>
                            <input name="temperament" value={input.temperament} onChange={handleChange}/>                
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            }
         </>
    )

}

export default FormCreate