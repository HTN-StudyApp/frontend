import { db } from '../../../../lib/firebaseAdmin';

// website.com/set/abcde1234

export default async (req, res) => {
  try {
    const { slug } = req.query.set;
    const sets = await db.collection('StudySets').get();
    const setDatas = sets.docs.map(user => user.data());

    console.log(slug)
    res.status(200).json({ setDatas });


  } catch (e) {
    res.status(400).json({ e });
  }
}
