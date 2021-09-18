import Link from 'next/link'
import List from './list'

export default function MySets({ }){
    return(
        <div>
            <h1 style={{color:"white", fontSize:"1.5rem"}}>My Sets</h1>
            <div style={{display:"flex", height:"50px"}}>    
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>
            </div>
        </div>
    )
}