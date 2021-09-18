import Link from 'next/link'
import List from './list'

export default function FeaturedSets({ }){
    return(
        <div>
            <h1 style={{color:"white", fontSize:"1.5rem"}}>Featured Sets</h1>
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