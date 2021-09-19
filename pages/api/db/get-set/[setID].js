import { db } from '../../../../lib/firebaseAdmin';

// website.com/db/get/1234

export default async (req, res) => {
  try {
    const { setID } = req.query;
    db.collection('Sets').doc(setID).get().then(snap => {
      let setData = snap.data()
      res.status(200).json(setData)
    });


  } catch (e) {
    console.error(e)
    res.status(400).json({ e });
  }
}
