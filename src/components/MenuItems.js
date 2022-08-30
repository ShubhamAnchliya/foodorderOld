// created in p9

import React from 'react'

// on place of props   in function MenuItems(props) we can do destructuring by {items}
// function MenuItems(props) {
function MenuItems({items}) {
    return (
        <>

            <div className="menu-items container-fluid mt-5">
                
                <div className="inner row">

                    <div className="col-12 mx-auto">

                        <div className="row my-3" >

                            {
                               
                                    items.map((elem) => {
                                         {/* props.items.map((elem) => {   we can use it with props in above line*/}
                                        const {id, image, name, category, price, description} = elem;   //destructuring
                                        
                                        return (
                                            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4" key={id} >

                                                <div className="row Item-inside">
                                                    {/* for images */}
                                                    <div className="col-12 col-md-12 col-lg-4 img div" >

                                                        <img src={image} alt={name} className="img-fluid" />

                                                    </div>

                                                    {/* menu Item description */}
                                                    <div className="col-12 col-md-12 col-lg-8">

                                                        <div className="main-title pt-4 pb-3">

                                                            <h1>{name}</h1>
                                                            <p>{description}</p>

                                                        </div>   
                                                        {/* menu price */}
                                                        <div className="menu-price-book">

                                                            <div className="price-book-divide d-flex justify-content-between">
                                                                <h2>
                                                                    Price : {price}
                                                                </h2>

                                                                <a href="#">
                                                                    <button className="btn btn-primary">Order Now</button>
                                                                </a>

                                                            </div>

                                                            <p>*Prices may vary on selected date.</p>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        )
                                         
                                        })
                            }
                           
                        </div>

                    </div> 
                </div>

            </div>
    
        </>
    )
}
 
export default MenuItems;