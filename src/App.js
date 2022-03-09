
import Profil from './Profil/Profil';
import photo from '../src/profilimg.jpg'
import PropTypes from "prop-types";
function App() {
  let fullName = "Aymen"
  let bio = "Junior Web developer"
  let profession = "Web developer"
  let imgprofil = photo
  const handleName = fullName => alert(fullName)
  //   App.defaultProps = {
  //     version: "16"
  // };

  return (
    <div className="App">
      <div style={{ backgroundColor: '#80808033', textAlign: 'center', marginTop: '10%' }}>
        <Profil name={fullName} ></Profil>
        <Profil bio={bio}></Profil>
        <Profil profession={profession}></Profil>
        <Profil name={fullName} handleName={handleName} > <img src={imgprofil} alt="img" style={{ width: 100, height: 100 }} />  </Profil>
      </div>



    </div>
  );
}

export default App;
