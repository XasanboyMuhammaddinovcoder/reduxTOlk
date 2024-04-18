import { useSelector } from "react-redux"
import './index.css'
function Home() {
    const user = useSelector(state => state.user.value)
    return (
        <>
                <div className="cardH">
                    <h2>Name</h2>
                    <h2>Email</h2>
                    <h2>Password</h2>
                </div>
                {
                    user.map((el , index) => {
                        return (
                            <div key={index} className="card">
                                <h2>{el.name}</h2>
                                <h2>{el.email}</h2>
                                <h2>{el.pass}</h2>
                            </div>
                        )
                    })
                }
           
        </>
    )
}

export default Home
