import { AppStoreType } from "../../../store/store" 

export const selectDays = (state: AppStoreType) => state.ledgerStore.ledger
.map(l => l.posted.slice(0, 10))
.filter((d,i,a) => a.indexOf(d) === i)

export const selectCreditAccounts = (state: AppStoreType) => state.ledgerStore.ledger
.map(l => l.creditAccountId)
.filter((d,i,a) => a.indexOf(d) === i)

export const selectDebitAccounts = (state: AppStoreType) => state.ledgerStore.ledger
.map(l => l.debitAccountId)
.filter((d,i,a) => a.indexOf(d) === i)

export const selectAccounts = (state: AppStoreType) => state.ledgerStore.accountDays