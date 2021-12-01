useEffect(() => {
  window.Echo.channel('chat')
  .listen('MessageCreated', (e) => {
    // メッセージ取得処理
    getMessages(roomId);
  });
},[roomId])

const getMessages = (roomId) => {
  let url = 'http://localhost:80';

  axios.get(url + '/api/messages/private/' + roomId)
  .then((res) => {
    setMessages(res.data.results.messages);
    let element = document.documentElement;
    let bottom = element.scrollHeight - element.clientHeight;
    window.scroll(0, bottom);
  })
  .catch((error) => {
    console.log(error);
  })
}