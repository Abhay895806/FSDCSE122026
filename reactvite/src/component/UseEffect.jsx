import  {useEffect, useState}from 'react'

function UseEffect() {
    const [counter, setCounter] = useState(0);
    const[pointer, setPointer] = useState(1000);
    const[product, setProduct] = useState([]);

    useEffect(() => {
    // console.log("Hey, I am from useEffect hook, counter=" + counter);
    // console.log("Hey, I am from useEffect hook, pointer=" + pointer);

    async function fetchData() {
      try {
          const data = await fetch('https://fakestoreapi.com/products');
          const jsonData = await data.json();
          console.log(jsonData);
          setProduct(jsonData);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
    }

    fetchData();

    }, []);
  return (
    <div>
      UseEffect
     <h2 style={{color : 'blue'}}>count = {counter}</h2>
     <h2 style={{color:'red'}}>pointer={pointer}</h2>
      <div>
        {/* {JSON.stringify(product)} */}
      </div>
      <button onClick={() => setCounter(counter + 10)}>Increment</button>
      <div></div>
      <button onClick={() => setPointer(pointer + 10)}>Increment Pointer</button>

      <div>
        {product.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default UseEffect;