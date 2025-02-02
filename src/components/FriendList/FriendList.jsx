import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
import friends from "../../fiends.json";

const FriendList = () => {
  return (
    <div className={styles.friendListBlock}>
      {friends.map((friend, index) => (
        <FriendListItem
          key={index}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </div>
  );
};

export default FriendList;
