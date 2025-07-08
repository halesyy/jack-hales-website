import Head from "next/head";
import { useState } from "react";
import VerticalTab from "components/VerticalTab";

function MachineLearningPage() {
  const [activeTab, setActiveTab] = useState("random-forest");

  const tabs = [
    {
      id: "random-forest",
      title: "Random Forest",
      icon: "🌲",
      category: "Algorithm",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-600">Random Forest</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Input → Output</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Input:</strong> Features (X) + Labels (y)<br/>
                <strong>Output:</strong> Predictions + Feature Importance
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Core Process</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Build multiple decision trees</li>
                <li>Each tree votes on prediction</li>
                <li>Majority vote = final prediction</li>
                <li>Average feature importance across trees</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Key Parameters</h3>
              <div className="bg-gray-100 p-3 rounded border">
                <code className="text-xs text-green-700">
                  n_estimators: 100-500<br/>
                  max_depth: 10-20<br/>
                  min_samples_split: 2-10
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "neural-networks",
      title: "Neural Networks",
      icon: "🧠",
      category: "Algorithm",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-600">Neural Networks</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Input → Output</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Input:</strong> Features (X) + Labels (y)<br/>
                <strong>Output:</strong> Predictions + Learned Representations
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Core Process</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Forward pass through layers</li>
                <li>Compute loss function</li>
                <li>Backpropagate gradients</li>
                <li>Update weights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Key Parameters</h3>
              <div className="bg-gray-100 p-3 rounded border">
                <code className="text-xs text-green-700">
                  layers: [input, hidden, output]<br/>
                  activation: relu/sigmoid/tanh<br/>
                  learning_rate: 0.001-0.1
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "svm",
      title: "Support Vector Machine",
      icon: "⚡",
      category: "Algorithm",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-600">Support Vector Machine</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Input → Output</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Input:</strong> Features (X) + Labels (y)<br/>
                <strong>Output:</strong> Predictions + Support Vectors
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Core Process</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Find optimal hyperplane</li>
                <li>Maximize margin between classes</li>
                <li>Use support vectors for boundary</li>
                <li>Apply kernel transformation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Key Parameters</h3>
              <div className="bg-gray-100 p-3 rounded border">
                <code className="text-xs text-green-700">
                  kernel: linear/rbf/poly<br/>
                  C: 0.1-100<br/>
                  gamma: 0.001-1.0
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "optuna",
      title: "Optuna",
      icon: "🔧",
      category: "Tool",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-600">Optuna</h2>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Input → Output</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Input:</strong> Parameter space + Objective function<br/>
                <strong>Output:</strong> Optimized parameters + Best score
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Core Process</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Define parameter search space</li>
                <li>Create objective function</li>
                <li>Run optimization trials</li>
                <li>Return best parameters</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-1">Key Parameters</h3>
              <div className="bg-gray-100 p-3 rounded border">
                <code className="text-xs text-green-700">
                  n_trials: 100-1000<br/>
                  direction: minimize/maximize<br/>
                  sampler: tpe/grid/random
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Machine Learning - Jack Hales</title>
        <meta
          name="description"
          content="Machine Learning models and algorithms I've worked with and learned about."
        />
      </Head>
      
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Machine Learning</h1>
          
          <div className="h-[80vh] overflow-x-auto">
            <div className="flex gap-6 pb-6" style={{ minWidth: 'max-content' }}>
              {tabs.map((tab) => (
                <VerticalTab
                  key={tab.id}
                  title={tab.title}
                  icon={tab.icon}
                  category={tab.category}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.content}
                </VerticalTab>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MachineLearningPage; 