import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CreateGroup() {
  const history = useNavigate();

  const initialState = {
    groupName: "",
    category: "",
    description: "",
  };

  const [state, setState] = useState(initialState);

  const { groupName, category, description } = state;

  const { _id } = useParams();

  //get one item
  const data = async () => {
    const response = await axios.get(
      `http://localhost:3002/api/group/getOneGroup/${_id}`
    );
    setState(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    data();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const updateGroup = async (e) => {
    e.preventDefault();

    const data = {
      groupName: groupName,
      category: category,
      description: description,
    };

    //update the item
    axios.patch(`http://localhost:3002/api/group/updateGroup/${_id}`, data);

    alert("Product updated successfully..");
    history("/user/viewmygroups");
  };

  return (
    <div className="grid h-screen place-items-center">
      <form className="w-full max-w-lg" onSubmit={updateGroup}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Group Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="groupName"
              name="groupName"
              value={state.groupName ? state.groupName : ""}
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="category"
                name="category"
                value={state.category ? state.category : ""}
                onChange={handleInputChange}
              >
                <option>Select</option>
                <option>Institutes</option>
                <option>Higher Education</option>
                <option>Exam Guidance</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <label
          for="message"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Group Description
        </label>
        <textarea
          rows="4"
          id="description"
          name="description"
          value={state.description ? state.description : ""}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        ></textarea>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          Add a group Icon
        </label>
        <input type="file" />
        <div className="place-self-end text-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateGroup;