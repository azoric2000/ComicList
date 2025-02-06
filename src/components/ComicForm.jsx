import React from "react";
import { useState } from "react";
import { FaPlus, FaTrashAlt, FaRedo } from "react-icons/fa";

const ComicForm = ({
  isEdit,
  issueData,
  submitNcbd,
  updateNcbd,
  deleteNcbd,
}) => {
  const [ncbd, setNcbd] = useState(issueData.NCBD);
  const [id, setId] = useState(issueData.id);
  const [issues, setIssues] = useState(issueData.issues);
  const [issueTitle, setIssueTitle] = useState([]);
  const [issueNum, setIssueNum] = useState([]);
  const [issuePub, setIssuePub] = useState("[]");

  const addIssue = () => {
    let issueID = issues.length + 1;
    let newIssueObj = {
      id: issueID,
      title: issueTitle,
      number: issueNum,
      publisher: issuePub,
    };
    issues.push(newIssueObj);
    setIssueTitle("");
    setIssueNum("");
    setIssuePub("");
  };

  const removeIssue = (id) => {
    setIssues((prevIssues) => {
      const newIssues = [...prevIssues];
      newIssues.splice(id, 1);
      return newIssues;
      e;
    });
  };

  return (
    <div className="card full">
      <h3>{isEdit ? `Edit List for Week: ${ncbd} ` : `Add New Comic List`} </h3>
      <div>
        <label htmlFor="ndcd">New Comic Book Date:</label>
        {isEdit ? (
          <b>{ncbd}</b>
        ) : (
          <select
            name="ncbd"
            id="ncbd"
            value={ncbd}
            required
            onChange={(e) => setNcbd(e.target.value)}
          >
            <option value="">-- select ---</option>
            <option value="2.5.2025">2.5.2025</option>
            <option value="2.12.2025">2.12.2025</option>
            <option value="2.19.2025">2.19.2025</option>
            <option value="2.26.2025">2.26.2025</option>
            <option value="3.5.2025">3.5.2025</option>
          </select>
        )}
      </div>
      <b>Issues:</b>
      <div className="divider"></div> {issues.length}
      {issues.length === 0 ? " issues this week" : " issues you to buy"}
 
        {issues.map((issue, index) => (
          <div key={index}className="issuesGrid">
            <button onClick={() => removeIssue(index)}>
              <FaTrashAlt />
            </button>
            {issue.title} #{issue.number} | {issue.publisher}{" "}
            
          </div>
        ))} 
      <div className="divider"></div>{" "}
      <div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setIssueTitle(e.target.value)}
            value={issueTitle}
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            onChange={(e) => setIssueNum(e.target.value)}
            value={issueNum}
          />
        </div>

        <div>
          <label htmlFor="number">Publisher</label>
          <select
            name="publisher"
            id="publisher"
            value={issuePub}
            required
            onChange={(e) => setIssuePub(e.target.value)}
          >
            <option value="">-- select ---</option>
            <option value="DC">DC</option>
            <option value="Dynamite">Dynamite</option>
            <option value="Image">Image</option>
            <option value="Marvel">Marvel</option>
            <option value="Nacelle Press">Nacell Press</option>
          </select>
        </div>
        <div>
          <button className="secondary" onClick={() => addIssue()}>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="right h5">
        {isEdit ? (
          <>
            <button
              className="secondary"
              onClick={() => updateNcbd(id, ncbd, issues)}
            >
              <FaRedo /> Update 
            </button>
            <button className="primary" onClick={() => deleteNcbd(id)}>
             <FaTrashAlt/> Delete
            </button>
          </>
        ) : (
          <button className="primary" onClick={() => submitNcbd(ncbd, issues)}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default ComicForm;
