import { Link, useNavigate } from "react-router-dom"


const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-5xl font-bold text-red-700">404 page not found</h1>
      <div className="flex gap-5">
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
        <button onClick={() => navigate("/")} className="btn btn-primary">Previous page</button>
      </div>
    </div>
  )
}

export default ErrorPage