import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CustomNavbar from './components/Navbar';

// navbar
const Home = lazy(() => import('./pages/Home'));
const Practice = lazy(() => import('./pages/Practice/Practice'));
const Progress = lazy(() => import('./pages/Progress'));
const UserProfile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/Error'));

//classes
const ClassOne = lazy(() => import('./pages/Practice/Class/ClassOne/ClassOne'));
const ClassTwo = lazy(() => import('./pages/Practice/Class/ClassTwo/ClassTwo'));
const ClassThree = lazy(() => import('./pages/Practice/Class/ClassThree/ClassThree'));
const ClassFourth = lazy(() => import('./pages/Practice/Class/ClassFour/ClassFour'));
const ClassFive = lazy(() => import('./pages/Practice/Class/ClassFive/ClassFive'));

//topics
const Addition = lazy(() => import('./pages/Practice/Topic/Addition'));
const Subtraction = lazy(() => import('./pages/Practice/Topic/Subtraction'));
const Multiplication = lazy(() => import('./pages/Practice/Topic/Multiplication'));
const Divison = lazy(() => import('./pages/Practice/Topic/Divison'));
const SquareRoots = lazy(() => import('./pages/Practice/Topic/SquareRoots'));
const CubeRoots = lazy(() => import('./pages/Practice/Topic/CubeRoots'));
const Squaring = lazy(() => import('./pages/Practice/Topic/Squaring'));
const Cubing = lazy(() => import('./pages/Practice/Topic/Cubing'));


//ClassOne
const CountingAndNumbers = lazy(() => import('./pages/Practice/Class/ClassOne/CountingAndNumbers'));
const BasicAddition = lazy(() => import('./pages/Practice/Class/ClassOne/BasicAddition'));
const BasicSubtraction = lazy(() => import('./pages/Practice/Class/ClassOne/BasicSubtraction'));
const ShapesAndPatterns = lazy(() => import('./pages/Practice/Class/ClassOne/ShapesAndPatterns'));
const ComparingNumbers = lazy(() => import('./pages/Practice/Class/ClassOne/ComparingNumbers'));

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

            <Route path="/Class/ClassOne/CountingAndNumbers" element={<CountingAndNumbers />} />
            <Route path="/Class/ClassOne/BasicAddition" element={<BasicAddition />} />
            <Route path="/Class/ClassOne/BasicSubtraction" element={<BasicSubtraction />} />
            <Route path="/Class/ClassOne/ShapesAndPatterns" element={<ShapesAndPatterns />} />
            <Route path="/Class/ClassOne/ComparingNumbers" element={<ComparingNumbers />} />
            
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
