import style from './FriendListItem.module.scss';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={style['friend-item']}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx({
          [style['is-online']]: isOnline,
          [style['is-offline']]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
