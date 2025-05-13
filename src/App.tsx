import './App.css'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-blue-600">
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 z-10">
        <div className="text-white text-2xl font-bold">DUNKWARE</div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white hover:underline">Platform</a>
          <span className="text-white">|</span>
          <a href="#" className="text-white hover:underline">Solutions</a>
          <span className="text-white">|</span>
          <a href="#" className="text-white hover:underline">About</a>
        </nav>
      </header>
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-white text-7xl font-bold tracking-wider">DUNKWARE</h1>
      </main>
    </div>
  )
}

export default App
