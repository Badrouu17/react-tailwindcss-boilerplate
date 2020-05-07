import React from "react";

function App() {
  return (
    <div
      className="h-screen flex align-center justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(to right, #0298b7, #1ec9b8)",
      }}
    >
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={require("./rt.jpg")} alt="Display" />
        <div className="px-6 py-4">
          <div className="font-bold text-teal-400 text-xl mb-2">
            Create-React-App + TailwindCSS Boilerplate
          </div>
          <p className="text-gray-700 text-base">
            This is a simple boilerplate project starter that combine the famous
            create-react-app with TailwindCSS, All the configuration been taken
            care of, All u have to do is "git clone" the project and you are
            ready to start developing!! Enjoy <span></span>💙.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #TailwindCSS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #React
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
