import { db } from '../../../../lib/firebaseAdmin';

// website.com/set/abcde1234

export default async (req, res) => {
    try {
        if (req.method !== 'POST') {
            res.status(400).send({ message: 'Only POST requests allowed' })
            return
        } else {
            /* 
                body {
                    email,
                    name,
                    questions: [
                        {
                            question,
                            choices,
                            answer
                        }
                    ]
                }
            */
            let email = req.body.email
            let name = req.body.name;
            let id = generateUniqueID(email)
            let questions = req.body.questions

            console.log(id)

            /* 
                Sets {
                    id {
                        id, 
                        name,
                        email, 
                        questions [
                            { question, choices[], correct }
                        ]
                    }
                }
            */
            const dbRes = await db.collection('Sets').doc(id).set({ id, name, email, questions });
            console.log(dbRes)

            // Process a POST request
            res.status(200).json({ "msg": `congrats i set the id as ${id}`, id });
            return;
        }

    } catch (e) {
        console.error(e)
        res.status(400).json({ e });
    }
}

function generateUniqueID(email) {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    var thirdPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    thirdPart = (email + thirdPart.toString(36)).slice(-3);
    return firstPart + secondPart + thirdPart;
}