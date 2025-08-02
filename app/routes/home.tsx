import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter"
import { useLocation, useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "JobSync" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {

  const {auth} =usePuterStore();
  const navigate=useNavigate();

//if the user is authenticated, navigate to the next page
//if the user is not authenticated, show the login page

  useEffect(()=>{

    if(!auth.isAuthenticated) navigate('/auth?next=/');

  },[auth.isAuthenticated])




  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Applications & Resume Ratings</h1>
          <h2>Review your subimissions</h2>
        </div>
      

      {resumes.length>0 && (
        <div className="resumes-section">
          {resumes.map((resume)=>(
            <ResumeCard key={resume.id} resume={resume}/>
          ))}
        </div>
      )}
      </section>
    </main>
  );
}
