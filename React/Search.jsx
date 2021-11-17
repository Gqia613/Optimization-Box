import { useState, useEffect} from 'react';
import axios from 'axios'

const Home = (props) => {
  let [friends, setFriends] = useState([]);
  let [searchFriends, setSearchFriends] = useState([]);

  useEffect(() => {
    getFriends(1);
  },[])

  // 友だちのデータ取得
  const getFriends = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/friends/' + id)
    .then((res) => {
      setFriends(res.data.results)
      setSearchFriends(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // 検索ワードを取得して、検索結果用に新たな配列を作成
  const searchGroupData = (searchWord) => {
    // 友だちデータの検索結果を返す
    if(searchWord.target.value) {
      // filterメソッドで配列の中身を一つ一つ取り出して、検索ワードと一致するものだけ、data変数に入れる
      let data = friends.filter((item) => {
        return item.user.user_name.indexOf(searchWord.target.value) > -1;
      })
      setSearchFriends(data);
    } else {
      setSearchFriends(friends);
    }
  }

  return (
    <>
      <section>
        {
          searchFriends.map((item, index) => {
            return (
              <p key={index}>{ item.user.user_name }</p>
            );
          })
        }
      </section>
    </>
  )
}

export default Home



