import { all, fork } from 'redux-saga/effects'
import * as photosSagas from './photos'

const allSagas = {
  ...photosSagas
}

export default function* root() {
  const sagas = []

  for (const name of Object.keys(allSagas)) {
    if (name.startsWith('watch')) {
      sagas.push(
        fork(allSagas[name])
      )
    }
  }

  yield all(sagas)
}
