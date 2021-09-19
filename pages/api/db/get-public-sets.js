import { db } from '../../../lib/firebaseAdmin';

// website.com/db/get/1234

export default async (req, res) => {
  try {
    db.collection('Sets').doc('public').get().then(snap => {
      let setData = snap.data()
      let publicSets = setData.publicSets;
      res.status(200).json({ publicSets })
    });


  } catch (e) {
    console.error(e)
    res.status(400).json({ e });
  }
}
