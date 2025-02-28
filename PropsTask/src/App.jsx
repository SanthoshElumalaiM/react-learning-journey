import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import Box from "./Components/box"



let App=()=>{
  <img src="" alt="image" />
  return(
    <div>
      <NavBar/>
      <section className="section1">
          <h1>Welcome To My Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
      </section>
      <div className="section2">
        <Box productName="Mobile" price="50000" imgSrc="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Box productName="Laptop" price="10000" imgSrc="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"/>
        <Box productName="Tablet" price="35000" imgSrc="https://images.pexels.com/photos/2070069/pexels-photo-2070069.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>
      <Footer/>
    </div>
  )
}
export default App