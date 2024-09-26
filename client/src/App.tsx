import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CustomNavbar from './components/Navbar';

// navbar
const Home = lazy(() => import('./pages/Home'));
const Practice = lazy(() => import('./pages/Practice/Practice'));
const Progress = lazy(() => import('./pages/Progress'));
const UserProfile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/Error'));

//classe
const ClassOne = lazy(() => import('./pages/Practice/Class/ClassOne'));
const ClassTwo = lazy(() => import('./pages/Practice/Class/ClassTwo'));
const ClassThree = lazy(() => import('./pages/Practice/Class/ClassThree'));
const ClassFourth = lazy(() => import('./pages/Practice/Class/ClassFour'));
const ClassFive = lazy(() => import('./pages/Practice/Class/ClassFive'));

//topics
const Addition = lazy(() => import('./pages/Practice/Topic/Addition'));
const Subtraction = lazy(() => import('./pages/Practice/Topic/Subtraction'));
const Multiplication = lazy(() => import('./pages/Practice/Topic/Multiplication'));
const Divison = lazy(() => import('./pages/Practice/Topic/Divison'));
const SquareRoots = lazy(() => import('./pages/Practice/Topic/SquareRoots'));
const CubeRoots = lazy(() => import('./pages/Practice/Topic/CubeRoots'));
const Squaring = lazy(() => import('./pages/Practice/Topic/Squaring'));
const Cubing = lazy(() => import('./pages/Practice/Topic/Cubing'));

function Layout() {
  return (
    <div>
      <CustomNavbar />
      <div className="pt-16">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Progress />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Class/ClassOne" element={<ClassOne />} />
            <Route path="/Class/ClassTwo" element={<ClassTwo />} />
            <Route path="/Class/ClassThree" element={<ClassThree />} />
            <Route path="/Class/ClassFour" element={<ClassFourth />} />
            <Route path="/Class/ClassFive" element={<ClassFive />} />
            <Route path="/Topic/Addition" element={<Addition />} />
            <Route path="/Topic/Subtraction" element={<Subtraction />} />
            <Route path="/Topic/Multiplication" element={<Multiplication />} />
            <Route path="/Topic/Divison" element={<Divison />} />
            <Route path="/Topic/SquareRoots" element={<SquareRoots />} />
            <Route path="/Topic/CubeRoots" element={<CubeRoots />} />
            <Route path="/Topic/Squaring" element={<Squaring />} />
            <Route path="/Topic/Cubing" element={<Cubing />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
