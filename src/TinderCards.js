import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCard.css';
import axios from './axios.js'

function TinderCards() {
    const [person,setPerson] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/tinder/card');
            setPerson(req.data);
        }
        fetchData();
    },[])

      const swiped = (nameToDelete)=>{
          console.log("removing" +nameToDelete)
      }
      const outOffFrame = (name) =>{
          console.log(name+" Left the screen");
      }
      console.log(person)

    return (
        <div className="tindercard">
            <div className="tindercard__cardContainer">
                {
                    person.map((people)=>(
                        <TinderCard
                         className="swipe"
                         key={people.name}
                         preventSwipe={["up","down"]}
                         onSwipe={(dir)=>swiped(dir,people.name)}
                         onCardLeftScreen={()=>outOffFrame(people.name)} >
                            <div className="card"
                             style={{backgroundImage:`url(${people.imgUrl})`}} >
                                <h3>{people.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
