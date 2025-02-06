import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComicForm from "../components/ComicForm";
const AddPage = ({
  addNcbdSubmit
}) => { 
  
 

  const navigate = useNavigate(); 
  const issueData = {
      "id":"",
      "ncbd":"",
      "issues": []

   }
   

  const submitNcbd = (ncbd, issues) => {
    const newNCBD = {
      NCBD: ncbd,
      issues,
    }; 
    addNcbdSubmit(newNCBD);
    return navigate("/");
  };
  
  return  (
    <ComicForm isEdit={false} issueData={issueData} submitNcbd={submitNcbd}  />

  );
};

export default AddPage;
