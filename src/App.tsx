import React from 'react';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600">Vítej na mé webové stránce!</h1>
      <p className="text-gray-700">Toto je můj první projekt v Reactu s Tailwind CSS.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Klikni na mě
      </button>
    </div>
  );
};

export default App;