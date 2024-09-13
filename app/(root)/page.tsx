import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async() => {
const loggedIn=await getLoggedInUser()
console.log(loggedIn)
  return (
    <section className='home'>
    <div className='home-content'>
    <header className='home-header'>
    <HeaderBox
    type='greeting'
    title='Welcome'
    user={loggedIn.name || 'Guest'}
    subtext='Access and manage your account transaction efficiently.'
    />

    <TotalBalanceBox
    accounts={[]}
    totalBanks={1}
    totalCurrentBalance={1250}
    />
    </header>

    RECENT TRANSACTION
    </div>

    <RightSidebar
    user={loggedIn}
    transactions={[]}
    banks={[{currentBalance:250.40},{currentBalance:580.10}]}
    />
    </section>
  )
}

export default Home