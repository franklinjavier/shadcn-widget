import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Chat Widget Demo
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            This is a demonstration page showing how the embeddable chat widget works.
          </p>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              How to Install
            </h2>
            <p className="text-slate-600 mb-4">
              Add this script tag to your website to embed the chat widget:
            </p>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code>{`<script src="${window.location.origin}/embed.js"></script>`}</code>
            </pre>
          </div>

          <div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Features
            </h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Modern, responsive design with smooth animations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Easy to embed on any website with a single script tag</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Built with React and shadcn/ui components</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customizable and extensible</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm">
          Look for the chat button in the bottom right corner →
        </div>
      </div>
    </div>
  );
}

export default App;
