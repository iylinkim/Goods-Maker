import {fbDatabase} from "fbase";

class FirebaseDatabase {
  saveGoods(userId, item) {
    fbDatabase.ref(`${userId}/goods/${item.id}`).set(item);
  }

  deleteGoods(userId, item) {
    console.log(1);
    fbDatabase.ref(`${userId}/goods/${item.id}`).remove();
  }

  syncGoods(userId, onUpdate){
    const ref = fbDatabase.ref(`${userId}/goods`);
    ref.on("value", snapshot => {
        const value = snapshot.val();
        value && onUpdate(value);
    })

    return () => ref.off();
  }
}

export default FirebaseDatabase;
