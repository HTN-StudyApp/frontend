import Link from 'next/link'
import List from './list'
import FeaturedSets from './featuredSets'
import MySets from './mySets'

export default function Preview({ }) {

    return (
        <div style={{ width: "100vw", height: "95vh", backgroundColor: "#625771" }} 
        // className="rounded-lg"
        >
            <div style={{display: "flex",justifyContent: "space-around",position: "relative",top: "60px", marginTop:"10px"}}>
                <div>
                    <h1 style={{position:"relative",color:"white", fontSize:"2.7rem"}}>Play a Set!</h1>
                <form>
                    <input type="text" placeholder="Enter a code..." style={{borderRadius: "25px", border: "2px solid #423345", padding: "5px", marginLeft:"10px"}}>
                    </input>
                </form>
                </div>
                <div style={{ width: "40vw"}}>
                    <div>
                        <h1 style={{position:"relative",color:"white", fontSize:"1.5rem"}}>Public Sets</h1>
                        <div style={{display: "flex", overflowX:"scroll"}}>
                            <List/>
                            <List/>
                            <List/>
                            <List/>
                            <List/>
                            <List/>
                        </div>
                    </div>
                </div>
            </div>            
            
            <div style={{marginTop:"75px", marginLeft:"240px", maxWidth:"70vw", overflowX:"scroll", height:"160px"}}>
                <FeaturedSets/>
            </div>

            <div style={{marginTop:"75px", marginLeft:"240px", maxWidth:"70vw", overflowX:"scroll", height:"160px"}}>
                <MySets/>
            </div>


        </div>
    )
}
