import { Link } from "react-router-dom";
import GetCurrentUser from "../../../hooks/getCurrentUser";

const MyGroups = ({ groups, handleDelete }) => {
  const currentUser = GetCurrentUser();

  return (
    <div class="grid grid-cols-4 gap-4 py-4 px-8">
      {groups.map((group) => (
        <>
          {currentUser && currentUser._id === group.adminId ? (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <Link to={`/singleGroup/${group._id}`}>
            <img class="w-full h-60" src={group.groupIcon[1]} alt="Group icon" />
          </Link>
              <div class="px-6 py-4">
                <div className="flex justify-center mb-5">
                  <button
                    type="button"
                    onClick={() => {
                      handleDelete(group._id);
                    }}
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-12 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                  <Link to={`/updateProduct/${group._id}`}>
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div class="font-bold text-xl mb-2">{group.groupName}</div>
                <p class="text-gray-700 text-base">{group.description}</p>
              </div>
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};

export default MyGroups;
