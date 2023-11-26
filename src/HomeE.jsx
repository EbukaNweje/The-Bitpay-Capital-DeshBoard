
import { Link } from 'react-router-dom';


const HomeE = () => {



    return (
        <>
            <div style={{width:'100%', height:'100vh', display: 'flex', flexDirection:'column', textAlign:'center', justifyContent:'center', alignItems:'center', gap:'30px'}}>
                <h1>Welcome to Swift Earn</h1>
                <div>
                  <Link to={'/login'}>
                    <button style={{padding:'10px 40px', borderRadius:'5px', border:'1px solid #000', fontSize:'16px', cursor:'pointer'}}>Login</button>
                  </Link>
                </div>
            </div>
        </>
    );
};

export default HomeE;
