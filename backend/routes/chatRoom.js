const express = require("express");
const models = require("../models");
const router = express.Router();
/* GET users listing. */
router.get("/", async (req, res, next) => {
  const chatRooms = await models.ChatRoom.findAll();
  res.send(chatRooms);
});
router.post("/create", async (req, res, next) => {
  const room = req.body.room;
  const chatRooms = await models.ChatRoom.findAll({
    where: { name: room },
  });
  const chatRoom = chatRooms[0];
  if (!chatRoom) {
    await models.ChatRoom.create({ name: room });
  }
  res.send(chatRooms);
});
router.get("/messages/:chatRoomName", async (req, res, next) => {
  try {
    const chatRoomName = req.params.chatRoomName;
    const chatRoom = await models.ChatRoom.findOne({
      where: {
        name: chatRoomName,
      },
    });
    if(!chatRoom) {
      return res.send([]);
    }
    const chatRoomId = chatRoom.id;
    const messages = await models.ChatRoomMessages.findAll({
      where: {
        chatRoomId,
      },
    });
    res.send(messages);
  } catch (error) {
    console.log(error)
    res.send([]);
  }
});
module.exports = router;