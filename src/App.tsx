import { RepositoryList } from './components/RepositoryList'
import WriteButton from './components/button'
import { Counter } from './components/Counter'
import './styles/global.scss'

export function App() {
    return (
    <>
    <WriteButton/>
    <RepositoryList />
    </>
    )
}