import { firestoreAction } from 'vuexfire'
import { db } from '@/plugins/firebase'

interface PersonList {
  contractEmployees: ContractEmployee[]
}

export const state: () => PersonList = () => ({
  contractEmployees: []
})

export const getters = {
  getContractEmployees: (state: any) => state.contractEmployees
}

export const actions = {
  bindContractEmployees: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'contractEmployees',
      db.collection('contract-employees')
    )
  })
}
