import React,{useEffect,useState} from 'react'

function Covid() {
    const [data,setData] = useState([]);
   const getCovidData = async()=>{

      const ref= await fetch('https://api.covid19india.org/data.json');
      console.log(ref)

      const actual= await ref.json(); 
      console.log(actual.statewise[0])
      setData(actual.statewise[0]);

    }
    useEffect(() => {
       getCovidData();
    }, [])
    return (
        <div>
            <h1 style={{textAlign:'center'}}>live</h1>
           <h3 style={{textAlign:'center'}}>covid 19 cases tracker</h3> 
         
  <div class="parent">
    <div class="child" style={{backgroundColor:'blue'}}>
      <h1>country</h1>
      <h3>india</h3>
     
    </div>
   
    <div class="child" style={{backgroundColor:'red'}}>
    <h1>active</h1>
           <h3>{data.active}</h3>
    </div>

    <div class="child" style={{backgroundColor:'red'}}>
    <h1>recovery</h1>
           <h3>{data.recovered}</h3>
        
    </div>

    <div class="child" style={{backgroundColor:'red'}}>
    <h1>deaths</h1>
           <h3>{data.deaths}</h3>
    </div>

    <div class="child" style={{backgroundColor:'red'}}>
    <h1>last updated</h1>
           <h3>{data.lastupdatedtime}</h3>
    </div>
    
  </div>
</div>
   
    )
}
export default Covid;