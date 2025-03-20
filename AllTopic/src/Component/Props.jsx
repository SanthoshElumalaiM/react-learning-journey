import React from 'react'
import Card from './Card'

const Props = () => {
  return (
    <>
        <div className="props">
                <h1>Props Component</h1>
            <div className="propsContainer">
                    <Card productName="Laptop" price={20000} image={"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
                    <Card productName="Mobile" price={10000} image={"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                    <Card productName="Tab" price={2590} image={"https://images.pexels.com/photos/2070069/pexels-photo-2070069.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                    <Card productName="Camera" price={45799} image={"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                    <Card productName="Projector" price={2320} image={"https://images.pexels.com/photos/821668/pexels-photo-821668.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                    <Card productName="KeyBorad" price={2300} image={"https://images.pexels.com/photos/399159/pexels-photo-399159.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                    <Card productName="Mouse" price={200} image={"https://images.pexels.com/photos/556565/pexels-photo-556565.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                    
                    
            </div>
        </div>
    </>
  )
}

export default Props