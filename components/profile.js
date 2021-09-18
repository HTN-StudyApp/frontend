import Link from 'next/link'
import profilePhoto from '../public/Profile.png'


export default function Profile({ }) {
    return(
        <div style={{display: 'flex'}}>
            <profilePhoto style={{height: '20px', width: '20px'}}/>
        </div>
    )
}