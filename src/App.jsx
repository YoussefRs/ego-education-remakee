import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./globals/Navigation/Navigation";
import Home from "./pages/home/Home";
import SideBar from "./globals/Navigation/SideBar";
import Courses from "./pages/courses/Courses";
import CoursesDetails from "./pages/courses-details/CoursesDetails";
import Footer from "./globals/Footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";
import Elearning from "./pages/eLearning/Elearning";
import Loading from "./globals/Loading/Loading";
import EnrollementById from "./pages/enrollmentById/EnrollementById";
import Enrollment from "./pages/enrollment/Enrollment";
import Research from "./pages/reseach/Research";
import Partners from "./pages/partners/Partners";
import ConfirmPolicy from "./pages/enrollment/ConfirmPolicy";
import Policy from "./pages/policy/Policy";
import Dashboard from "./pages/dash/Dashboard";
import { useTranslation } from "react-i18next";
import Cookies from "./components/Home/CookieConsent";
import CookieConsent from "./components/Home/CookieConsent";
import SingleNew from "./pages/news/SingleNew";
import Student from "./pages/student/Student";

function Layout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const location = useLocation();
  const backgroundColor = location.pathname === "/news" ? "#046635" : "";

  return (
    <>
      <Navigation show={setShowSideMenu} backgroundColor={backgroundColor} />
      <SideBar show={showSideMenu} handleShow={setShowSideMenu} />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://cdn.parcellab.com/img/flags/us.png",
    },
    {
      code: "br",
      name: "Español",
      flag: "https://cdn.parcellab.com/img/flags/br.png",
    },
    {
      code: "it",
      name: "Italiano",
      flag: "https://cdn.parcellab.com/img/flags/it.png",
    },
  ];

  const [selectedLang, setSelectedLang] = useState(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    return savedLang ? JSON.parse(savedLang) : languages[0]; // Default to English
  });

  useEffect(() => {
    i18n.changeLanguage(selectedLang.code);
  }, [selectedLang]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ScrollToTop />
      <CookieConsent />

      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/news"
            element={
              <Layout>
                <SingleNew />
              </Layout>
            }
          />
          <Route
            path="/policies-privacy"
            element={
              <Layout>
                <Policy />
              </Layout>
            }
          />
          <Route
            path="/institute"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/elearn"
            element={
              <Layout>
                <Elearning />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              <Layout>
                <CoursesDetails />
              </Layout>
            }
          />
          <Route
            path="/apply/:id"
            element={
              <Layout>
                <EnrollementById />
              </Layout>
            }
          />
          <Route path="/research" element={<Research />} />
          <Route
            path="/partners"
            element={
              <Layout>
                <Partners />
              </Layout>
            }
          />
          <Route
            path="/confirm"
            element={
              <Layout>
                <ConfirmPolicy />
              </Layout>
            }
          />
          <Route
            path="/apply-enrollement"
            element={
              <Layout>
                <Enrollment />
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <Enrollment />
              </Layout>
            }
          />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/student-office" element={<Layout>
                <Student />
              </Layout>} />

          
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
