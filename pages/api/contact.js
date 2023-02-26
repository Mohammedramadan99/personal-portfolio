import nc from 'next-connect'

import db from '@/utils/db/dbConnect'
import Contact from '@/Modal/Contact';
const handler = nc();

// get all products 
handler.get(async (req, res) =>
{
  await db.connect();
  try
  {
    // const users = await Contact.find({})
    // await AllProducts[...products]
    res.status(201).json({
      success: true,
      message:"good",
    });
  } catch (err)
  {
    res.status(404).json({
      message: err.message
    })
  }
  await db.disconnect();
})
// get all products 
handler.post(async (req, res) =>
{
  await db.connect();
  try
  {
    const data = req.body
    const contact = await Contact.create(data)
    res.status(201).json({
      success: true
    });
  } catch (err)
  {
    res.status(404).json({
      message: err.message
    })
  }
  await db.disconnect();
})

export default handler
