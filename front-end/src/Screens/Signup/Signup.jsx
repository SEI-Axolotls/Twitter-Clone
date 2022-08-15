import { Link } from 'react-router-dom';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [valid, setValid] = useState('');
  const [formData, setFormData] = useState({
    "Name": "",
    "Email": "",
    "Password": "",
    "PasswordConfirm": "",
  })

  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(customers => {
        setCustomers(customers);
      })
  }, [toggle])

  const passwordInput = (event) => {
    setPassword(event.target.value);
  console.log(password);
  }

  const passwordConfirmInput = (event) => {
    setPasswordConfirm(event.target.value)
    console.log(passwordConfirm);
    
  }
 
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordConfirm === password) {
      setValid('Valid');
      await axios.post('', formData)
    setToggle(prev => !prev)
    } else {
      setValid('Invalid');
    }
  }


  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <nav className="signup">
      <header>Register</header>        
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Your Username"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          />
        <input
          type="text"
          placeholder="Add Your Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="AmountSpent"
          value={formData.Password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          name="ConfirmPassword"
          value={formData.ConfirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to='/myprofile'><button id='my-profile-butt'>Register!</button></Link>
    </nav>
  )
}