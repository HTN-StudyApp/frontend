import { db } from '../../../lib/firebaseAdmin';

// website.com/db/get/1234

export default async (req, res) => {
    try {
        /* 
            Users {
                email {
                    points,
                    setsOwned
                }
            }
        */
        db.collection('Users').orderBy('points', 'desc').limit(100).get().then(snaps => {
            let leaderboard = [];
            snaps.forEach(snap => {
                let data = snap.data();
                let { imgUrl, name, points } = data;
                leaderboard.push({ imgUrl, name, points })
            })
            // console.log(leaderboard)
            res.status(200).json({ leaderboard })
        })


    } catch (e) {
        console.error(e)
        res.status(400).json({ e });
    }
}
