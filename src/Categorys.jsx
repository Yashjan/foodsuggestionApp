import React from 'react'

const Categorys = ({filterMenu , catItems}) => {
    console.log(catItems)
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItems.map((curel,index) => {
                            return  <button className="btn btn-warning" onClick={()=>filterMenu(curel)} key={index} > {curel} </button>
                        })
                    }
                    
                </div>
                {/* <button  className="btn btn-warning" onClick={() => filterMenu('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterMenu('lunch')} >Lunch</button>
                     <button className="btn btn-warning" onClick={() => filterMenu('evening')} >Evening </button>
                    <button className="btn btn-warning" onClick={() => filterMenu('dinner')} >Dinner</button>
                     <button className="btn btn-warning" onClick={() => setItems(Menu)} >All </button> */}
            </div>
        </>
    )
}

export default Categorys
