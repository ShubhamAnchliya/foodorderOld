// created in p9

import React from 'react'

function MenuHeader({filterItem, catItems}) {
    return (
        <>
             <div className="menu-tabs container" >

                <div className="menu-tab d-flex justify-content-around ">
                    
                    {
                        catItems.map((curClem, index ) => {
                            return <button className="btn btn-warning fw-bold" key={index}  onClick={() => filterItem(curClem)}>{curClem}</button>
                        })
                    }

                    {/* <button className="btn btn-warning fw-bold" onClick={() => filterItem('breakfast') } >Breakfast</button>
                    <button className="btn btn-warning fw-bold" onClick={() => filterItem('lunch') }  >Lunch</button>
                    <button className="btn btn-warning fw-bold" onClick={() => filterItem('evening') }  >Evening</button>
                    <button className="btn btn-warning fw-bold" onClick={() => filterItem('dinner') }  >Dinner</button>
                     */}
                    {/* <button className="btn btn-warning fw-bold" onClick={() => setItems(Menu) }  >All</button> */}

                </div>

            </div>


        </>
    )
}

export default MenuHeader;