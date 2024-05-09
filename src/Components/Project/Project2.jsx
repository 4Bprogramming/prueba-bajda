import React from 'react'

import appFirebase from '../../firebase/credential2'
import { getFirestore, collection, getDocs, deleteDoc,doc  } from 'firebase/firestore'
const db = getFirestore(appFirebase)

function Project2() {

   


  return (
    <div>Project2</div>
  )
}

export default Project2