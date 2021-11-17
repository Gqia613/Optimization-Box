import { useState　} from 'react';

const  Example = (props) => {
  let [friendDisplayFlag, setFriendDisplayFlag] = useState(true);

  // 友だちの表示/非表示
  const changeDisplayFriend = () => {
    if (friendDisplayFlag === true) {
      {/* friendDisplayFlagがTRUEだったらFALSEに書き換える */}
      setFriendDisplayFlag(false);
    } else if(friendDisplayFlag === false) {
      {/* friendDisplayFlagがFALSEだったらTRUEに書き換える */}
      setFriendDisplayFlag(true);
    }
  }

  return (
    <>
      <section>
        {/* friendDisplayFlagがTRUEの際に表示 */}
        <button onClick={changeDisplayFriend} className={friendDisplayFlag ? '' : 'hidden'}>
          friendDisplayFlag = TRUE
        </button>
        {/* friendDisplayFlagがFALSEの際に表示 */}
        <button onClick={changeDisplayFriend} className={friendDisplayFlag ? 'hidden' : ''}>
          friendDisplayFlag = FALSE
        </button>
      </section>
    </>
  )
}

export default Example



