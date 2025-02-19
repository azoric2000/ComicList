import React, { useEffect, useRef } from "react";
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
  const [issuePub, setIssuePub] = useState([]);
  const [wednesdays, setWednesdays] = useState([]);

  let currentDate = new Date();

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

  const getNextWednesdays = () => {
    console.log("got to here");
    const wednesdays = [];
    const today = new Date();
    let day = today.getDay();
    let daysUntilWednesday = (3 - day + 7) % 7;

    for (let i = 0; i < 4; i++) {
      let nextWednesday = new Date(today);
      nextWednesday.setDate(today.getDate() + daysUntilWednesday + i * 7);
      nextWednesday = nextWednesday.toString().substring(0, 15);
      console.log(nextWednesday);
      wednesdays.push(nextWednesday);
    }

    setWednesdays(wednesdays);
  };

  useEffect(() => {
    console.log("did effect");
    if (wednesdays.length === 0) {
      getNextWednesdays();
    }
  });

  return (
    <div className="card full">
      <h3>{isEdit ? `Edit List for Week: ${ncbd} ` : `Add New Comic List`} </h3>
      <div>
        <label htmlFor="ndcd">New Comic Book Date:</label>
        {isEdit ? (
          <b>{ncbd}</b>
        ) : (
          <>
            <select
              name="ncbd"
              id="ncbd"
              value={ncbd}
              multiple={false}
              required
              onChange={(e) => setNcbd(e.target.value)}
            >
              <option value="">-- select ---</option>
              {wednesdays.map((wednesday, index) => (
                <option key={index} value={wednesday}>
                  {wednesday}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <b>Issues:</b>
      <div className="divider"></div> {issues.length}
      {issues.length === 0 ? " issues this week" : " issues you to buy"}
      {issues.map((issue, index) => (
        <div key={index} className="issuesGrid">
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
              <FaTrashAlt /> Delete
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
