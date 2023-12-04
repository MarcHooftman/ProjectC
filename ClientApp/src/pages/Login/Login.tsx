import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  navigate("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=fd5759c0-0d95-4c39-92e1-a83537f78e73&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A7185%2Fprofile%2F&response_mode=query&scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read&state=12345&code_challenge=Nj9Youq443xUOCe_HsmBXJy5dKC8YsqlUdn1sga3CR0&code_challenge_method=S256")

  return <></>
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const navigate = useNavigate();

  // const checkLogin = () => {
  //   fetch(`https://localhost:7185/api/user/by-email/${email}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data?.password === password) {
  //         localStorage.setItem("user", data.id);
  //         navigate("/");
  //       } else {
  //         console.log("failed...");
  //       }
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  // };

  // return (
  //   <Layout>
  //     <div className="container mt-5">
  //       <div className="row justify-content-center">
  //         <div className="col-md-6">
  //           <h1 className="my-5 blue-text">Inloggen</h1>
  //           <div className="card shadow-lg">
  //             <div className="card-body">
  //               <form
  //                 onSubmit={(e) => {
  //                   e.preventDefault();
  //                   checkLogin();
  //                 }}
  //               >
  //                 {/* Email Input */}
  //                 <div className="form-group mb-3">
  //                   {" "}
  //                   {/* evt mt-3 */}
  //                   <label htmlFor="email">Email</label>
  //                   <input
  //                     type="email"
  //                     className="form-control"
  //                     id="email"
  //                     placeholder="Voer uw email in"
  //                     required
  //                     value={email}
  //                     onChange={(e) => setEmail(e.target.value)}
  //                   />
  //                 </div>

  //                 {/* Password Input */}
  //                 <div className="form-group mb-3 mt-3">
  //                   <label htmlFor="password">Wachtwoord</label>
  //                   <input
  //                     type="password"
  //                     className="form-control"
  //                     id="password"
  //                     placeholder="Voer uw wachtwoord in"
  //                     required
  //                     value={password}
  //                     onChange={(e) => setPassword(e.target.value)}
  //                   />
  //                 </div>

  //                 {/* Sign In Button */}
  //                 <button type="submit" className="btn btn-primary">
  //                   Log in
  //                 </button>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Layout>
  // );
};

export default Login;
