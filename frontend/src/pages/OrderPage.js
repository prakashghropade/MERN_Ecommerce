import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import displayINRCurrency from '../helpers/displayCurrency'

const OrderPage = () => {
  const [data,setData] = useState([])

  const fetchOrderDetails = async()=>{
    const response = await fetch(SummaryApi.getOrder.url,{
      method : SummaryApi.getOrder.method,
      credentials : 'include'
    })

    const responseData = await response.json()

    setData(responseData.data)
    console.log("order list",responseData)
  }

  useEffect(()=>{
    fetchOrderDetails()
  },[])

  return (
    <div>
      {
         !data[0] && (
          <p>No Order available</p>
         )
      }


      <div className='p-4 w-full  '>
          {
            data.map((item,index)=>{
              return(
                <div key={item.userId+index} className='mx-12 h-full mb-10 flex flex-col' >
                  <div className='mb-2 orderdate h-10 rounded flex items-center justify-center'>
                   <p className='font-medium text-lg '>{moment(item.createdAt).format('LL')}</p> 
                  </div>
                   <div className='border rounded bg-white text-black'>
                        <div className='flex flex-col lg:flex-row justify-between rounded orderBox'>
                            <div className='grid gap-3 w-6/12'>
                              {
                                item?.productDetails.map((product,index)=>{
                                  return(

                                    <div key={product.productId+index} className='flex  bg-slate-100 '>

                                        <img 
                                          src={product.image[0]}
                                          className='w-28 h-28 bg-white object-scale-down p-2 ordercard-img'
                                        />

                                        <div className='ordercard-desc w-full'>
                                          <div className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</div>
                                          <div className='flex items-center gap-5 mt-1'>
                                            <div className='text-lg text-red-500'>{displayINRCurrency(product.price)}</div>
                                            <p>Quantity : {product.quantity}</p>
                                          </div>
                                        </div>
                                    </div>
                                  )
                                })
                              }
                            </div>



                            <div className='flex flex-col gap-4 min-w-[250px] h-fit p-6 ordedetails items-center justify-center' >

                              <div>
                                  <div className='text-lg font-medium order-header'>Payment Details : </div>
                                  <p className=' ml-1'>Payment method : {item.paymentDetails.payment_method_type[0]}</p>
                                  <p className=' ml-1'>Payment Status : {item.paymentDetails.payment_status}</p>
                              </div>

                              <div>
                                <div className='text-lg font-medium order-header'>Shipping Details :</div>
                                {
                                  item.shipping_options.map((shipping,index)=>{
                                    return(
                                      <div key={shipping.shipping_rate} className=' ml-1'>
                                        Shipping Amount : {displayINRCurrency(shipping.shipping_amount)}
                                      </div>
                                    )
                                  })                      
                                }
                                
                              </div>

                                  <div className='font-semibold  w-fit lg:text-lg bg-blue-200 total'>
                        Total Amount : {displayINRCurrency(item.totalAmount)}
                                  </div>

                            </div>

                        </div>
                   </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default OrderPage