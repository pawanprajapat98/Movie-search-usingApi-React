import axios from 'axios'
import React, { useState} from 'react'
import './Netfilx.css'
const img_path="https://image.tmdb.org/t/p/w500/";

function Netflixclone() {
    const [movieName,setmovieName] =useState('')
    const [data,setdata] =useState([])
    
    function search(){
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=6823d286f080c1f6a885aaaf7abb5e93&language=en-US&query=" +movieName+" &page=1&include_adult=false")
        .then((Response) =>{
              console.log(Response.data.results)
              setdata(Response.data.results)
            })
        }
   function trimoverview(overview){
    return(overview.length>60)?overview.slice(0,60)+"...":overview;
   }     
   function trimtitle(title){
    return(title.length>20)?title.slice(0,20)+"...":title;
   }  
        
return (
    < >
            <div className='navbar'>
                <div className='nav'>
                        <div className='logo'>
                           
                           
                            <img id='logoo' src="./Netflix-Logo.png" alt=''></img>
                            
                           
                        
                        </div>
                        <div className='list'>
                              <ul>
                                  <li> <a href="">About</a></li>
                                  <li><a href="">Contact</a></li>
                                  <li><a href="">Movei Details</a></li>
                              </ul>
                        </div>
                        <div className='serch'>
                              <input type="movieName" placeholder='Search your best movie  here........ ' name=" movieName"  onChange={(e)=>setmovieName(e.target.value)}/>   
                              <button type="" onClick={search}>Search</button>
                        </div>
                  </div>
            </div>  
            <div id='main'>
                {   (data.length>0)?
                    data.map((res,i)=>{
                      return(
                      
                        <div key={i}  className='box'>
                              <div className='imgs'>
                                {
                                     (res.poster_path)?
                                     <img  src={img_path+ res.poster_path} alt=""/>
                                     :
                                     <img src="./dummy img.jpg" alt=''></img>
                                }
                                      
                              </div>
                              <div className='heading'>
                                      <p>{trimtitle(res.title)}</p>
                                    
                              </div>
                              <div className='dec'>
                                 <p>{trimoverview(res.overview)}</p>
                              </div>
                        </div> 
                    
                      ) 
                      
                    }):
                    <div className='result'>
                       <div className='outerbox'>
                          <div className='result-box'>
                              <h1>No results found</h1>
                              
                           </div>
                           <button id='btn'>ok</button>
                       </div>
                    </div>
                }
            </div>
        </>
  )
}

export default Netflixclone
