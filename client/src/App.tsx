import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { lazy, Suspense, ReactNode, useEffect } from 'react';
import { SignIn, SignUp, useUser } from '@clerk/clerk-react';
import CustomNavbar from './components/Navbar';

// lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Practice = lazy(() => import('./pages/Practice/Practice'));
const Progress = lazy(() => import('./pages/ProgressOverview'));
const UserProfile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/Error'));

// Classes
const ClassOne = lazy(() => import('./pages/Practice/Class/ClassOne/ClassOne'));
const ClassTwo = lazy(() => import('./pages/Practice/Class/ClassTwo/ClassTwo'));
const ClassThree = lazy(() => import('./pages/Practice/Class/ClassThree/ClassThree'));
const ClassFour = lazy(() => import('./pages/Practice/Class/ClassFour/ClassFour'));
const ClassFive = lazy(() => import('./pages/Practice/Class/ClassFive/ClassFive'));

// Topics
const Addition = lazy(() => import('./pages/Practice/Topic/Addition'));
const Subtraction = lazy(() => import('./pages/Practice/Topic/Subtraction'));
const Multiplication = lazy(() => import('./pages/Practice/Topic/Multiplication'));
const Division = lazy(() => import('./pages/Practice/Topic/Divison'));
const SquareRoots = lazy(() => import('./pages/Practice/Topic/SquareRoots'));
const CubeRoots = lazy(() => import('./pages/Practice/Topic/CubeRoots'));
const Squaring = lazy(() => import('./pages/Practice/Topic/Squaring'));
const Cubing = lazy(() => import('./pages/Practice/Topic/Cubing'));

// ClassOne topics
const CountingAndNumbers = lazy(() => import('./pages/Practice/Class/ClassOne/CountingAndNumbers'));
const BasicAddition = lazy(() => import('./pages/Practice/Class/ClassOne/BasicAddition'));
const BasicSubtraction = lazy(() => import('./pages/Practice/Class/ClassOne/BasicSubtraction'));
const ShapesAndPatterns = lazy(() => import('./pages/Practice/Class/ClassOne/ShapesAndPatterns'));
const ComparingNumbers = lazy(() => import('./pages/Practice/Class/ClassOne/ComparingNumbers'));

// ClassTwo topics
const AdvancedAddition = lazy(() => import('./pages/Practice/Class/ClassTwo/AdvancedAddition'));
const AdvancedSubtraction = lazy(() => import('./pages/Practice/Class/ClassTwo/AdvancedSubtraction'));
const PlaceValue = lazy(() => import('./pages/Practice/Class/ClassTwo/PlaceValue'));
const IntroductionToTime = lazy(() => import('./pages/Practice/Class/ClassTwo/IntroductionToTime'));
const MoneyAndCountingCoins = lazy(() => import('./pages/Practice/Class/ClassTwo/MoneyAndCountingCoins'));

// Protected Layout
type ProtectedLayoutProps = {
  children: ReactNode;
};

function ProtectedLayout({ children }: ProtectedLayoutProps): JSX.Element {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>; // Wait until user state is loaded
  if (!isSignedIn) return <SignIn />; // Show SignIn if user is not signed in

  return (
    <div>
      <CustomNavbar />
      <div className="pt-16">{children}</div>
    </div>
  );
}

// Redirect after successful sign-in/sign-up
function SignInPage() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect to the homepage or other page after signing in
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="centered">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}

function SignUpPage() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect to the homepage or other page after signing up
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="centered">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}

// Main Layout
function Layout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected routes */}
        <Route
          element={
            <ProtectedLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Progress />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/user/:id" element={<UserProfile />} />

                {/* Class routes */}
                <Route path="/Class/ClassOne" element={<ClassOne />} />
                <Route path="/Class/ClassTwo" element={<ClassTwo />} />
                <Route path="/Class/ClassThree" element={<ClassThree />} />
                <Route path="/Class/ClassFour" element={<ClassFour />} />
                <Route path="/Class/ClassFive" element={<ClassFive />} />

                {/* Topic routes */}
                <Route path="/Topic/Addition" element={<Addition />} />
                <Route path="/Topic/Subtraction" element={<Subtraction />} />
                <Route path="/Topic/Multiplication" element={<Multiplication />} />
                <Route path="/Topic/Divison" element={<Division />} />
                <Route path="/Topic/SquareRoots" element={<SquareRoots />} />
                <Route path="/Topic/CubeRoots" element={<CubeRoots />} />
                <Route path="/Topic/Squaring" element={<Squaring />} />
                <Route path="/Topic/Cubing" element={<Cubing />} />

                {/* ClassOne topic routes */}
                <Route path="/Class/ClassOne/CountingAndNumbers" element={<CountingAndNumbers />} />
                <Route path="/Class/ClassOne/BasicAddition" element={<BasicAddition />} />
                <Route path="/Class/ClassOne/BasicSubtraction" element={<BasicSubtraction />} />
                <Route path="/Class/ClassOne/ShapesAndPatterns" element={<ShapesAndPatterns />} />
                <Route path="/Class/ClassOne/ComparingNumbers" element={<ComparingNumbers />} />

                {/* ClassTwo topic routes */}
                <Route path="/Class/ClassTwo/AdvancedAddition" element={<AdvancedAddition />} />
                <Route path="/Class/ClassTwo/AdvancedSubtraction" element={<AdvancedSubtraction />} />
                <Route path="/Class/ClassTwo/PlaceValue" element={<PlaceValue />} />
                <Route path="/Class/ClassTwo/IntroductionToTime" element={<IntroductionToTime />} />
                <Route path="/Class/ClassTwo/MoneyAndCountingCoins" element={<MoneyAndCountingCoins />} />
              </Routes>
            </ProtectedLayout>
          }
        />
      </Routes>
    </Suspense>
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
