import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComicForm from "../components/ComicForm";

const EditPage = ({ deleteNcbdSubmit, updateNcbdSubmit }) => {
  const { id } = useParams("");

  const [issueData, setIssueData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchComics = async () => {
      console.log("ran fetch comics");

      console.log("isEdit");

      try {
        const res = await fetch(`http://localhost:3369/comics/${id}`);
        const data = await res.json();

        setIssueData(data);
      } catch (error) {
        console.log("error fetching data, " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  const updateNcbd = (id, ncbd, issues) => {
    console.log("Update");

    const updateNCBD = {
      id,
      NCBD: ncbd,
      issues,
    };
    updateNcbdSubmit(updateNCBD);

    return navigate("/");
  };

  const deleteNcbd = () => {
    console.log("Delete");
    const confirm = window.confirm(
      "Are you sure you want to delete this New Comic Book Day Listing?"
    );

    if (!confirm) return;

    deleteNcbdSubmit(id);

    navigate("/allcomics");
  };

  return loading ? (
    <h2>Loding</h2>
  ) : (
    <>
    <ComicForm isEdit={true} issueData={issueData} updateNcbd={updateNcbd} deleteNcbd={deleteNcbd} />
    </>
  );
};

export default EditPage;
