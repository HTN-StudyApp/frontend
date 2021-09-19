import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { db, admin } from '../../../lib/firebaseAdmin';

// website.com/db/set

export default async (req, res) => {
    try {
        if (req.method !== 'POST') {
            res.status(400).send({ message: 'Only POST requests allowed' })
            return
        } else {
            /* 
                body {
                    email,
                    imgUrl,
                    name
                }
            */
            let { email, imgUrl, name } = req.body

            /* 
                Users {
                    email {
                        points, 
                        setsOwned,
                        name
                    }
                }
            */
            db.collection('Users').doc(email).get().then(snap => {
                let data = snap.data()
                // if (Object(data))
                if (!data) {
                    db.collection('Users').doc(email).set({
                        imgUrl, name,
                        points: 0,
                        setsOwned: [],
                    })
                }
            })
            res.status(200).json({ "msg": `user updated` });
        }

    } catch (e) {
        console.error(e)
        res.status(400).json({ e });
    }
}