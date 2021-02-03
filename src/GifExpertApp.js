import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = (()=>{

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One punch' ])
    
    // const handleAdd = (e) =>{
    //     //const cat = [...categories, 'Israel']
        
    //     setCategories( cats => [...cats, 'Israel']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick = {handleAdd} >Agregaar</button> */}
            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrid 
                        key = {category}
                        category = {category}/>
                    })
                }

            </ol>
        </>
    )
})

export default GifExpertApp;