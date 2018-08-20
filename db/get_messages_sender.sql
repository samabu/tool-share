SELECT u.fullname, u.profile_pic, m.room_id FROM users u
JOIN messages m ON u.userid = m.receiver_id
LEFT JOIN chats c ON m.room_id = c.room_id
WHERE m.sender_id = $1;