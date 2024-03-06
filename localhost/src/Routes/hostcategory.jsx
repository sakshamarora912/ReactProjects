import React from 'react'
import Banner from '../assets/banner_data'
import Reason from '../assets/reason_data'
import Plan from '../assets/plan'
import Item from '../Components/Item/item_1'
import Item_2 from '../Components/Item/item_2'
import Item_3 from '../Components/Item/item_3'
import '../Components/Item/item_shared.css'
import img from '../assets/images/part-3-image.png'

const Hostcategory = ({plan}) => {
  return (
    <div>
        <div>
            {Banner.map((item)=>{
                if(plan===item.plan.toLocaleLowerCase()){
                    return <Item hero_tag={item.hero_tag} hero_img={item.hero_img} hero_about={item.hero_about}  />            
                }
            })}
        </div>

        <div className='part-2'>
            <h1 className='section-title'>Our {plan} hosting Plans</h1>
              
                    <div className='plan'>
                        {Plan.map((item,i)=>{                         
                            if(plan===item.plan.toLocaleLowerCase()){
                            return <Item_3 type={item.type} tag={item.tag} price={item.price} features={item.features}
                                            // features={item.features.map((featuresItem)=>(                       
                                            //         <Item_3 features={featuresItem}/>
                                            // ))} 

                                            />
                        }
                        })}
                    
                </div>  
        </div>

        <div className='reason'>
            <h1>Why choose {plan} Hosting?</h1>
            <div className="part-3"  style={{ background: `url(${img}) black`}}>
            
                <div className="parent">
                    {Reason.map((item)=>{
                        if(plan===item.plan.toLocaleLowerCase()){
                            return <Item_2 tag={item.tag} about={item.about}  />            
                        }
                })}
                </div>
            </div>    
        </div>
       
    </div>
  )
}

export default Hostcategory