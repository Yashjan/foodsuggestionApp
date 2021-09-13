import React, {useState} from 'react'
import Categorys from './Categorys';
import Imagelist from './Imagelist';
import Menu from './Menu'

const allcatItems = [...new Set(Menu.map((curel)=>{return curel.category})),"all"]
const Tab = () => {
    const [items, setItems] = useState(Menu);

    const filterMenu = (category) => {
        if(category === 'all'){
            setItems(Menu)
            return
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }
    return (
        <>
            <h1 className='mt-5 text-center main-heading'> Order Your Favourite Dish</h1>
            <hr />
            <Categorys filterMenu={filterMenu} catItems={allcatItems} />

            {/* Our Menu Items List will come here  */}
            <Imagelist items={items} />

            
        </>
    )
}

export default Tab
