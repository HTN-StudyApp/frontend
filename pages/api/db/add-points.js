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
                    points,
                    finishedSet
                }
            */
            let { email, points, finishedSet } = req.body;

            /* 
                Users {
                    email: {
                        email,
                        points,
                        finishedSets: [string]
                    }
                }
            */
            const dbRes = await db.collection('Users').doc(email).update({ 
                email,
                points: admin.firestore.FieldValue.increment(points),
                finishedSets: admin.firestore.FieldValue.arrayUnion(finishedSet)
            });
            console.log(dbRes)

            // Process a POST request
            // res.status(200).json({ "msg": `congrats i set the id as ${id}`, id });
            res.status(200).json({ "msg": `congrats dude ${email} i gave u ${points}` })
            return;
        }

    } catch (e) {
        console.error(e)
        res.status(400).json({ e });
    }
}