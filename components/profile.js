import Link from 'next/link'
import Image from 'next/image'
import user from '../public/user.png'

export default function Profile({ }) {
    return(
        <div>
            <div className="px-2" style={{display: 'flex'}}>
                <div style={{marginBottom:"10px"}}><Image src={user} alt="Profile Picture" width={45} height={45} className="rounded-full"/>
                </div>
                <h1 style={{marginLeft:"10px", color:"#f1f1f1"}}>NAME</h1>
            </div>
        </div>
    )
}