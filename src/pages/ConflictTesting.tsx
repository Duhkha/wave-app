import { MockButton, MockCard, MockInput, MockBadge, MockDataTable, ConflictingComponent } from '../components/MockUILibrary'
import { 
  MaterialButton, 
  BootstrapCard, 
  AntDesignInput, 
  ChakraUIBadge, 
  ProblematicComponent,
  GlobalConflictComponent,
  TypographyConflictComponent 
} from '../components/RealisticMockLibrary'

export default function ConflictTesting() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-2">
            UI Library Conflict Testing
          </h1>
          <p className="text-slate-600 dark:text-gray-300">
            This page simulates what happens when you install your unprefixed UI library alongside this app's styles
          </p>
        </div>

        {/* Test 1: Different Design Systems */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
            1. Different Design Systems Comparison
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Your app's styles */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-100 mb-4">
                Your App's Style
              </h3>
              <div className="space-y-4">
                <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  App Button
                </button>
                <input 
                  type="text" 
                  placeholder="App input"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  App Badge
                </span>
              </div>
            </div>

            {/* Material Design style */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Material Design Style
              </h3>
              <div className="space-y-4">
                <MaterialButton variant="contained" color="primary">
                  Material Button
                </MaterialButton>
                <AntDesignInput placeholder="Material input" size="middle" />
                <ChakraUIBadge colorScheme="blue" variant="solid">
                  Material Badge
                </ChakraUIBadge>
              </div>
            </div>

            {/* Bootstrap style */}
            <BootstrapCard header="Bootstrap Style">
              <div className="space-y-4">
                <MaterialButton variant="outlined" color="secondary">
                  Bootstrap Button
                </MaterialButton>
                <AntDesignInput placeholder="Bootstrap input" size="large" />
                <ChakraUIBadge colorScheme="green" variant="outline">
                  Bootstrap Badge
                </ChakraUIBadge>
              </div>
            </BootstrapCard>
          </div>
        </div>

        {/* Test 2: Nested components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
            2. Nested Component Testing
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-4">
            This tests how library components behave when nested inside your app's layout components:
          </p>
          
          {/* Your app's card containing library components */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-6 mb-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-100 mb-4">
              App Card Container → Library Components Inside
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MockButton variant="primary" size="sm">Primary</MockButton>
              <MockButton variant="secondary" size="md">Secondary</MockButton>
              <MockButton variant="danger" size="lg">Danger</MockButton>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <MockInput label="Library Input" placeholder="Inside app card" />
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                  Badges Test
                </label>
                <div className="flex gap-2 flex-wrap">
                  <MockBadge color="blue">Blue</MockBadge>
                  <MockBadge color="green">Green</MockBadge>
                  <MockBadge color="red">Red</MockBadge>
                  <MockBadge color="yellow">Yellow</MockBadge>
                </div>
              </div>
            </div>
          </div>

          {/* Library card containing your app's components */}
          <MockCard padding="md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Library Card Container → App Components Inside
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                App Button Inside Library Card
              </button>
              <input 
                type="text" 
                placeholder="App input inside library card"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </MockCard>
        </div>

        {/* Test 3: Complex components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
            3. Complex Component Testing
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-4">
            Testing complex library components like tables, forms, etc:
          </p>
          <MockDataTable />
        </div>

        {/* Test 4: Same class conflicts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
            4. Direct Class Conflict Testing
          </h2>
          <p className="text-slate-600 dark:text-gray-300 mb-4">
            Components using identical Tailwind classes - which styles win?
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ConflictingComponent />
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Your App Component (same classes)
              </h3>
              <p className="text-slate-600 mb-4">
                This should look identical if there are no conflicts, or different if CSS specificity/order matters.
              </p>
              <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Same button classes
              </button>
            </div>
          </div>
        </div>

        {/* Test 5: Problematic Components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
            5. Problematic Components (Real Conflict Scenarios)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Component with !important styles</h3>
              <ProblematicComponent />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Typography conflicts</h3>
              <TypographyConflictComponent />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Global CSS Override Component</h3>
            <p className="text-slate-600 dark:text-gray-300 mb-4">
              This simulates a library component that applies global styles affecting all children:
            </p>
            <GlobalConflictComponent />
          </div>
        </div>

        {/* Test 6: Size and Spacing Conflicts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
            6. Size and Spacing Conflicts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
              <h4 className="font-semibold mb-3">Your App Sizes</h4>
              <div className="space-y-2">
                <AntDesignInput size="small" placeholder="Small input" />
                <AntDesignInput size="middle" placeholder="Medium input" />
                <AntDesignInput size="large" placeholder="Large input" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold mb-3">Library Sizes (Different Scale)</h4>
              <div className="space-y-2">
                <MaterialButton variant="contained" color="primary">Small Btn</MaterialButton>
                <MaterialButton variant="contained" color="secondary">Medium Btn</MaterialButton>
                <MaterialButton variant="contained" color="error">Large Btn</MaterialButton>
              </div>
            </div>

            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold mb-3">Mixed Components</h4>
              <div className="space-y-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">App Button</button>
                <MaterialButton variant="outlined" color="primary">Library Button</MaterialButton>
                <input type="text" placeholder="App input" className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Testing Instructions
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
            <li>• Compare how components look side-by-side</li>
            <li>• Check if nesting changes component appearance</li>
            <li>• Look for unintended style inheritance</li>
            <li>• Test in both light and dark modes</li>
            <li>• Pay attention to spacing, colors, borders, and typography</li>
            <li>• Use browser dev tools to inspect conflicting classes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}